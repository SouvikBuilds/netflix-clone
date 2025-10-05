import React from "react";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  const list_items = [
    "Audio Description",
    "Help Center",
    "Gift Cards",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Terms of Use",
    "Privacy",
    "Legal Notices",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
  ];
  return (
    <div className="footer py-[30px] px-[4%] sm:px-[6%] max-w-[1000px] mx-auto my-auto">
      <div className="footerIcons flex gap-[15px] sm:gap-[20px] mx-0 my-[30px] sm:my-[40px]">
        <img
          src={facebook_icon}
          alt="Not Found"
          className="w-[25px] sm:w-[30px] cursor-pointer hover:opacity-70 transition-opacity"
        />
        <img
          src={instagram_icon}
          alt="Not Found"
          className="w-[25px] sm:w-[30px] cursor-pointer hover:opacity-70 transition-opacity"
        />
        <img
          src={twitter_icon}
          alt="Not Found"
          className="w-[25px] sm:w-[30px] cursor-pointer hover:opacity-70 transition-opacity"
        />
        <img
          src={youtube_icon}
          alt="Not Found"
          className="w-[25px] sm:w-[30px] cursor-pointer hover:opacity-70 transition-opacity"
        />
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[10px] sm:gap-[15px] mb-[20px] sm:mb-[30px]">
        {list_items.map((item, index) => {
          return (
            <li
              key={index}
              className="text-white text-[12px] sm:text-[14px] cursor-pointer hover:underline"
            >
              {item}
            </li>
          );
        })}
      </ul>
      <p className="copyRightText text-gray-400 text-[12px] sm:text-[14px]">
        © 1997–2025 Netflix, Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
