import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      alert("Password must be at least 8 characters long!");
      return;
    }
    if (!/^\d{10}$/.test(contact)) {
      alert("Contact number must be exactly 10 digits!");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("user")) || [];
    if (storedUsers.find((u) => u.email === email)) {
      alert("User already exists with the same email!");
      return;
    }
    storedUsers.push({ email, password, firstName, lastName, contact });
    localStorage.setItem("user", JSON.stringify(storedUsers));
    alert("Signup Successful✅ Please login");
    navigate("/Login");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleSignUp}
        className="flex flex-col w-70 md:w-120 bg-gradient-to-b from-gray-800 to-gray-900 
             p-8 rounded-2xl shadow-lg space-y-6 border border-gray-700"
      >
        <h2 className="text-xl md:text-3xl font-extrabold text-center text-white">
          Create Account
        </h2>
        <p className="text-gray-400 text-center text-sm">
          Sign up to book your favorite movies 🎬
        </p>

        <input
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="p-2 md:p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 
               border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
        <input
          type="text"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="p-2 md:p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 
               border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
        <input
          type="number"
          placeholder="Enter your contact no"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="p-2 md:p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 
               border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />

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
          className="bg-blue-600 text-white py-2 md:py-3 rounded-lg font-semibold
               hover:bg-blue-700 transition duration-300 ease-in-out shadow-md"
        >
          Sign Up
        </button>

        <p className="text-gray-400 text-sm text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/Login")}
            className="text-blue-400 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
