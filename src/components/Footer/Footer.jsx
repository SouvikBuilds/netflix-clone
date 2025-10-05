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
    <div className="footer py-[30px] px-[4%] max-w-[1000px] mx-auto my-auto">
      <div className="footerIcons flex gap-[20px] mx-0 my-[40px]">
        <img
          src={facebook_icon}
          alt="Not Found"
          className="w-[30px] cursor-pointer"
        />
        <img
          src={instagram_icon}
          alt="Not Found"
          className="w-[30px] cursor-pointer"
        />
        <img
          src={twitter_icon}
          alt="Not Found"
          className="w-[30px] cursor-pointer"
        />
        <img
          src={youtube_icon}
          alt="Not Found"
          className="w-[30px] cursor-pointer"
        />
      </div>
      <ul className="grid grid-cols-4 gap-[15px] mb-[30px] ">
        {list_items.map((item, index) => {
          return (
            <li key={index} className="text-white">
              {item}
            </li>
          );
        })}
      </ul>
      <p className="copyRightText text-gray-400 text-[14px] ">
        © 1997–2025 Netflix, Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
