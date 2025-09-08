import React, { useState, useEffect } from "react";
import axios from "../../Utility/axios";
import requests from "../../Utility/requests";
import "../Banner/Banner.css";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch Netflix originals (TV shows with network 213)
        const request = await axios.get(requests.fetchNetflixOriginals);

        // Pick a random movie from the results
        const results = request.data.results;
        setMovie(results[Math.floor(Math.random() * results.length)]);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    }
    fetchData();
  }, []);

  // Helper function to truncate text
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
