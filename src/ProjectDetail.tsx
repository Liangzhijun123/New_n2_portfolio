import React, { useEffect, useState } from "react";
import projects, { ProjectItem } from "./data/projects";

const ProjectDetail: React.FC = () => {
  const [id, setId] = useState<number | null>(null);

  useEffect(() => {
    const parseHash = () => {
      const h = window.location.hash || "";
      const parts = h.replace(/^#\/?/, "").split("/");
      if (parts[0] === "project" && parts[1]) {
        const n = parseInt(parts[1], 10);
        setId(Number.isFinite(n) ? n : null);
      } else {
        setId(null);
      }
    };

    parseHash();
    window.addEventListener("hashchange", parseHash);
    return () => window.removeEventListener("hashchange", parseHash);
  }, []);

  if (id === null || id < 0 || id >= projects.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#02031a] text-white p-6">
        <p className="text-2xl font-bold mb-4">Project not found</p>
        <a
          href="#"
          className="mt-4 inline-block border border-[#0F3E68] rounded-xl px-6 py-2 text-white hover:bg-[#061726]"
        >
          Back to projects
        </a>
      </div>
    );
  }

  const project = projects[id];
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedScreenshot(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-[#02031a] text-white py-12 px-6">
      <div className="max-w-5xl mx-auto bg-[#06102b] border border-[#485789] rounded-lg p-8">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-raleway">
              {project.project}
            </h1>
            <p className="text-sm text-gray-300 mt-2 italic">{project.type} • {project.year}</p>
          </div>
          <div className="flex gap-2">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.location.hash = ""; }}
              className="border border-[#0F3E68] rounded-xl px-4 py-2 text-sm hover:bg-[#061726]"
            >
              Back
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="border border-[#0F3E68] rounded-xl px-4 py-2 text-sm hover:bg-[#061726]"
            >
              Open Original
            </a>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <button
              onClick={() => setSelectedScreenshot(project.picture)}
              className="w-full p-0 bg-transparent border-0 block"
              aria-label={`Open ${project.project} hero image`}
            >
              <img src={project.picture} alt={project.project} className="w-full rounded-md shadow cursor-zoom-in" />
            </button>

            {project.screenshots && project.screenshots.length > 0 && (
              <div className="mt-6">
                <h4 className="text-lg font-bold mb-2">Screenshots</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {project.screenshots.slice(0, 12).map((s, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedScreenshot(s)}
                      className="p-0 bg-transparent border-0 rounded overflow-hidden"
                      aria-label={`Open screenshot ${i + 1} for ${project.project}`}
                    >
                      <img
                        src={s}
                        alt={`${project.project} screenshot ${i + 1}`}
                        className="w-full h-48 md:h-56 object-cover rounded cursor-zoom-in"
                      />
                    </button>
                  ))}
                </div>
                {project.screenshots.length > 12 && (
                  <p className="text-sm text-gray-400 mt-2">Showing first 12 of {project.screenshots.length} screenshots</p>
                )}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <div className="p-3 bg-[#07182a] rounded">
                <div className="text-xs text-gray-400">Role</div>
                <div className="font-bold">{project.role ?? "—"}</div>
              </div>
              <div className="p-3 bg-[#07182a] rounded">
                <div className="text-xs text-gray-400">Duration</div>
                <div className="font-bold">{project.duration ?? "—"}</div>
              </div>
              <div className="p-3 bg-[#07182a] rounded flex-1">
                <div className="text-xs text-gray-400">Outcome</div>
                <div className="font-bold">{project.outcome ?? "—"}</div>
              </div>
            </div>

            <section>
              <h3 className="text-xl font-bold">Overview</h3>
              <p className="text-gray-200 mt-2">{project.short ?? "No short description provided."}</p>
            </section>

            <section>
              <h3 className="text-xl font-bold">Concept & Design</h3>
              <p className="text-gray-200 mt-2">{project.concept ?? "Design notes not available."}</p>
            </section>

            <section>
              <h3 className="text-xl font-bold">Tech & Tools</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {(project.tech ?? []).map((t, i) => (
                  <span key={i} className="text-sm bg-[#07182a] px-3 py-1 rounded">{t}</span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold">Process</h3>
              <div className="text-gray-200 mt-2 space-y-2">
                {project.process && project.process.length > 0 ? (
                  <ol className="list-decimal list-inside space-y-1">
                    {project.process.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                ) : (
                  <p>A short breakdown of the process — research, wireframes, hi-fi, and iterations.</p>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
        {selectedScreenshot && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setSelectedScreenshot(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="max-w-[90%] max-h-[90%] p-4" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedScreenshot}
                alt="Enlarged screenshot"
                className="w-auto max-w-full max-h-[80vh] rounded shadow-lg"
              />
            </div>
          </div>
        )}
    </div>
  );
};

export default ProjectDetail;
