import img from "./assets/title.svg";

const Title = () => {
    return (
      <>
      <div id="title">
      <img src={img} alt="img" className="w-full"></img>
        <div className="flex flex-col justify-center items-center gap-5 font-arial mt-[-750px]">
          <p className="text-white tracking-[7px] text-[32px]" >Web Development</p>
          <p className="text-white text-[100px]">Zhi Jun Liang</p>
          <p className="text-[#BE9D6A] tracking-[7px] text-[24px]">Creative Design</p>
        </div>
      </div>
        
      </>
    );
  };
  
  export default Title;