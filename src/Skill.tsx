import React, { useState, useEffect } from "react";

import react_icon from "./assets/react_icon.svg";
import tailwind_icon from "./assets/tailwind_icon.svg";
import js_icon from "./assets/js_icon.svg";
import ts_icon from "./assets/ts_icon.svg";
import docker_icon from "./assets/docker.svg";
import node_icon from "./assets/node.svg";
import html_icon from "./assets/html.svg";
import css_icon from "./assets/css.svg";
import react_native from "./assets/reactNative.svg";
import figma from "./assets/figma.svg";
import framer from "./assets/framer.svg";
import java from "./assets/java.svg";
import sql from "./assets/sql.svg";
import "./Slideshow.css";

const SKill = () => {
  return (
    <div id="skills" className="md:mt-[130px] mt-[100px]">
      <p className="font-raleway text-[40px] md:text-[64px] font-bold text-white flex flex-row justify-center items-center">
        Skills
      </p>
      <div className="mt-5 flex flex-row justify-center items-center xl:h-[650px] md:h-[400px] h-[300px] overflow-y-auto px-20">
        <div className="grid md:grid-cols-4 grid-cols-2 xl:gap-[140px] md:gap-[90px] gap-[40px] justify-center items-center h-[300px]">
          <img src={react_icon} alt="React Icon" />
          <img src={tailwind_icon} alt="Tailwind CSS Icon" />
          <img src={js_icon} alt="JavaScript Icon" />
          <img src={ts_icon} alt="TypeScript Icon" />
          <img src={docker_icon} alt="Docker Icon" />
          <img src={node_icon} alt="Node.js Icon" />
          <img src={html_icon} alt="HTML Icon" />
          <img src={css_icon} alt="CSS Icon" />
          <img src={react_native} alt="React Native Icon" />
          <img src={framer} alt="Framer Icon" />
          <img src={figma} alt="Figma Icon" />
          <img src={java} alt="Java Icon" />
          <img src={sql} alt="SQL Icon" />
        </div>
      </div>
    </div>
  );
};

export default SKill;
