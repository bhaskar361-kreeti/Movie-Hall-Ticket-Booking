import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [search, setSearch] = useState("");
  const [moives, setMovies] = useState([]);
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/SignUp");
  };

  const handleLogin = () => {
    navigate("/Login");
  };

  useEffect(() => {
    fetch("/Movies.json")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (searchedMovie) => {
    const foundMovie = moives.find(
      (m) => m?.name.toLowerCase() === searchedMovie.toLowerCase()
    );
    if (foundMovie) {
      navigate(`./movie/${foundMovie.id}`);
    } else {
      alert("Movie not found!");
    }
  };

  return (
    <div className="w-full m-2 p-6 flex justify-between items-center">
      <div className="w-1/10 flex  flex-col-reverse md:flex-row justify-evenly items-center">
        <motion.img
          src="src/assets/logo.png"
          alt="Logo"
          className="w-full md:w-1/2 rounded-[70px] h-1/3"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
      </div>
      <div className="flex w-1/2 md:mr-6 ">
        <div className="flex items-center w-full bg-gray-800  px-4 py-2 md:py-2 lg:py-3 shadow-inner">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search movies..."
            className="w-full bg-transparent outline-none rounded-md text-white placeholder-gray-400 text-sm sm:text-base"
          />
        </div>
        <button
          onClick={() => handleSearch(search)}
          type="submit"
          className="ml-3 bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-5 py-[3px] md:py-2 rounded-2xl text-[8px] md:text-sm font-medium transition transform hover:scale-105"
        >
          Search
        </button>
      </div>

      <div className="w-1/6 flex justify-center flex-col gap-y-4 sm:flex-col md:flex-row items-center gap-x-4">
        <button
          className="rounded w-16 sm:w-24 md:w-32 text-[10px] md:text-lg transform transition duration-500 hover:scale-105 hover:shadow-xl
           sm:py-1 md:py-2 lg:py-3  bg-gray-300 text-black cursor-pointer font-semibold"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="rounded w-16 sm:w-24 md:w-32 text-[10px] text-sm  md:text-lg  transform transition duration-500 hover:scale-105 hover:shadow-xl
           sm:py-1 md:py-2 lg:py-3  bg-gray-300 text-black cursor-pointer font-semibold"
          onClick={handleSignUp}
        >
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Header;
