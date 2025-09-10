// src/pages/Ticket.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Ticket = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold">No ticket details found!</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center  px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-5 border border-gray-300">
        <h1 className="text-2xl font-bold text-center text-green-600">
          🎟 Your Ticket
        </h1>

        <div className="flex flex-col items-center space-y-3">
          <img
            src={state.posterUrl}
            alt="poster"
            className="w-40 h-56 object-cover rounded-lg shadow-md"
          />
          <h2 className="text-lg font-semibold text-gray-800">
            {state.theater}
          </h2>
          <p className="text-gray-600">Slot: {state.slot}</p>
          <p className="text-gray-600">
            Seats:{" "}
            <span className="font-semibold">
              {Array.isArray(state.seats) ? state.seats.join(", ") : "N/A"}
            </span>
          </p>
          <p className="text-gray-600">
            Total Seats:{" "}
            <span className="font-semibold">{state.totalNoOfSeat}</span>
          </p>
        </div>

        {/* Ticket Divider */}
        <div className="border-t border-dashed border-gray-400 my-4"></div>

        {/* Extra Info */}
        <div className="flex justify-between text-sm text-gray-500">
          <span>Date: {new Date().toLocaleDateString()}</span>
          <span>ID: #{Math.floor(Math.random() * 100000)}</span>
        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full mt-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
        >
          Done ✅
        </button>
      </div>
    </div>
  );
};

export default Ticket;
