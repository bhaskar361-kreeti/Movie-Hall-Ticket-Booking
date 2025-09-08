import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams(); //give the id of the movie from the url we have clicked
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    fetch("/Movies.json")
      .then((res) => res.json())
      .then((data) => {
        let selected = data.find((m) => m.id === id); //m.id will select all the url and match with selected url
        setMovieDetail(selected);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className=" min-h-screen w-full flex flex-col sm:flex-col md:flex-row p-10 justify-center gap-x-10 items-center ">
      <img className="h-[400px]" src={movieDetail.posterUrl} alt="#" />
      <div className="w-full md:w-2/5  h-full flex justify-center items-center flex-col space-y-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mt-6">
          {movieDetail.name}
        </h1>
        <div className="w-full flex justify-center items-center gap-x-4">
          <p className="text-gray-300 text-sm md:text-lg mt-2">
            {movieDetail.genre}
          </p>
          <p className="text-gray-300 mt-2">Rating: {movieDetail.rating}</p>
          <p className="text-gray-300 mt-2">Format: {movieDetail.format}</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-gray-300 mt-2 text-center text-sm md:text-lg">
            {movieDetail.desc}
          </p>
        </div>
        <Link to={`./showTime`} className="w-full">
          <button className="w-full cursor-pointer px-10 py-4 bg-blue-600 text-gray-200 font-bold rounded hover ">
            Book Seats
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;
