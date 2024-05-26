import img from "./assets/title.svg";
import img1 from "./assets/img3.svg";

const Title = () => {
    return (
      <>
        <div id="title" className="relative">
          <img src={img} alt="img" className="w-full hidden md:block"></img>
          <img src={img1} alt="img" className="w-full block md:hidden"></img>
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-5 font-arial ">
            <p className="text-white tracking-[7px] md:text-[32px] text-[16px]">Web Development</p>
            <p className="text-white md:text-[100px] text-[48px]">Zhi Jun Liang</p>
            <p className="text-[#BE9D6A] tracking-[7px] md:text-[24px] text-[14px]">Creative Design</p>
          </div>
        </div>
      </>
    );
};
  
export default Title;
