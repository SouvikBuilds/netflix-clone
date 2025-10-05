import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Navbar />
      <div className="hero relative">
        <img
          src={hero_banner}
          alt="Not Found"
          className="banner-img w-full [mask-image:linear-gradient(to_right,transparent,black_75%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_75%)]"
        />

        <div className="heroCaption absolute w-full px-[4%] sm:pl-[6%] bottom-0">
          <img
            src={hero_title}
            alt="not found"
            className="caption-img w-[70%] sm:w-[90%] max-w-[280px] sm:max-w-[420px] mb-[20px] sm:mb-[30px]"
          />
          <p className="caption-text text-white max-w-[700px] text-[14px] sm:text-[17px] mb-[15px] sm:mb-[20px] hidden sm:block">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istambul embarks on a quest to save the city from an
            immortal enemy
          </p>
          <div className="hero-btns flex gap-[8px] sm:gap-[10px] mb-[30px] sm:mb-[50px]">
            <button
              type="button"
              className="flex items-center justify-center gap-1 sm:gap-2 px-4 sm:px-8 py-2 sm:py-3 bg-white text-black text-[14px] sm:text-base font-semibold rounded-lg hover:bg-[#ffffffbf] transition-all duration-200 cursor-pointer h-[36px] sm:h-[40px]"
              onClick={() => navigate("/player/tt0427954")}
            >
              <img src={play_icon} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
              Play
            </button>

            <button
              type="button"
              className="btn dark-btn flex items-center justify-center gap-1 sm:gap-2 px-4 sm:px-8 py-2 sm:py-3 bg-[#6d6d6eb3] hover:bg-[#6d6d6e66] text-white text-[14px] sm:text-base font-semibold rounded-lg transition-all duration-200 cursor-pointer h-[36px] sm:h-[40px]"
            >
              <img src={info_icon} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">More Info</span>
              <span className="sm:hidden">Info</span>
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards px-[4%] sm:pl-[6%]">
        <TitleCards
          title={"Blockbuster Movies"}
          category={"Blockbuster Movies"}
        />
        <TitleCards title={"Only on Netflix"} category={"Only on Netflix"} />
        <TitleCards title={"Upcoming"} category={"Upcoming"} />
        <TitleCards title={"Top Pics For You"} category={"Top Pics For You"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
