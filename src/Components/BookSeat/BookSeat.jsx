import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BookSeat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [countSeat, setCountSeat] = useState(0);
  const { state } = useLocation();

  const navigate = useNavigate();

  const handleProceed = () => {
    if (countSeat > 0) {
      navigate("/Confirmation", {
        state: {
          theater: state.theater,
          slot: state.slot,
          seats: selectedSeats,
          posterUrl: state.url,
          totalNoOfSeat: countSeat,
        },
      });
    } else {
      alert("Please select minimum 1 seat");
    }
  };

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat)); // if seat is already selected remove it from the array
    } else {
      setSelectedSeats([...selectedSeats, seat]); // if not selected add it
      setCountSeat(countSeat + 1);
    }
  };

  //accesing theater name and slot
  const seats = Array.from({ length: 60 }, (_, i) => i + 1);
  console.log(seats);

  return (
    <div className="w-full min-h-screen flex flex-col space-y-6 justify-center items-center ">
      <div className="flex justify-center gap-x-4 items-center">
        <h1 className="font-bold sm:text-xl md:text-2xl lg:text-3xl">
          {state.theater}
        </h1>
        <h2 className="font-bold sm:text-xl md:text-2xl lg:text-3xl">
          Time:- {state.slot}
        </h2>
      </div>
      <h2 className="text-xl text-gray-300">Select your seat</h2>
      <div className="w-full md:w-4/5 lg:w-1/2 grid grid-cols-6 md:grid-cols-6 lg:grid-cols-10">
        {seats.map((seat) => (
          <button
            key={seat}
            onClick={() => handleSeatClick(seat)}
            className={`${
              selectedSeats.includes(seat)
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-black hover:bg-green-400"
            }
           w-8 md:w-10 py-2 text-sm m-2  text-center border-pink-200 rounded border-l-6 border-2 cursor-pointer bg-gray-200 text-black hover:bg-green-600 hover:text-white`}
          >
            {seat}
          </button>
        ))}
      </div>
      <div className="w-4/5 md:w-2/5 flex flex-col justify-center items-center gap-y-4  ">
        <p className="text-sm md:text-md font-semibold">
          You selected: {countSeat} seat
        </p>
        <button
          onClick={handleProceed}
          className="w-full cursor-pointer py-4 bg-gray-300 text-black rounded font-bold text-center block"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default BookSeat;
