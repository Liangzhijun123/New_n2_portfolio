import { useState } from "react";
import arrow_icon from "../assets/arrow.svg";
import js_icon from "../assets/js_icon.svg";
import circle_icon from "../assets/circle_icon.svg";

const skills = [
  {
    arrow: arrow_icon,
    icon: js_icon,
    circle: circle_icon,
    title: "JavaScript",
    text: "03",
    loremText:
      "JavaScript is a versatile programming language commonly used for building dynamic and interactive web applications. It runs on the client side, enabling enhanced user experiences by allowing manipulation of webpage content in real-time. JavaScript's flexibility and wide-ranging ecosystem of libraries and frameworks empower developers to create everything from simple animations to complex single-page applications. Its importance in modern web development is underscored by its role in front-end frameworks like React, Angular, and Vue.js, as well as its increasing relevance on the server side with platforms like Node.js.",
  },
];

const Slidethree = () => {
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

export default Slidethree;
