import React, { useEffect, useState } from "react";
import Cards_data from "../../assets/cards/Cards_data.js";
import API_KEY from "../../data.js";
import { useNavigate } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const navigate = useNavigate();
  const popularIds = [
    "tt28037987",
    "tt22001978",
    "tt1187043",
    "tt35076553",
    "tt11773426",
    "tt26548265",
    "tt13751694",
    "tt24225606",
    "tt1954470",
    "tt12735488",
    "tt0986264",
    "tt27540217",
    "tt31945132",
    "tt27540542",
    "tt21626284",
    "tt28754073",
    "tt2338151",
    "tt15327088",
    "tt31316162",
    "tt27118357",
    "tt16539454",
    "tt28089700",
    "tt8108198",
    "tt27852049",
    "tt1562872",
    "tt32080876",
    "tt26229612",
    "tt33319697",
    "tt27843798",
    "tt8983202",
    "tt26903104",
    "tt0367110",
    "tt26758372",
    "tt31522415",
    "tt15354916",
    "tt27907811",
    "tt4635372",
    "tt0347304",
    "tt33888131",
    "tt13391710",
    "tt0169102",
    "tt15654328",
    "tt23804696",
    "tt4430212",
    "tt21383812",
    "tt7019942",
    "tt2082197",
    "tt3322312",
    "tt10676052",
  ];

  const blockBusterIds = [
    "tt1841542",
    "tt1639426",
    "tt3717068",
    "tt8304386",
    "tt1629376",
    "tt1373156",
    "tt6692354",
    "tt3017412",
    "tt15281402",
    "tt0464160",
    "tt4934950",
    "tt0886539",
    "tt3678938",
    "tt7690638",
    "tt4007558",
    "tt2424988",
    "tt0473367",
    "tt3001638",
    "tt5525650",
    "tt1428459",
    "tt3173910",
    "tt0323013",
    "tt0375611",
    "tt3390572",
    "tt30970235",
    "tt2213054",
    "tt8108164",
    "tt8066940",
    "tt0451850",
    "tt1291465",
    "tt1934231",
    "tt5997666",
    "tt7218518",
    "tt0347473",
    "tt8130968",
    "tt22987820",
    "tt1849718",
    "tt0216817",
    "tt3148502",
    "tt0405508",
    "tt0461936",
    "tt26932223",
    "tt5946128",
  ];

  const onlyOnNetflixIds = [
    "tt4574334",
    "tt6257970",
    "tt2707408",
    "tt6611916",
    "tt6517102",
    "tt5180504",
    "tt9251798",
    "tt2085059",
    "tt2442560",
    "tt5189670",
    "tt5952634",
    "tt5753856",
    "tt7137906",
    "tt5290382",
    "tt7768848",
    "tt7909970",
    "tt4179452",
    "tt7335184",
    "tt9398466",
    "tt5299008",
    "tt11318602",
    "tt10687564",
    "tt1241317",
    "tt4139588",
    "tt4729430",
    "tt7533152",
    "tt9243946",
    "tt7653254",
    "tt4857264",
    "tt8403664",
    "tt8771910",
    "tt5071412",
    "tt9244578",
    "tt8420184",
    "tt8936646",
    "tt8064302",
    "tt10516352",
    "tt12312250",
    "tt2737304",
    "tt10620868",
    "tt7221388",
    "tt5727208",
    "tt12411074",
    "tt9642938",
    "tt10009170",
    "tt10795658",
    "tt9184986",
    "tt9308682",
    "tt10048342",
    "tt10530176",
    "tt10287954",
    "tt2531336",
    "tt6467482",
    "tt13352232",
    "tt13652552",
    "tt8878862",
    "tt13676344",
    "tt11102190",
    "tt12809988",
    "tt13412252",
    "tt11657662",
    "tt9421570",
    "tt10919420",
    "tt8699270",
    "tt11337908",
    "tt12370124",
    "tt12079212",
    "tt14992922",
    "tt14819828",
    "tt12235718",
    "tt8726102",
    "tt21836538",
    "tt8009428",
    "tt3322312",
    "tt10676052",
  ];

  const upcomingIds = [
    "tt21626284",
    "tt28754073",
    "tt15327088",
    "tt31316162",
    "tt27118357",
    "tt16539454",
    "tt28089700",
    "tt8108198",
    "tt27852049",
  ];

  const topPicksIds = [
    "tt1562872",
    "tt32080876",
    "tt26229612",
    "tt33319697",
    "tt27843798",
    "tt8983202",
    "tt26903104",
    "tt0367110",
    "tt26758372",
  ];

  const [movies, setMovies] = useState([]);

  const getMovieIds = (cat) => {
    switch (cat) {
      case "Blockbuster Movies":
        return blockBusterIds;
      case "Only on Netflix":
        return onlyOnNetflixIds;
      case "Upcoming":
        return upcomingIds;
      case "Top Picks For You":
        return topPicksIds;
      case "Popular on Netflix":
      default:
        return popularIds;
    }
  };

  const fetchMovies = async (cat) => {
    setMovies([]); // Clear previous movies
    const ids = getMovieIds(cat);

    ids.forEach(async (id) => {
      const apiUrl = `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}&`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      setMovies((prev) => [...prev, data]);
    });
  };

  useEffect(() => {
    fetchMovies(category || "Popular on Netflix");
  }, [category]);

  return (
    <div className="titleCards mt-[10px] mb-[30px]">
      <h2 className="mb-[8px] text-white text-2xl font-bold">
        {title ? title : category || "Popular on Netflix"}
      </h2>
      <div className="card_list flex flex-row gap-[10px] overflow-x-scroll scrollbar-hide">
        {movies
          .filter(
            (movie) =>
              movie &&
              movie.Poster &&
              movie.Poster !== "N/A" &&
              movie.Title &&
              movie.Title !== "Untitled" &&
              movie.Response !== "False"
          )
          .map((movie, index) => (
            <div
              className="card relative flex-shrink-0"
              key={index}
              onClick={() => {
                navigate(`/player/${movie.imdbID}`);
              }}
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-[240px] h-[200px] object-cover rounded-[4px] cursor-pointer"
              />
              <p className="text-white absolute bottom-[10px] right-[10px] font-semibold">
                {movie.Title}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TitleCards;
