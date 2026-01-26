import img from "./assets/title.svg";
import img1 from "./assets/img3.svg";

const Title = () => {
    return (
      <>
        <div id="title" className="w-full max-h-[60vh] flex items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-4 font-arial py-12 px-4 w-full">
            <p className="text-white tracking-[7px] md:text-[32px] text-[16px] font-semibold">Web Development</p>
            <p className="text-white md:text-[100px] text-[48px] font-bold">Zhi Jun Liang</p>
            <p className="text-[#BE9D6A] tracking-[7px] md:text-[24px] text-[14px] font-semibold">Creative Design</p>
            <p className="text-white md:text-[20px] text-[14px] mt-4 text-center max-w-xl">
              I'm a web and mobile computing student passionate about creative design and seamless user experiences.
            </p>
          </div>
        </div>
      </>
    );
};
  
export default Title;
