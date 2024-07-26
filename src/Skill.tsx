import React, { useState, useEffect } from "react";

import react_icon from "./assets/react_icon.svg";
import tailwind_icon from "./assets/tailwind_icon.svg";
import js_icon from "./assets/js_icon.svg";
import ts_icon from "./assets/ts_icon.svg";
import docker_icon from "./assets/docker.svg";
import node_icon from "./assets/node.svg";
import html_icon from "./assets/html.svg";
import css_icon from "./assets/css.svg";
import "./Slideshow.css";

const SKill = () => {
  return (
    <div id="skills" className="md:mt-[130px] mt-[100px]">
      <p className="font-raleway text-[40px] md:text-[64px] font-bold text-white flex flex-row justify-center items-center">
        Skills
      </p>
      <div className="mt-5 flex flex-row justify-center items-center">
        <div className="grid md:grid-cols-4 grid-cols-2 xl:gap-[140px] md:gap-[90px] gap-[40px] justify-center items-center h-[300px] overflow-y-auto md:overflow-visible">
          <img src={react_icon} alt="React Icon" />
          <img src={tailwind_icon} alt="Tailwind CSS Icon" />
          <img src={js_icon} alt="JavaScript Icon" />
          <img src={ts_icon} alt="TypeScript Icon" />
          <img src={docker_icon} alt="Docker Icon" />
          <img src={node_icon} alt="Node.js Icon" />
          <img src={html_icon} alt="HTML Icon" />
          <img src={css_icon} alt="CSS Icon" />
        </div>
      </div>
    </div>
  );
};

export default SKill;
