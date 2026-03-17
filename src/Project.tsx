import React, { useState } from "react";
import projects from "./data/projects";
import ProjectModal from "./ProjectModal";

const Project = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const nextMobile = () => setMobileIndex((prev) => (prev + 1) % projects.length);
  const prevMobile = () => setMobileIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <>
      <div id="project" className="py-12 md:py-20">
        <div className="md:mt-[90px] mt-[40px] xl:mt-[140px]">
          <p className="font-raleway text-[40px] md:text-[64px] font-bold text-white flex flex-row justify-center items-center">
            Projects
          </p>
          <div className="xl:mt-[100px] md:mt-[120px] mt-10 overflow-x-auto pb-8">
            <div className="mt-5 flex flex-row justify-center items-center">
              <div className="hidden md:flex flex-wrap justify-center items-center gap-[30px]">
                {projects.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#060C26] border-[#485789] border flex flex-col justify-between text-left p-10 gap-[10px] relative"
                    style={{ width: "650px", minHeight: "600px", margin: "15px", overflow: "hidden" }}
                  >
                    {item.ranking && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-[#99CEFD] to-[#0F3E68] rounded-full w-12 h-12 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">#{item.ranking}</span>
                      </div>
                    )}
                    <div>
                      <img
                        src={item.picture}
                        alt={item.project}
                        className="w-full h-auto"
                      />
                      <p className="text-white font-radley text-[20px]">
                        <span style={{ fontStyle: "italic" }}>Project: </span>
                        <span className="font-arial text-[20px]">
                          {item.project}
                        </span>
                      </p>
                      <p className="text-white font-radley text-[20px]">
                        <span style={{ fontStyle: "italic" }}>Year: </span>
                        <span className="font-arial text-[20px]">
                          {item.year}
                        </span>
                      </p>
                      <p className="text-white font-radley text-[20px]">
                        <span style={{ fontStyle: "italic" }}>Type: </span>
                        <span className="font-arial text-[20px]">
                          {item.type}
                        </span>
                      </p>
                      {item.short && (
                        <p className="text-[#D0DAF8] font-arial text-[16px] mt-2">
                          {item.short}
                        </p>
                      )}
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={() => setSelected(index)}
                        className="border border-[#0F3E68] rounded-xl w-[236px] h-[50px] text-white text-[20px] font-raleway font-bold tracking-[4px] flex items-center justify-center mt-5 hover:bg-[#061726] hover:border-[#99CEFD]"
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:hidden mt-10">
              <div className="mx-auto w-full max-w-[340px] relative">
                {projects.length > 0 && (
                  <div className="bg-[#060C26] border-[#485789] border flex flex-col justify-between gap-5 text-left px-5 py-5 rounded-xl shadow-lg min-h-[520px]">
                    {projects[mobileIndex].ranking && (
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-[#99CEFD] to-[#0F3E68] rounded-full w-10 h-10 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">#{projects[mobileIndex].ranking}</span>
                      </div>
                    )}
                    <div>
                      <img
                        src={projects[mobileIndex].picture}
                        alt={projects[mobileIndex].project}
                        className="w-full h-auto mb-4 rounded-md"
                      />
                      <p className="text-white font-radley text-[16px]">
                        <span style={{ fontStyle: "italic" }}>Project: </span>
                        <span className="font-arial text-[16px]">
                          {projects[mobileIndex].project}
                        </span>
                      </p>
                      <p className="text-white font-radley text-[16px]">
                        <span style={{ fontStyle: "italic" }}>Year: </span>
                        <span className="font-arial text-[16px]">
                          {projects[mobileIndex].year}
                        </span>
                      </p>
                      <p className="text-white font-radley text-[16px]">
                        <span style={{ fontStyle: "italic" }}>Type: </span>
                        <span className="font-arial text-[16px]">
                          {projects[mobileIndex].type}
                        </span>
                      </p>
                      {projects[mobileIndex].short && (
                        <p className="text-[#D0DAF8] font-arial text-[13px] mt-2">
                          {projects[mobileIndex].short}
                        </p>
                      )}
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={() => setSelected(mobileIndex)}
                        className="border border-[#0F3E68] rounded-xl w-[236px] h-[50px] text-white text-[16px] font-raleway font-bold tracking-[4px] flex items-center justify-center hover:bg-[#061726] hover:border-[#99CEFD]"
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-3 pb-3">
                  <button
                    onClick={prevMobile}
                    className="bg-[#0F3E68] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#99CEFD]"
                    aria-label="Previous project"
                  >
                    ◀
                  </button>
                  <button
                    onClick={nextMobile}
                    className="bg-[#0F3E68] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#99CEFD]"
                    aria-label="Next project"
                  >
                    ▶
                  </button>
                </div>
              </div>

              <div className="flex justify-center items-center gap-2 mt-8">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setMobileIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === mobileIndex ? "bg-[#99CEFD] scale-110" : "bg-[#5f7db0]"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {selected !== null && (
        <ProjectModal project={projects[selected]} onClose={() => setSelected(null)} />
      )}
    </>
  );
};

export default Project;
