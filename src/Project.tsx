import React, { useState } from "react";
import projects from "./data/projects";
import ProjectModal from "./ProjectModal";

const Project = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div id="project">
        <div className="md:mt-[130px] mt-[50px] xl:mt-[230px]">
          <p className="font-raleway text-[40px] md:text-[64px] font-bold text-white flex flex-row justify-center items-center">
            Projects
          </p>
          <div className="xl:mt-[100px] md:mt-[150px] mt-10 overflow-x-auto">
            <div className="mt-5 flex flex-row justify-center items-center">
              <div className="hidden md:flex flex-wrap justify-center items-center gap-[30px]">
                {projects.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#060C26] border-[#485789] border flex flex-col justify-between text-left p-10 gap-[10px]"
                    style={{ width: "650px", height: "600px", margin: "15px" }}
                  >
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

            <div className="md:hidden overflow-y-auto h-[550px] mt-10">
              <div className="flex flex-col items-center gap-10 px-6 w-full">
                {projects.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#060C26] border-[#485789] border flex flex-col justify-center gap-10 text-left px-[20px]"
                    style={{ width: "312px", height: "450px" }}
                  >
                    <div>
                      <img
                        src={item.picture}
                        alt={item.project}
                        className="w-full h-auto mb-5"
                      />
                      <p className="text-white font-radley text-[16px]">
                        <span style={{ fontStyle: "italic" }}>Project: </span>
                        <span className="font-arial text-[16px]">
                          {item.project}
                        </span>
                      </p>
                      <p className="text-white font-radley text-[16px]">
                        <span style={{ fontStyle: "italic" }}>Year: </span>
                        <span className="font-arial text-[16px]">
                          {item.year}
                        </span>
                      </p>
                      <p className="text-white font-radley text-[16px]">
                        <span style={{ fontStyle: "italic" }}>Type: </span>
                        <span className="font-arial text-[16px]">
                          {item.type}
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={() => setSelected(index)}
                        className="border border-[#0F3E68] rounded-xl w-[236px] h-[50px] text-white text-[16px] font-raleway font-bold tracking-[4px] flex items-center justify-center hover:bg-[#061726] hover:border-[#99CEFD]"
                      >
                        View Project
                      </button>
                    </div>
                  </div>
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
