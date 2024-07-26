import React, { useState, useEffect } from "react";
import arrow_icon from "./assets/arrow.svg";
import react_icon from "./assets/react_icon.svg";
import tailwind_icon from "./assets/tailwind_icon.svg";
import js_icon from "./assets/js_icon.svg";
import ts_icon from "./assets/ts_icon.svg";
import circle_icon from "./assets/circle_icon.svg";
import docker_icon from "./assets/docker.svg";
import node_icon from "./assets/node.svg";
import html_icon from "./assets/html.svg";
import css_icon from "./assets/css.svg";
import "./Slideshow.css";

const skill_one: any[] = [
  {
    arrow: arrow_icon,
    icon: react_icon,
    circle: circle_icon,
    title: "React.JS",
    text: "01",
    loremText:
      "React.js makes components incredibly useful in web development by allowing developers to create reusable, modular pieces of UI. These components encapsulate their own structure, style, and behavior, making it easy to manage and update the user interface. By breaking the UI into smaller, independent parts, React promotes efficient code organization, better maintainability, and faster development cycles. This component-based architecture is key to building complex, dynamic web applications with React.",
  },
  {
    arrow: arrow_icon,
    icon: tailwind_icon,
    circle: circle_icon,
    title: "Tailwind CSS",
    text: "02",
    loremText:
      "Tailwind CSS is a utility-first CSS framework that streamlines web development by offering a comprehensive set of pre-built classes. Its unique approach emphasizes composing styles directly within HTML, enabling rapid prototyping and efficient styling without writing custom CSS. With Tailwind, developers can quickly create responsive, modern interfaces by leveraging its extensive utility classes for layout, typography, colors, and more.",
  },
  {
    arrow: arrow_icon,
    icon: js_icon,
    circle: circle_icon,
    title: "JavaScript",
    text: "03",
    loremText:
      "JavaScript is a versatile programming language commonly used for building dynamic and interactive web applications. It runs on the client side, enabling enhanced user experiences by allowing manipulation of webpage content in real-time. JavaScript's flexibility and wide-ranging ecosystem of libraries and frameworks empower developers to create everything from simple animations to complex single-page applications. Its importance in modern web development is underscored by its role in front-end frameworks like React, Angular, and Vue.js, as well as its increasing relevance on the server side with platforms like Node.js.",
  },
  {
    arrow: arrow_icon,
    icon: ts_icon,
    circle: circle_icon,
    title: "TypeScript",
    text: "04",
    loremText:
      "TypeScript is a superset of JavaScript that adds optional static typing and other advanced features to the language. Developed by Microsoft, TypeScript provides developers with tools for building more scalable and maintainable applications by catching errors during development rather than at runtime. Its static typing capabilities enable better code organization, enhanced code navigation, and improved documentation, leading to increased productivity and code reliability. TypeScript's popularity has surged in recent years, particularly in large-scale projects and within the JavaScript ecosystem, where it is widely adopted in frameworks like Angular and React for building robust, type-safe applications.",
  },
];

