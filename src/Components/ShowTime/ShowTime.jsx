import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ShowTime = () => {
  const [showTimes, setShowTimes] = useState([]);
  const [showBanner, setShowBanner] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetch("/Movies.json")
      .then((res) => res.json())
      .then((data) => {
        let selected = data.find((m) => m.id === id);
        if (selected) {
          setShowTimes(selected.theaters);
          setShowBanner(selected.posterUrl);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="w-full min-h-screen text-2xl flex justify-center items-center flex-col">
      <h1 className="text-xl md:text-3xl font-bold m-6 text-center">
        Choose Theater & Show Time
      </h1>
      <div className="md:w-full lg:w-4/5 flex justify-evenly items-center flex-col md:flex-row ">
        <img
          src={showBanner}
          alt=""
          className="sm:w-1/2 md:w-1/4 lg:w-1/5 h-[200px] sm:h-[300px] md:h-[300px] lg:h-[350px]"
        />
        <div className="W-4/5 sm:w-2/5 md:w-3/5 lg:w-3/5  flex justify-evenly items-center ">
          {showTimes.map((theater, index) => (
            <div
              key={index}
              className="w-1/3 p-6 rounded-xl shadow-md  gap-4 flex flex-col items-center"
            >
              <h2 className="text-center text-sm md:text-xl">{theater.name}</h2>
              {theater.slots.map((slot, i) => (
                <Link
                  to={`./BookSeat`}
                  state={{ theater: theater.name, slot, url: showBanner }}
                  key={i}
                  className="w-[70px] md:w-[110px] lg:w-[140px] text-[10px] md:text-[14px] lg:text-[18px] py-2 md:py-3 text-center bg-gray-200 border-green-400 border-l-10 border-3 text-black rounded cursor-pointer"
                >
                  {slot}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowTime;
