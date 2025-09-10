import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/SignUp");
  };

  const handleLogin = () => {
    navigate("/Login");
  };
  return (
    <div className="w-full m-2 p-6 flex justify-around items-center">
      <div className="w-1/3 flex flex-col-reverse md:flex-row justify-evenly items-center gap-x-2">
        <h1 className="font-bold text-[10px] sm:text-lg  md:text-xl lg:text-2xl ">
          Recommended Movies...
        </h1>
      </div>
      <div className="w-1/3 flex m-4 flex-col-reverse md:flex-rowjustify-evenly items-center">
        <h1
          className="sm:text-sm  md:text-3xl lg:text-5xl font-extrabold 
               bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 
               bg-clip-text text-transparent animate-bounce"
        >
          MovieMood
        </h1>
      </div>

      <div className="w-1/3 flex justify-center flex-col gap-y-4 sm:flex-col md:flex-row items-center gap-x-4">
        <button
          className="rounded w-20 sm:w-24 md:w-32 text-sm md:text-md transform transition duration-500 hover:scale-105 hover:shadow-xl
           sm:py-1 md:py-2 lg:py-3  bg-gray-300 text-black cursor-pointer font-semibold"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="rounded w-20 sm:w-24 md:w-32 text-sm  md:text-md  transform transition duration-500 hover:scale-105 hover:shadow-xl
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
