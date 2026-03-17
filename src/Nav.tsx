import React, { useState } from "react";
import img from "./assets/circle.svg";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
import email from "./assets/email.svg";
import img2 from "./assets/img1.svg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "#about_me", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#project", label: "Projects" },
    { href: "#experience", label: "Experiences" },
  ];

  return (
    <>
      <div className="bg-[#31468461] backdrop-blur-md w-full h-[91px] fixed z-50 top-0 left-0">
        <div className="h-full flex items-center justify-between px-4 md:px-10">
          <a
            href="#title"
            className="font-brush-script-mt text-[32px] md:text-[48px] text-white"
          >
            n2
          </a>

          <div className="hidden md:flex flex-1 items-center justify-center gap-4 text-white">
            {navItems.map((item, index) => (
              <React.Fragment key={item.href}>
                <a href={item.href} className="font-open-sans-hebrew text-[15px] md:text-[20px] hover:text-[#99CEFD]">
                  {item.label}
                </a>
                {index < navItems.length - 1 && (
                  <img src={img} alt="circle" className="hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#99CEFD]"
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-6 bg-white mb-1" />
            <span className="block h-0.5 w-6 bg-white mb-1" />
            <span className="block h-0.5 w-6 bg-white" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-screen w-72 max-w-[90vw] bg-[#0b1f4c] z-50 p-6 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="text-white text-lg mb-8 hover:text-[#99CEFD]"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          Close ✕
        </button>

        <nav className="flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-white font-open-sans-hebrew text-[18px] hover:text-[#99CEFD]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-10 border-t border-[#486890] pt-5 flex gap-4">
          <a href="https://github.com/Liangzhijun123" target="_blank" rel="noreferrer">
            <img src={github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/zhi-jun-liang-9b1752228/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://x.com/n2nitrogenacid" target="_blank" rel="noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="mailto:liangzhijun1216@gmail.com" target="_blank" rel="noreferrer">
            <img src={email} alt="Email" />
          </a>
        </div>
      </aside>

      {/* Optional fixed social icons for desktop */}
      <div className="hidden md:flex flex-row gap-4 justify-between w-[200px] md:w-[390px] fixed top-[120px] left-5 z-40">
        <a href="https://github.com/Liangzhijun123" target="_blank" rel="noreferrer">
          <img src={github} alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/zhi-jun-liang-9b1752228/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://x.com/n2nitrogenacid" target="_blank" rel="noreferrer">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="mailto:liangzhijun1216@gmail.com" target="_blank" rel="noreferrer">
          <img src={email} alt="Email" />
        </a>
      </div>
    </>
  );
};

export default NavBar;
