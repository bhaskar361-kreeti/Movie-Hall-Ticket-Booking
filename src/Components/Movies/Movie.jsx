import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("/Movies.json")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // get ?q=searchValue from URL
  const params = new URLSearchParams(location.search);
  const query = params.get("q") || "";

  // filter movies
  const filteredMovies = query
    ? movies.filter((m) => m.name.toLowerCase().includes(query.toLowerCase()))
    : movies;

  return (
    <div className="all-movies w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie, index) => (
          <div
            key={index}
            className="p-4 flex justify-evenly items-center flex-col rounded-xl"
          >
            <img
              className="w-4/5 h-7/10 rounded transform transition duration-500 hover:scale-105 hover:shadow-xl"
              src={movie.posterUrl}
              alt={movie.name}
            />
            <h2 className="font-bold text-white md:text-sm lg:text-lg">
              {movie.name}
            </h2>
            <p className="text-gray-400 text-md font-bold">{movie.genre}</p>
            <Link to={`./movie/${movie.id}`}>
              <Button />
            </Link>
          </div>
        ))
      ) : (
        <p className="text-white text-center col-span-full">No movies found!</p>
      )}
    </div>
  );
};

export default MovieList;
