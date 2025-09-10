import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user")) || [];
    if (storedUser.length === 0) {
      alert("⚠️ No users found. Please sign up first.");
      navigate("/SignUp");
    }
    const matchedUser = storedUser.find(
      (u) => u.email === email && u.password === password
    );

    if (matchedUser) {
      console.log("Logging in with:", email, password);
      alert("Login Successful 💳✅");
      navigate("/");
    } else {
      alert("⚠️ No users found. Please sign up first.");
      navigate("/SignUp");
    }

    // redirect to homepage after login
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br">
      <form
        onSubmit={handleLogin}
        className="flex flex-col w-70 md:w-96 bg-gradient-to-b from-gray-800 to-gray-900 
                   p-8 rounded-2xl shadow-lg space-y-6 border border-gray-700"
      >
        <h2 className="text-xl md:text-3xl font-extrabold text-center text-white">
          Welcome Back
        </h2>
        <p className="text-gray-400 text-center text-sm">
          Login to continue booking 🎟️
        </p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-2 md:p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                     border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 md:p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                     border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 md:py-3 sm:text-sm rounded-lg font-semibold
                     hover:bg-blue-700 transition duration-300 ease-in-out shadow-md"
        >
          Login
        </button>

        <p className="text-gray-400 text-sm text-center">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/SignUp")}
            className="text-blue-400 hover:underline cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
