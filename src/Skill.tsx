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
  const skills = [
    { src: react_icon, name: "React" },
    { src: tailwind_icon, name: "Tailwind" },
    { src: js_icon, name: "JavaScript" },
    { src: ts_icon, name: "TypeScript" },
    { src: docker_icon, name: "Docker" },
    { src: node_icon, name: "Node.js" },
    { src: html_icon, name: "HTML" },
    { src: css_icon, name: "CSS" },
    { src: react_native, name: "React Native" },
    { src: framer, name: "Framer" },
    { src: figma, name: "Figma" },
    { src: java, name: "Java" },
    { src: sql, name: "SQL" },
  ];

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLButtonElement>('#skills .skill-card'));
    if (els.length === 0) return;

    els.forEach((el) => {
      el.classList.add('reveal');
      el.style.transitionDelay = '';
    });

    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const idx = els.indexOf(el as HTMLButtonElement);
          el.style.transitionDelay = `${idx * 60}ms`;
          el.classList.add('in-view');
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.12 });

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div id="skills" className="md:mt-[130px] mt-[100px]">
      <style>{`
        #skills .skill-card.reveal { opacity: 0; transform: translateY(10px) scale(.995); transition: opacity 420ms cubic-bezier(.16,.8,.25,1), transform 420ms cubic-bezier(.16,.8,.25,1); }
        #skills .skill-card.reveal.in-view { opacity: 1; transform: translateY(0) scale(1); }
      `}</style>

      <p className="font-raleway text-[40px] md:text-[64px] font-bold text-white flex flex-row justify-center items-center">
        Skills
      </p>

      <div className="mt-8 flex flex-row justify-center px-6">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-10 items-center">
            {skills.map((s, i) => (
              <button
                key={s.name}
                className="skill-card group flex flex-col items-center gap-2 bg-gradient-to-br from-[#07182a] to-[#081a2b] rounded-lg py-4 px-3 border border-[#22304a] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F3E68]"
                aria-label={s.name}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#021026] border border-[#16324a] group-hover:scale-105 transform transition">
                  <img src={s.src} alt={`${s.name} icon`} className="w-10 h-10 md:w-12 md:h-12" loading="lazy" />
                </div>
                <span className="text-xs md:text-sm text-gray-200 font-semibold mt-1">{s.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SKill;
