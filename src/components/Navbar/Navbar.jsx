import React, { useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        navRef.current.classList.add("bg-[#141414]");
      } else {
        navRef.current.classList.remove("bg-[#141414]");
      }
    });
  }, []);
  const listItems = [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "My List",
    "Browse by Languages",
  ];
  return (
    <div
      ref={navRef}
      className="navbar w-full py-[20px] px-[6%] flex justify-between fixed text-[14px] text-[#e5e5e5] z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_10%,transparent)]"
    >
      <div className="navbarLeft flex items-center gap-[50px]">
        <img src={logo} alt="Logo Not Found" className="w-[90px]" />
        <ul className="flex items-center gap-[20px]">
          {listItems.map((item, index) => {
            return (
              <li key={index} className="text-white cursor-pointer">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbarRight flex items-center gap-[20px]">
        <img
          src={search}
          alt="Search Icon Not Found"
          className="icons cursor-pointer w-[20px]"
        />
        <p className="text-white">Children</p>

        <img src={bell} alt="" className="icons w-[20px] cursor-pointer" />
        <div className="navbar_profile flex items-center gap-3 group">
          <img
            src={profile}
            alt=""
            className="profile cursor-pointer rounded-[4px] relative"
          />
          <img src={caret_icon} alt="" className="cursor-pointer" />

          <div
            className="dropDown absolute top-[100%] right-0 w-max 
          bg-[#191919] py-[18px] px-[22px] rounded-[2px] underline z-[1] hidden group-hover:block group-active:block"
          >
            <p
              className="text-white text-[13px] cursor-pointer"
              onClick={() => {
                logout();
              }}
            >
              Sign Out Of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
