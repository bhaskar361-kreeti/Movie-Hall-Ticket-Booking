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
    <div className="w-full m-2 p-6 flex justify-between items-center">
      <h1 className="font-bold text-4xl ">Recommended Movies</h1>
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="rounded transform transition duration-500 hover:scale-105 hover:shadow-xl
           py-3 px-6 bg-gray-300 text-black cursor-pointer font-semibold"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="rounded transform transition duration-500 hover:scale-105 hover:shadow-xl
           py-3 px-6 bg-gray-300 text-black cursor-pointer font-semibold"
          onClick={handleSignUp}
        >
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Header;
