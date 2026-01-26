const About = () => {
  return (
    <>
      <div id="about_me">
        <div className="md:mt-[130px] mt-[5px]">
          <p className="font-raleway text-[40px] md:text-[64px] font-bold text-white flex flex-row justify-center items-center ">
            About
          </p>
          <div className="flex flex-col justify-center items-center w-full px-10 md:px-36 text-[16px] md:text-[32px] text-center md:mt-[30px] ">
            <p style={{ letterSpacing: "1.76px" }} className="text-white mt-9">
              I'm a web and mobile computing student passionate about creative design and seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
