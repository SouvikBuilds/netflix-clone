import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

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
      className="navbar w-full py-[20px] px-[4%] sm:px-[6%] flex justify-between fixed text-[12px] sm:text-[14px] text-[#e5e5e5] z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_10%,transparent)]"
    >
      <div className="navbarLeft flex items-center gap-[20px] sm:gap-[50px]">
        <img src={logo} alt="Logo Not Found" className="w-[60px] sm:w-[90px]" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-[20px]">
          {listItems.map((item, index) => {
            return (
              <li
                key={index}
                className="text-white cursor-pointer hover:text-gray-300 transition-colors"
              >
                {item}
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white flex items-center gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>Browse</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              menuOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#141414] border-t border-gray-800">
          <ul className="py-4">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="text-white cursor-pointer px-[4%] py-3 hover:bg-gray-800 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="navbarRight flex items-center gap-[10px] sm:gap-[20px]">
        <img
          src={search}
          alt="Search Icon Not Found"
          className="icons cursor-pointer w-[18px] sm:w-[20px]"
        />
        <p className="text-white hidden sm:block">Children</p>
        <img
          src={bell}
          alt=""
          className="icons w-[18px] sm:w-[20px] cursor-pointer"
        />

        <div className="navbar_profile flex items-center gap-2 sm:gap-3 group relative">
          <img
            src={profile}
            alt=""
            className="profile cursor-pointer rounded-[4px] w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
          />
          <img
            src={caret_icon}
            alt=""
            className="cursor-pointer w-3 h-3 sm:w-4 sm:h-4"
          />

          <div
            className="dropDown absolute top-[100%] right-0 w-max 
          bg-[#191919] py-[18px] px-[22px] rounded-[2px] underline z-[1] hidden group-hover:block group-active:block mt-2"
          >
            <p
              className="text-white text-[13px] cursor-pointer whitespace-nowrap"
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
