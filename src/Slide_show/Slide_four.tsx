import { useState } from "react";
import arrow_icon from "../assets/arrow.svg";
import ts_icon from "../assets/ts_icon.svg";
import circle_icon from "../assets/circle_icon.svg";

const skills = [
    {
        arrow: arrow_icon,
        icon: ts_icon,
        circle: circle_icon,
        title: "TypeScript",
        text: "04",
        loremText: "TypeScript is a superset of JavaScript that adds optional static typing and other advanced features to the language. Developed by Microsoft, TypeScript provides developers with tools for building more scalable and maintainable applications by catching errors during development rather than at runtime. Its static typing capabilities enable better code organization, enhanced code navigation, and improved documentation, leading to increased productivity and code reliability. TypeScript's popularity has surged in recent years, particularly in large-scale projects and within the JavaScript ecosystem, where it is widely adopted in frameworks like Angular and React for building robust, type-safe applications.",
      },
];

const Slidefour = () => {
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
          style={{
            fontFamily: "Times New Roman",
            maxHeight: "calc(100% - 2rem)",
          }}
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

  const renderDivs = (stuff: any[]) => {
    return stuff.map((item, index) => {
      const isClicked = clickedIndex === index;
      const divStyle = isClicked
        ? "bg-[#101839] border-[#0F3E68] px-5"
        : "bg-[#060C26] border-[#0F3E68] hover:bg-[#061726] hover:border-[#99CEFD]";

      return (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`border w-[400px] h-[500px] mx-2 flex flex-col justify-center items-center gap-14 ${divStyle}`}
        >
          {renderContent(index, item)}
        </div>
      );
    });
  };

  return (
    <div id="skills" className="md:mt-[130px] mt-[100px]">
      
      <div className="flex ">
        <div className="grid grid-cols-4 justify-evenly xl:gap-10 xl:px-10 items-center mt-[100px] xl:w-full md:min-w-[1800px] md:gap-10 md:px-10">
          {renderDivs(skills)}
        </div>
      </div>
    </div>
  );
};

export default Slidefour;
