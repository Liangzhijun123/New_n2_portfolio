import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import img from "./assets/footer.svg";

const Experience = () => {
  return (
    <>
      <div id="experience" className="relative">
        <img
          src={img}
          className="absolute w-full mt-24  z-0"
          alt="Background"
        />
        <div className="relative z-10">
          <div className="text-center">
            <p className="font-raleway text-6xl font-bold text-white mt-40">
              Experiences
            </p>
          </div>

          <div className="mt-20 w-full">
            <figure className=" left-0 stroke-white absolute mt-[-10px] ml-[250px]">
              <svg
                className=" w-60px  h-60px"
                width="75px"
                height="75px"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="75px"
                  cy="50"
                  r="20"
                  className="stroke-primary stroke-1 fill-none"
                ></circle>
                <circle
                  cx="75px"
                  cy="50"
                  r="20"
                  className="stroke-[5px] fill-light "
                  pathLength="1px"
                  stroke-dashoffset="0px"
                  stroke-dasharray="1px 1px"
                ></circle>
                <circle
                  cx="75px"
                  cy="50"
                  r="20"
                  className="fill-white  stroke-1 "
                ></circle>
              </svg>
              <svg
                height="523"
                width="300"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-[51px] mt-[-22px]"
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
                className=" w-60px  h-60px mt-[-22px]"
                width="75px"
                height="75px"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="75px"
                  cy="50"
                  r="20"
                  className="stroke-primary stroke-1 fill-none"
                ></circle>
                <circle
                  cx="75px"
                  cy="50"
                  r="20"
                  className="stroke-[5px] fill-light "
                  pathLength="1px"
                  stroke-dashoffset="0px"
                  stroke-dasharray="1px 1px"
                ></circle>
                <circle
                  cx="75px"
                  cy="50"
                  r="20"
                  className="fill-white  stroke-1 "
                ></circle>
              </svg>
            </figure>

            <div className="flex flex-col gap-[33px] justify-center text-left text-white relative ml-[400px] ">
              <p className="font-raleway text-[30px] tracking-[3px]">
                <span className="font-bold underline">
                  Frontend Developer Intern{" "}
                </span>{" "}
                - Shop Online New York
              </p>
              <p
                className="font-radley text-[30px] tracking-[3px]"
                style={{ fontStyle: "italic" }}
              >
                April 15th, 2024 - Present
              </p>
              <ul className="list-disc list-inside mt-4 text-white w-[1000px] flex flex-col gap-10">
                <li className="font-roboto-mono text-[20px] tracking-[3px]">
                  Collaborated closely with the design team to translate
                  wireframes into fully functional web interfaces.
                </li>
                <li className="font-roboto-mono text-[20px] tracking-[3px]">
                  Employed frontend frameworks and libraries such as React.js
                  and Tailwind CSS to enhance interactivity and the development
                  process.
                </li>
                <li className="font-roboto-mono text-[20px] tracking-[3px]">
                  Implemented data fetching and state management techniques to
                  create dynamic user experiences, reducing page load times and
                  enhancing overall performance.
                </li>
                <li className="font-roboto-mono text-[20px] tracking-[3px]">
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
    </>
  );
};

export default Experience;