const skill_two: any[] = [
  {
    arrow: arrow_icon,
    icon: docker_icon,
    circle: circle_icon,
    title: "Docker",
    text: "05",
    loremText: "Docker is a platform that allows developers to run applications without manually downloading and configuring dependencies, saving valuable time. By using containers, Docker packages all necessary components, including code, runtime, libraries, and system tools, into a single, executable unit. This ensures that applications run consistently across different environments, eliminating the works on my machine problem. Docker streamlines workflows and boosts productivity, making it an essential tool for efficient and hassle-free application development and deployment.",
  },
  {
    arrow: arrow_icon,
    icon: node_icon,
    circle: circle_icon,
    title: "Node.js",
    text: "06",
    loremText: "Node.js is an open-source, cross-platform runtime environment that allows developers to execute JavaScript code outside of a web browser. Built on the V8 JavaScript engine, it provides an event-driven, non-blocking I/O model, making it highly efficient and suitable for building scalable network applications. Node.js is widely used for server-side development, enabling the creation of fast and scalable web servers and APIs. Its rich ecosystem, supported by npm (Node Package Manager), offers a vast array of libraries and tools, streamlining development processes and enhancing productivity.",
  },
  {
    arrow: arrow_icon,
    icon: html_icon,
    circle: circle_icon,
    title: "HTML",
    text: "07",
    loremText: "HTML (HyperText Markup Language) is the standard language used to create and design web pages. It provides the basic structure of a webpage by defining elements such as headings, paragraphs, links, images, and other multimedia. HTML uses tags to enclose content, which browsers interpret and render to display the webpage visually. As the backbone of web development, HTML works in conjunction with CSS (Cascading Style Sheets) and JavaScript to create interactive and visually appealing websites.",
  },
  {
    arrow: arrow_icon,
    icon: css_icon,
    circle: circle_icon,
    title: "CSS",
    text: "08",
    loremText: "CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation and formatting of HTML documents. It allows developers to control the layout, colors, fonts, and overall visual aesthetics of a webpage, ensuring a consistent and attractive design. By separating content (HTML) from presentation (CSS), it enhances the maintainability and flexibility of web pages. CSS includes features such as responsive design, enabling webpages to adapt seamlessly to different screen sizes and devices, which is crucial for modern web development.",
  },
];

const SKill = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skill_one.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + skill_one.length) % skill_one.length);
  };

  return (
    <div id="skills" className="md:mt-[130px] mt-[100px]">
      <p className="font-raleway text-[40px] md:text-[64px] font-bold text-white flex flex-row justify-center items-center">
        Skills
      </p>
      <div className={`slideshow-container flex justify-center ${window.innerWidth >= 768 ? 'desktop' : 'mobile'}`}>
        {skill_one.map((item, index) => (
          <div
            key={index}
            className={`mySlides flex mt-10  ${index === currentSlide ? "active" : ""}`}
          >
            <div
              className={`border flex flex-col justify-center items-center gap-14 ${
                index === currentSlide
                  ? "bg-[#060C26] border-[#0F3E68] w-full px-5"
                  : "bg-[#060C26] border-[#0F3E68] w-full hover:bg-[#061726] hover:border-[#99CEFD]"
              }`}
            >
              <img src={item.arrow} alt="arrow" />
              <img src={item.icon} alt="icon" />
              <img src={item.circle} alt="circle" />
              <p className="text-white font-roboto-mono text-[24px] font-bold tracking-[5px]">
                {item.title}
              </p>
              <p className="text-[#D2A57B] font-raleway text-[15px] font-bold">
                {item.text}
              </p>
            </div>
          </div>
        ))}
        {/* Navigation arrows for mobile */}
        <a className="prev" onClick={prevSlide}>
          ❮
        </a>
        <a className="next" onClick={nextSlide}>
          ❯
        </a>
      </div>
      <div className={`slideshow-container flex justify-center ${window.innerWidth >= 768 ? 'desktop' : 'mobile'}`}>
        {skill_two.map((item, index) => (
          <div
            key={index}
            className={`mySlides flex mt-10  ${index === currentSlide ? "active" : ""}`}
          >
            <div
              className={`border flex flex-col justify-center items-center gap-14 ${
                index === currentSlide
                  ? "bg-[#060C26] border-[#0F3E68] w-full px-5"
                  : "bg-[#060C26] border-[#0F3E68] w-full hover:bg-[#061726] hover:border-[#99CEFD]"
              }`}
            >
              <img src={item.arrow} alt="arrow" />
              <img src={item.icon} alt="icon" />
              <img src={item.circle} alt="circle" />
              <p className="text-white font-roboto-mono text-[24px] font-bold tracking-[5px]">
                {item.title}
              </p>
              <p className="text-[#D2A57B] font-raleway text-[15px] font-bold">
                {item.text}
              </p>
            </div>
          </div>
        ))}
        {/* Navigation arrows for mobile */}
        <a className="prev" onClick={prevSlide}>
          ❮
        </a>
        <a className="next" onClick={nextSlide}>
          ❯
        </a>
      </div>
    </div>
  );
};

export default SKill;
