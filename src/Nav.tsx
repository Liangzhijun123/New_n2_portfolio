import img from "./assets/circle.svg";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
import email from "./assets/email.svg";
import img2 from "./assets/img1.svg";


const NavBar = () => {
  return (
    <>
      <div className="bg-[#31468461] w-full h-[91px] p-4 md:px-10 shadow-nav fixed z-50 top-0 left-0">
        <div className="flex flex-row justify-between items-center gap-[10px] px-5 md:gap-10 md:px-20 text-white">
          <a href="#about_me" className="font-open-sans-hebrew text-[13px] md:text-[20px]">
            About
          </a>
          <img src={img} alt="circle" className="hidden md:block"></img>
          <img src={img2} alt="circle" className="block md:hidden"></img>
          <a href="#skills" className="font-open-sans-hebrew text-[13px] md:text-[20px]">
            Skills
          </a>
          <img src={img} alt="circle" className="hidden md:block"></img>
          <img src={img2} alt="circle" className="block md:hidden"></img>
          <a href="#title" className="font-brush-script-mt text-[42px] md:text-[48px]">
            n2
          </a>
          <img src={img} alt="circle" className="hidden md:block"></img>
          <img src={img2} alt="circle" className="block md:hidden"></img>
          <a href="#project" className="font-open-sans-hebrew text-[13px] md:text-[20px]">
            Projects
          </a>
          <img src={img} alt="circle" className="hidden md:block"></img>
          <img src={img2} alt="circle" className="block md:hidden"></img>
          <a href="#experience" className="font-open-sans-hebrew text-[13px] md:text-[20px]">
            Experiences
          </a>
        </div>
      </div>

      <div className="flex flex-row gap-4 md:gap-10 justify-between w-[200px] md:w-[390px] mt-28 fixed px-5 md:px-10 z-40">
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
