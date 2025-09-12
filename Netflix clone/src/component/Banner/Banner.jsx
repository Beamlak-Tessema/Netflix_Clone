// import React, { useState, useEffect } from "react";
// import axios from "../../Utility/axios";
// import requests from "../../Utility/requests";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
// import "../Banner/Banner.css";

// function Banner({ addToMyList }) {
//   const [movie, setMovie] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(requests.fetchNetflixOriginals);
//       setMovie(
//         request.data.results[
//           Math.floor(Math.random() * request.data.results.length - 1)
//         ]
//       );
//       return request;
//     }
//     fetchData();
//   }, []);

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: { autoplay: 1 },
//   };

//   const handlePlay = () => {
//     if (trailerUrl) {
//       setTrailerUrl(""); // close trailer
//     } else {
//       movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
//         .then((url) => {
//           const urlParams = new URLSearchParams(new URL(url).search);
//           setTrailerUrl(urlParams.get("v"));
//         })
//         .catch((error) => console.log(error));
//     }
//   };

//   const handleMyList = () => {
//     addToMyList(movie); // add movie to list
//     alert(`${movie?.title || movie?.name} added to My List!`);
//   };

//   return (
//     <header
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
//         backgroundPosition: "center center",
//       }}
//     >
//       <div className="banner__contents">
//         <h1 className="banner__title">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className="banner__buttons">
//           <button onClick={handlePlay} className="banner__button">
//             Play
//           </button>
//           <button onClick={handleMyList} className="banner__button">
//             My List
//           </button>
//         </div>
//         <h1 className="banner__description">{movie?.overview}</h1>
//       </div>
//       <div className="banner--fadeBottom" />

//       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//     </header>
//   );
// }

// export default Banner;
import React, { useState, useEffect } from "react";
import axios from "../../Utility/axios";
import requests from "../../Utility/requests";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { motion } from "framer-motion";
import "../Banner/Banner.css";

function Banner({ addToMyList }) {
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  const opts = { height: "390", width: "100%", playerVars: { autoplay: 1 } };

  const handlePlay = () => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const handleMyList = () => {
    addToMyList(movie);
    alert(`${movie?.title || movie?.name} added to My List!`);
  };

  if (!movie) return null;

  return (
    <motion.header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.div
        className="banner__contents"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="banner__title"
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 70 }}
        >
          {movie?.title || movie?.name || movie?.original_name}
        </motion.h1>

        <motion.div
          className="banner__buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, staggerChildren: 0.2 }}
        >
          <motion.button
            onClick={handlePlay}
            className="banner__button"
            whileHover={{ scale: 1.15, backgroundColor: "#e50914" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Play
          </motion.button>
          <motion.button
            onClick={handleMyList}
            className="banner__button"
            whileHover={{ scale: 1.15, backgroundColor: "#6c6c6c" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            My List
          </motion.button>
        </motion.div>

        <motion.h1
          className="banner__description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          {movie?.overview}
        </motion.h1>
      </motion.div>

      <div className="banner--fadeBottom" />

      {trailerUrl && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <YouTube videoId={trailerUrl} opts={opts} />
        </motion.div>
      )}
    </motion.header>
  );
}

export default Banner;
