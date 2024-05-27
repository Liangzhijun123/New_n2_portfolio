import React, { useState } from 'react';
import arrow_icon from "./assets/arrow.svg";
import react_icon from "./assets/react_icon.svg";
import tailwind_icon from "./assets/tailwind_icon.svg";
import js_icon from "./assets/js_icon.svg";
import ts_icon from "./assets/ts_icon.svg";
import circle_icon from "./assets/circle_icon.svg";

const ts_stuff = [
  {
    arrow: arrow_icon,
    icon: ts_icon,
    circle: circle_icon,
    title: "TypeScript",
    text: "04",
    loremText: "TypeScript is a superset of JavaScript that adds optional static typing and other advanced features to the language. Developed by Microsoft, TypeScript provides developers with tools for building more scalable and maintainable applications by catching errors during development rather than at runtime. Its static typing capabilities enable better code organization, enhanced code navigation, and improved documentation, leading to increased productivity and code reliability. TypeScript's popularity has surged in recent years, particularly in large-scale projects and within the JavaScript ecosystem, where it is widely adopted in frameworks like Angular and React for building robust, type-safe applications.",
  },
];
const js_stuff = [
  {
    arrow: arrow_icon,
    icon: js_icon,
    circle: circle_icon,
    title: "JavaScript",
    text: "03",
    loremText: "JavaScript is a versatile programming language commonly used for building dynamic and interactive web applications. It runs on the client side, enabling enhanced user experiences by allowing manipulation of webpage content in real-time. JavaScript's flexibility and wide-ranging ecosystem of libraries and frameworks empower developers to create everything from simple animations to complex single-page applications. Its importance in modern web development is underscored by its role in front-end frameworks like React, Angular, and Vue.js, as well as its increasing relevance on the server side with platforms like Node.js.",
  },
];
const tailwind_stuff = [
  {
    arrow: arrow_icon,
    icon: tailwind_icon,
    circle: circle_icon,
    title: "Tailwind CSS",
    text: "02",
    loremText: "Tailwind CSS is a utility-first CSS framework that streamlines web development by offering a comprehensive set of pre-built classes. Its unique approach emphasizes composing styles directly within HTML, enabling rapid prototyping and efficient styling without writing custom CSS. With Tailwind, developers can quickly create responsive, modern interfaces by leveraging its extensive utility classes for layout, typography, colors, and more.",
  },
];
const react_stuff = [
  {
    arrow: arrow_icon,
    icon: react_icon,
    circle: circle_icon,
    title: "React.JS",
    text: "01",
    loremText: "React.js makes components incredibly useful in web development by allowing developers to create reusable, modular pieces of UI. These components encapsulate their own structure, style, and behavior, making it easy to manage and update the user interface. By breaking the UI into smaller, independent parts, React promotes efficient code organization, better maintainability, and faster development cycles. This component-based architecture is key to building complex, dynamic web applications with React.",
  },
];

const SKill = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  const renderContent = (index: number, item: any) => {
    if (clickedIndex === index) {
      return (
        <p
          className="text-white text-[18px] font-bold tracking-[1px] cursor-pointer overflow-auto p-4"
          onClick={() => handleClick(index)}
          style={{ fontFamily: 'Times New Roman', maxHeight: 'calc(100% - 2rem)' }}
        >
          {item.loremText}
        </p>
      );
    }
    return (
      <>
        <img src={item.arrow} alt="arrow" />
        <img src={item.icon} alt="icon" />
        <img src={item.circle} alt="circle" />
        <p className="text-white font-roboto-mono text-[24px] font-bold tracking-[5px]">
          {item.title}
        </p>
        <p className="text-[#D2A57B] font-raleway text-[15px] font-bold">
          {item.text}
        </p>
      </>
    );
  };

  const renderDivs = (stuff: any[], indexOffset: number) => {
    return stuff.map((item, index) => {
      const currentIndex = index + indexOffset;
      const isClicked = clickedIndex === currentIndex;
      const divStyle = isClicked
        ? "bg-[#101839] border-[#0F3E68] px-5"
        : "bg-[#060C26] border-[#0F3E68] hover:bg-[#061726] hover:border-[#99CEFD]";

      return (
        <div
          key={currentIndex}
          onClick={() => handleClick(currentIndex)}
          className={`border w-[400px] h-[500px] mx-2 flex flex-col justify-center items-center gap-14 ${divStyle}`}
        >
          {renderContent(currentIndex, item)}
        </div>
      );
    });
  };
 
  return (
    <>
      <div id="skills" className="md:mt-[130px] mt-[100px]">
        <p className="font-raleway text-[40px] md:text-[64px] font-bold text-white flex flex-row justify-center items-center ">
          Skills
        </p>
        <div className="hidden md:block overflow-x-auto px-10">
          <div className="flex flex-row justify-evenly items-center mt-[100px] gap-5 min-w-[1500px]">
            {renderDivs(react_stuff, 0)}
            {renderDivs(tailwind_stuff, react_stuff.length)}
            {renderDivs(js_stuff, react_stuff.length + tailwind_stuff.length)}
            {renderDivs(ts_stuff, react_stuff.length + tailwind_stuff.length + js_stuff.length)}
          </div>
        </div>
        <div className="md:hidden overflow-x-auto px-2">
          <div className="flex flex-row justify-evenly items-center min-w-[1800px] mt-[50px]">
            {renderDivs(react_stuff, 0)}
            {renderDivs(tailwind_stuff, react_stuff.length)}
            {renderDivs(js_stuff, react_stuff.length + tailwind_stuff.length)}
            {renderDivs(ts_stuff, react_stuff.length + tailwind_stuff.length + js_stuff.length)}
          </div>
        </div>
      </div>
    </>
  );
};

export default SKill;
