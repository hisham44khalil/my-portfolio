import React from "react";

import { BiHomeAlt, BiUser } from "react-icons/bi";
import {
  BsClipboardData,
  BsBriefcase,
  BsChatSquareText,
  BsCodeSlash,
} from "react-icons/bs";

import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="h-[100px]">
          <div
            className="w-full bg-black/20 h-[70px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto
        px-3 flex justify-between text-2x1 text-white/50 items-center nav_bar "
          >
            <Link
              data-tooltip="Home"
              to="home"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-30}
              className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center item"
            >
              <BiHomeAlt />
            </Link>
            <Link
              data-tooltip="about"
              to="about"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
            >
              <BiUser />
            </Link>
            <Link
              data-tooltip="services"
              to="services"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
            >
              <BsClipboardData />
            </Link>
            <Link
              data-tooltip="skills"
              to="skills"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
            >
              <BsCodeSlash />
            </Link>
            <Link
              data-tooltip="projects"
              to="projects"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
            >
              <BsBriefcase />
            </Link>
            <Link
              data-tooltip="contact"
              to="contact"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center"
            >
              <BsChatSquareText />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
