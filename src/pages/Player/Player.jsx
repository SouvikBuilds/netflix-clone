import React, { useEffect, useState } from "react";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import API_KEY from "../../data.js";
import { netflix_api_key } from "../../data.js";
import { useParams } from "react-router-dom";

const Player = () => {
  const { id: imdbID } = useParams();
  const [videoId, setVideoId] = useState(null);
  const [videoTitle, setVideoTitle] = useState(null);
  const [data, setData] = useState(null);

  const getYoutubeVideoId = async (imdbID) => {
    const omdbUrl = `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`;
    const omdbRes = await fetch(omdbUrl);
    const omdbData = await omdbRes.json();

    const title = omdbData.Title;
    setVideoTitle(title);
    setData(omdbData);

    const ytUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
      title + " trailer"
    )}&type=video&key=${netflix_api_key}`;
    const ytRes = await fetch(ytUrl);
    const ytData = await ytRes.json();

    const vid = ytData.items[0]?.id?.videoId;
    setVideoId(vid);

    return `https://www.youtube.com/embed/${vid}`;
  };

  useEffect(() => {
    if (imdbID && imdbID.startsWith("tt")) getYoutubeVideoId(imdbID);
  }, [imdbID]);

  return (
    <div className="player text-white min-h-screen flex flex-col justify-center items-center p-4 sm:p-0 bg-black">
      <img
        src={back_arrow_icon}
        alt=""
        className="absolute top-[10px] sm:top-[20px] left-[10px] sm:left-[20px] w-[35px] sm:w-[50px] cursor-pointer hover:opacity-70 transition-opacity z-10"
        onClick={() => {
          window.history.back();
        }}
      />
      {videoId ? (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={videoTitle + " trailer"}
          frameBorder="0"
          allowFullScreen
          className="rounded-[10px] aspect-video max-w-[1200px] w-full h-auto min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
        ></iframe>
      ) : (
        <p className="text-gray-400 text-2xl sm:text-4xl font-bold text-center px-4">
          Loading Trailer...
        </p>
      )}
      <div className="player-info flex flex-col sm:flex-row items-center justify-between w-[90%] max-w-[1200px] mt-4 gap-2 sm:gap-4 text-center sm:text-left">
        <p className="text-sm sm:text-base">
          {data ? data.Released : "Loading Published date..."}
        </p>
        <p className="text-sm sm:text-base font-semibold">
          {videoTitle ? videoTitle : "Loading Name..."}
        </p>
        <p className="text-sm sm:text-base">
          {data ? data.Genre : "Loading Genre..."}
        </p>
      </div>
    </div>
  );
};

export default Player;
