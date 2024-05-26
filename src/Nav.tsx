import img from "./assets/circle.svg";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
import email from "./assets/email.svg";

const NavBar = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-[#31468461] w-full h-[91px] p-4 shadow-nav fixed z-10">
          <div className="flex flex-row justify-between items-center gap-10 px-[114px] text-white">
            <a href="#about_me" className="font-open-sans-hebrew text-[20px]">
              About
            </a>
            <img src={img} alt="circle"></img>
            <a href="#skills" className="font-open-sans-hebrew text-[20px]">
              Skills
            </a>
            <img src={img} alt="circle"></img>
            <a href="#title" className="font-brush-script-mt text-[48px]">
              n2
            </a>
            <img src={img} alt="circle"></img>
            <a href="#project" className="font-open-sans-hebrew text-[20px]">
              Projects
            </a>
            <img src={img} alt="circle"></img>
            <a href="#experience" className="font-open-sans-hebrew text-[20px]">
              Experiences
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-10 justify-between w-[290px] ml-[1550px] mt-28 fixed">
        <a href="https://github.com/Liangzhijun123" target="_blank">
          <img src={github} alt="Github"></img>
        </a>
        <a href="https://www.linkedin.com/in/zhi-jun-liang-9b1752228/" target="_blank">
          <img src={linkedin} alt="LinkedIn"></img>
        </a>
        <a href="https://x.com/n2nitrogenacid" target="_blank">
          <img src={twitter} alt="Twitter"></img>
        </a>
        <a href="mailto:liangzhijun1216@gmail.com" target="_blank">
          <img src={email} alt="Email"></img>
        </a>
      </div>
    </>
  );
};

export default NavBar;
