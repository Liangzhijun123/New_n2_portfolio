import React, { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLLIElement>('#experience ul li'));
    if (els.length === 0) return;

    // find figures and map each li to its parent figure so we can animate nodes
    const figures = Array.from(document.querySelectorAll<HTMLElement>('#experience figure'));
    const liToFigure = new Map<HTMLLIElement, HTMLElement | null>();
    figures.forEach((fig) => {
      // the <ul> is usually within the same flex container as the figure
      const ul = fig.parentElement?.querySelector('ul');
      if (!ul) return;
      const lis = Array.from(ul.querySelectorAll<HTMLLIElement>('li'));
      lis.forEach((li) => liToFigure.set(li, fig));
    });

    // add base class
    els.forEach((el) => {
      el.classList.add('reveal');
      el.style.transitionDelay = '';
    });

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const index = els.indexOf(target as HTMLLIElement);
          const delay = Math.max(0, index) * 80;
          target.style.transitionDelay = `${delay}ms`;
          target.classList.add('in-view');

          // trigger associated figure animation (only once per figure)
          const fig = liToFigure.get(target as HTMLLIElement);
          if (fig && !fig.classList.contains('node-in')) {
            // small timeout so the node animates slightly before the bullet (optional)
            window.setTimeout(() => fig.classList.add('node-in'), Math.max(0, delay - 100));
          }

          obs.unobserve(target);
        }
      });
    }, { threshold: 0.12 });

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* Reveal animation for experience list items */
        #experience ul li.reveal {
          opacity: 0;
          transform: translateY(14px) scale(.995);
          transition: opacity 420ms cubic-bezier(.16,.8,.25,1), transform 420ms cubic-bezier(.16,.8,.25,1);
        }
        #experience ul li.reveal.in-view {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Timeline node animation (scale + subtle glow) */
        #experience figure {
          transition: transform 420ms cubic-bezier(.16,.8,.25,1), filter 420ms ease;
        }
        /* target the inner filled circle to scale nicely */
        #experience figure svg circle.fill-white {
          transform-box: fill-box;
          transform-origin: 50% 50%;
          transition: transform 420ms cubic-bezier(.16,.8,.25,1), opacity 420ms ease;
          transform: scale(.85);
          opacity: 0.85;
        }
        #experience figure.node-in svg circle.fill-white {
          transform: scale(1);
          opacity: 1;
          filter: drop-shadow(0 4px 10px rgba(9,122,255,0.15));
        }
        /* Stroke-draw for outer circle and vertical line */
        #experience figure svg circle.stroke-primary,
        #experience figure svg circle.stroke-5 {
          stroke-dasharray: 126;
          stroke-dashoffset: 126;
          transition: stroke-dashoffset 700ms cubic-bezier(.16,.8,.25,1);
          stroke-linecap: round;
        }
        #experience figure.node-in svg circle.stroke-primary,
        #experience figure.node-in svg circle.stroke-5 {
          stroke-dashoffset: 0;
        }

        #experience figure svg line {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          transition: stroke-dashoffset 700ms cubic-bezier(.16,.8,.25,1);
          stroke-linecap: round;
        }
        /* when node becomes active, draw the connecting line */
        #experience figure.node-in ~ svg line,
        #experience figure.node-in svg ~ svg line,
        #experience figure.node-in svg line {
          stroke-dashoffset: 0;
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          #experience ul li.reveal,
          #experience figure,
          #experience figure svg circle,
          #experience figure svg line {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
      <div id="experience" className="relative w-full">
        <div className="relative z-10">
          <div className="text-center">
            <p className="font-raleway text-[40px] font-bold text-white mt-40 md:text-5xl sm:text-4xl">
              Experiences
            </p>
          </div>
          <div className="md:mt-20 mt-5 w-full px-10">
            <div className="flex flex-col justify-center md:flex-row md:gap-10">
              <figure className="hidden md:block md:mt-[-10px]  md:ml-[150px] sm:ml-0 sm:mt-0 ">
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
                  height="650"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[-22px] "
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="650"
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
                </svg>
              </figure>

              <div className="flex flex-col md:gap-8 gap-1 justify-center text-left text-white xl:mt-[-220px] md:mt-[-220px] md:ml-[100px] xl:ml-[100px] sm:ml-0 mt-[5px]  ">
                <p className="font-raleway text-[15px] tracking-[3px] md:text-[25px] sm:text-[16px] text-wrap ">
                  <span className="font-bold underline">UI/UX/Frontend Development Intern</span> -
                  EffectStats LLC
                </p>
                <p
                  className="font-radley text-[15px] tracking-[3px] md:text-[25px] sm:text-[14px]"
                  style={{ fontStyle: "italic" }}
                >
                  September 2025 - October 2025
                </p>
                <ul className="list-disc list-inside md:mt-4 text-white flex flex-col md:gap-10 gap-[10px] xl:w-[900px]  md:w-[700px] sm:w-[600px] px-5">
                  <li className="font-arial text-[13px] md:text-[18px] sm:text-[16px]">
                    Designed and polished old landing page design to modern design.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Conducted reseached on statstic analytic on the webiste.
                  </li>
               
                </ul>
              </div>
            </div>
          </div>
          <div className="md:mt-[-80px] mt-5 w-full px-10">
            <div className="flex flex-col justify-center md:flex-row md:gap-10">
              <figure className="hidden md:block md:mt-[-10px]  md:ml-[150px] sm:ml-0 sm:mt-0 ">
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
                  height="650"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[-22px] "
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="650"
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
                </svg>
              </figure>

              <div className="flex flex-col md:gap-8 gap-1 justify-center text-left text-white xl:mt-[-220px] md:mt-[-220px] md:ml-[100px] xl:ml-[100px] sm:ml-0 mt-[5px]  ">
                <p className="font-raleway text-[15px] tracking-[3px] md:text-[25px] sm:text-[16px] text-wrap ">
                  <span className="font-bold underline">UI/UX Intern</span> -
                  Comet Currency
                </p>
                <p
                  className="font-radley text-[15px] tracking-[3px] md:text-[25px] sm:text-[14px]"
                  style={{ fontStyle: "italic" }}
                >
                  July 2024 - November 2024
                </p>
                <ul className="list-disc list-inside md:mt-4 text-white flex flex-col md:gap-10 gap-[10px] xl:w-[900px]  md:w-[700px] sm:w-[600px] px-5">
                  <li className="font-arial text-[13px] md:text-[18px] sm:text-[16px]">
                    Enhance user experience and visual appeal through strategic
                    redesigns of client landing pages, ensuring alignment with
                    brand identity and improving conversion rates.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Conduct in-depth consultations to understand client needs,
                    including preferences for typography, color schemes, and
                    layout, ensuring the final design aligns with their brand
                    and objectives.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Actively incorporate client feedback and revisions into the
                    design process, maintaining clear communication to deliver a
                    product that meets or exceeds client expectations.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Apply best practices in web design and development to
                    optimize landing page performance, including fast loading
                    times and smooth interactions, to enhance user experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:mt-[-80px] mt-5 w-full px-10">
            <div className="flex flex-col justify-center md:flex-row md:gap-10">
              <figure className="hidden md:block md:mt-[-10px]  md:ml-[150px] sm:ml-0 sm:mt-0 ">
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
                  height="750"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[-22px] "
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="750"
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
                </svg>
              </figure>

              <div className="flex flex-col md:gap-8 gap-1 justify-center text-left text-white xl:mt-[-220px] md:mt-[-220px] md:ml-[100px] xl:ml-[100px] sm:ml-0 mt-[5px]  ">
                <p className="font-raleway text-[15px] tracking-[3px] md:text-[25px] sm:text-[16px] text-wrap ">
                  <span className="font-bold underline">
                    Frontend Web Developer
                  </span>{" "}
                  - Torchlite LLC
                </p>
                <p
                  className="font-radley text-[15px] tracking-[3px] md:text-[25px] sm:text-[14px]"
                  style={{ fontStyle: "italic" }}
                >
                  July 2024 - November 2024
                </p>
                <ul className="list-disc list-inside md:mt-4 text-white flex flex-col md:gap-10 gap-[10px] xl:w-[900px]  md:w-[700px] sm:w-[600px] px-5">
                  <li className="font-arial text-[13px] md:text-[18px] sm:text-[16px]">
                    Implemented code according to Figma designs for clients.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Ensured responsive layouts across various devices.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Created and implemented web design for various projects.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Delivered projects quickly and efficiently.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Worked closely with clients to ensure designs met their
                    expectations.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:mt-[-80px] mt-[10px] w-full px-10">
            <div className="flex flex-col justify-center md:flex-row md:gap-10">
              <figure className="hidden md:block md:mt-[-10px]  md:ml-[150px] sm:ml-0 sm:mt-0 ">
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
                  height="650"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[-22px] "
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="650"
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
                </svg>
              </figure>

              <div className="flex flex-col md:gap-8 gap-1 justify-center text-left text-white xl:mt-[-220px] md:mt-[-220px] md:ml-[100px] xl:ml-[100px] sm:ml-0 mt-[5px]  ">
                <p className="font-raleway text-[15px] tracking-[3px] md:text-[25px] sm:text-[16px] text-wrap ">
                  <span className="font-bold underline">
                    Frontend Web Developer
                  </span>{" "}
                  - LifeWork
                </p>
                <p
                  className="font-radley text-[15px] tracking-[3px] md:text-[25px] sm:text-[14px]"
                  style={{ fontStyle: "italic" }}
                >
                  June 2024 - July 2024
                </p>
                <ul className="list-disc list-inside md:mt-4 text-white flex flex-col md:gap-10 gap-[10px] xl:w-[900px]  md:w-[700px] sm:w-[600px] px-5">
                  <li className="font-arial text-[13px] md:text-[18px] sm:text-[16px]">
                    Built and integrated a user sign-up function.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Managed routing to different storage containers to
                    streamline data flow.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Created and implemented web design for various projects.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Collaborate with cross-functional teams to understand
                    project requirements and user needs.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Work closely with developers to ensure designs are
                    implemented accurately and efficiently.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Stay updated on industry trends and best practices in UX/UI
                    design.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:mt-[-80px] mt-[10px] w-full px-10">
            <div className="flex flex-col justify-center md:flex-row md:gap-10">
              <figure className="hidden md:block md:mt-[-10px]  md:ml-[150px] sm:ml-0 sm:mt-0 ">
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
                  height="650"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[-22px] "
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="650"
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
                </svg>
              </figure>

              <div className="flex flex-col md:gap-8 gap-1 justify-center text-left text-white xl:mt-[-220px] md:mt-[-220px] md:ml-[100px] xl:ml-[100px] sm:ml-0 mt-[5px]  ">
                <p className="font-raleway text-[15px] tracking-[3px] md:text-[25px] sm:text-[16px] text-wrap ">
                  <span className="font-bold underline">
                    Frontend Developer Team Lead
                  </span>{" "}
                  - Shop Online New York
                </p>
                <p
                  className="font-radley text-[15px] tracking-[3px] md:text-[25px] sm:text-[14px]"
                  style={{ fontStyle: "italic" }}
                >
                  June 2024 - August 2024
                </p>
                <ul className="list-disc list-inside md:mt-4 text-white flex flex-col md:gap-10 gap-[10px] xl:w-[900px]  md:w-[700px] sm:w-[600px] px-5">
                  <li className="font-arial text-[13px] md:text-[18px] sm:text-[16px]">
                    Led a team in the development and implementation of frontend
                    solutions using React.js and Tailwind CSS, enhancing website
                    functionality and design.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Collaborated with cross-functional teams to ensure seamless
                    integration of frontend components with backend systems,
                    improving overall project coherence.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Mentored developers, promoting best practices in frontend
                    development and ensuring high-quality code through regular
                    reviews.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Implemented responsive design principles and performance
                    optimization techniques, significantly improving user
                    experience across various devices.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" w-full px-10 mt-[-55px]">
            <div className="flex flex-col justify-center md:flex-row md:gap-10">
              <figure className="hidden md:block md:mt-[-10px]  md:ml-[150px] sm:ml-0 sm:mt-0 flex-shrink-0">
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
                  height="600"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[-22px] "
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="600"
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

              <div className="flex flex-col md:gap-8 gap-[10px] justify-center text-left text-white relative md:ml-[60px] xl:ml-[100px] xl:mt-[-50px] md:mt-[1px] sm:ml-0 mt-[90px] ">
                <p className="font-raleway text-[15px] tracking-[3px] md:text-[25px] sm:text-[16px] text-wrap ">
                  <span className="font-bold underline">
                    Frontend Developer
                  </span>{" "}
                  - Shop Online New York
                </p>
                <p
                  className="font-radley text-[15px] tracking-[3px] md:text-[25px] sm:text-[14px]"
                  style={{ fontStyle: "italic" }}
                >
                  April 2024 - June 2024
                </p>
                <ul className="list-disc list-inside md:mt-4 text-white flex flex-col md:gap-10 gap-[10px] xl:w-[900px]  md:w-[700px] sm:w-[600px] px-5">
                  <li className="font-arial text-[13px] md:text-[18px] sm:text-[16px]">
                    Collaborated closely with the design team to translate
                    wireframes into fully functional web interfaces.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Employed frontend frameworks and libraries such as React.js
                    and Tailwind CSS to enhance interactivity and the
                    development process.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Implemented data fetching and state management techniques to
                    create dynamic user experiences, reducing page load times
                    and enhancing overall performance.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Conducted thorough testing and debugging to ensure
                    cross-browser compatibility, responsiveness, and
                    accessibility, resulting in a seamless user experience
                    across various devices and platforms.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Able to quickly change and adapt, with a yearning to learn,
                    grow and push new ideologies.
                  </li>
                  <li className="font-arial text-[13px]  md:text-[18px] sm:text-[16px]">
                    Change agent with an ability to think out of the box and
                    bring new innovative ideas to the table.
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
