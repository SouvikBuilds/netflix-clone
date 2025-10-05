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
    <div className="player text-white h-screen flex flex-col justify-center items-center">
      <img
        src={back_arrow_icon}
        alt=""
        className="absolute top-[20px] left-[20px] w-[50px] cursor-pointer"
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
          className="rounded-[10px]"
        ></iframe>
      ) : (
        <p className="text-gray-400 text-4xl font-bold">Loading Trailer...</p>
      )}
      <div className="player-info flex items-center justify-between w-[90%] mt-4">
        <p>{data ? data.Released : "Loading Published date..."}</p>
        <p>{videoTitle ? videoTitle : "Loading Name..."}</p>
        <p>{data ? data.Genre : "Loading Genre..."}</p>
      </div>
    </div>
  );
};

export default Player;
