import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/Movies.json")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="all-movies w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="p-4  flex justify-evenly items-center flex-col rounded-xl"
        >
          <img
            className="w-4/5 h-7/10 rounded transform transition duration-500 hover:scale-105 hover:shadow-xl"
            src={movie.posterUrl}
            alt=""
          />
          <h2 className="font-bold text-white text-lg">{movie.name}</h2>
          <p className="text-gray-400 text-md font-bold">{movie.genre}</p>
          <Link to={`./movie/${movie.id}`}>
            <Button />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
