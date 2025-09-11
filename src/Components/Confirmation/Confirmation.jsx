import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  console.log(user);

  const isLoggedIn = !!user;

  const checkConfirmation = () => {
    if (isLoggedIn) {
      navigate("./Payment", {
        state: {
          theater: state.theater,
          slot: state.slot,
          seats: state.seats,
          posterUrl: state.posterUrl,
          totalNoOfSeat: state.totalNoOfSeat,
        },
      });
    } else {
      navigate("/SignUp");
    }
  };

  const { state } = useLocation();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl mt-10">Confirmation Page</h1>
      <div className="w-1/2 h-screen flex flex-col space-y-4 md:space-y-6 justify-center items-center">
        <img
          className="h-[400px] md:h-[300px] lg:h-[400px] md:w-2/3 sm:rounded lg:w-2/3 xl:w-2/5"
          src={state.posterUrl}
          alt=""
        />
        <h2 className="font-semiboldsm:text-xl md:text-2xl lg:text-3xl text-gray-300">
          Theater Name : {state.theater}
        </h2>
        <h2 className="font-semibold text-sm md:text-xl text-gray-400">
          Slot : {state.slot}
        </h2>
        <p className="font-semibold text-sm md:text-xl text-gray-400">
          Seat No : {state.seats.join(", ")}
        </p>
        <p className="font-semibold text-sm md:text-xl text-gray-400">
          Total no of Seat : {state.totalNoOfSeat}
        </p>
        <button
          onClick={checkConfirmation}
          className="w-full md:w-4/5 lg:w-1/2 rounded py-3 md:py-4 font-bold bg-gray-200 hover:bg-green-400 text-center text-black"
        >
          Pay & Generate Ticket
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
