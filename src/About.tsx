const About = () => {
  return (
    <>
      <div id="about_me">
        <div className="md:mt-[130px] mt-[5px]">
          <p className="font-raleway text-[40px] md:text-[64px] font-bold text-white flex flex-row justify-center items-center ">
            About
          </p>
          <div className="flex flex-col justify-center items-center w-full px-10 md:px-36 text-[16px] md:text-[32px] text-center md:mt-[50px] ">
            <p style={{ letterSpacing: "1.76px" }} className="text-white mt-9">
              I'm a third-year student at Rochester Institute of Technology,
              with a passion for web and mobile computing.
            </p>
            <p style={{ letterSpacing: "1.76px" }} className="text-white mt-9">
              As a web and mobile computing major, I thrive on bringing ideas to
              life through design and collaboration. There's something
              incredibly fulfilling about working alongside a partner to create
              innovative projects that captivate audiences. Whether it's
              brainstorming ideas or diving deep into coding, the collaborative
              process has pushed me beyond the limits.
            </p>
            <p style={{ letterSpacing: "1.76px" }} className="text-white mt-9">
              One of my greatest joys is designing websites that not only look
              stunning but also deliver seamless user experiences. I love
              experimenting with different effects and techniques to enhance the
              visual appeal and functionality of a site.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
