import React from 'react';
import img from "./assets/footer.svg";

const Experience = () => {
  return (
    <>
      <div id="experience" className="relative w-full">
        <div className="relative z-10">
          <div className="text-center">
            <p className="font-raleway text-6xl font-bold text-white mt-40 md:text-5xl sm:text-4xl">
              Experiences
            </p>
          </div>

          <div className="mt-20 w-full px-10">
            <div className="flex flex-col md:flex-row md:gap-10">
              <figure className="hidden md:block md:mt-[-10px] md:ml-[250px] sm:ml-0 sm:mt-0 flex-shrink-0">
                <svg
                  className="w-20 h-20 md:w-16 md:h-16 sm:w-14 sm:h-14 ml-[-45px]"
                  width="75px"
                  height="75px"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="75"
                    cy="50"
                    r="20"
                    className="stroke-primary stroke-1 fill-none"
                  ></circle>
                  <circle
                    cx="75"
                    cy="50"
                    r="20"
                    className="stroke-5 fill-light"
                    pathLength="1"
                    stroke-dashoffset="0"
                    stroke-dasharray="1 1"
                  ></circle>
                  <circle
                    cx="75"
                    cy="50"
                    r="20"
                    className="fill-white stroke-1"
                  ></circle>
                </svg>
                <svg
                  height="523"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[-22px] "
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="523"
                    style={{ stroke: "white", strokeWidth: 14 }}
                  />
                </svg>
                <svg
                  className="w-20 h-20 md:w-16 md:h-16 sm:w-14 sm:h-14 mt-[-24px] ml-[-45px]"
                  width="75px"
                  height="75px"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="75"
                    cy="50"
                    r="20"
                    className="stroke-primary stroke-1 fill-none"
                  ></circle>
                  <circle
                    cx="75"
                    cy="50"
                    r="20"
                    className="stroke-5 fill-light"
                    pathLength="1"
                    stroke-dashoffset="0"
                    stroke-dasharray="1 1"
                  ></circle>
                  <circle
                    cx="75"
                    cy="50"
                    r="20"
                    className="fill-white stroke-1"
                  ></circle>
                </svg>
              </figure>

              <div className="flex flex-col gap-8 justify-center text-left text-white relative md:ml-[100px] sm:ml-0">
                <p className="font-raleway text-[30px] tracking-[3px] md:text-[25px] sm:text-[20px]">
                  <span className="font-bold underline">
                    Frontend Developer Intern
                  </span>{" "}
                  - Shop Online New York
                </p>
                <p
                  className="font-radley text-[30px] tracking-[3px] md:text-[25px] sm:text-[20px]"
                  style={{ fontStyle: "italic" }}
                >
                  April 15th, 2024 - Present
                </p>
                <ul className="list-disc list-inside mt-4 text-white flex flex-col gap-10 xl:w-[900px]  md:w-[800px] sm:w-full px-10">
                  <li className="font-roboto-mono text-[20px] tracking-[3px] md:text-[18px] sm:text-[16px]">
                    Collaborated closely with the design team to translate
                    wireframes into fully functional web interfaces.
                  </li>
                  <li className="font-roboto-mono text-[20px] tracking-[3px] md:text-[18px] sm:text-[16px]">
                    Employed frontend frameworks and libraries such as React.js
                    and Tailwind CSS to enhance interactivity and the development
                    process.
                  </li>
                  <li className="font-roboto-mono text-[20px] tracking-[3px] md:text-[18px] sm:text-[16px]">
                    Implemented data fetching and state management techniques to
                    create dynamic user experiences, reducing page load times and
                    enhancing overall performance.
                  </li>
                  <li className="font-roboto-mono text-[20px] tracking-[3px] md:text-[18px] sm:text-[16px]">
                    Conducted thorough testing and debugging to ensure
                    cross-browser compatibility, responsiveness, and
                    accessibility, resulting in a seamless user experience across
                    various devices and platforms.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
