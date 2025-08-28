import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Movies/Movie";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import ShowTime from "./Components/ShowTime/ShowTime";
import BookSeat from "./Components/BookSeat/BookSeat";
import Confirmation from "./Components/Confirmation/Confirmation";
import Payment from "./Components/Payment/Payment";
import SignUp from "./Components/signup/SignUp";
import Login from "./Components/login/Login";

function App() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-gray-900 text-white h-full w-full flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movie/:id/showTime" element={<ShowTime />} />
        <Route path="/movie/:id/showTime/BookSeat" element={<BookSeat />} />
        <Route path="/Confirmation" element={<Confirmation />} />
        <Route path="/Confirmation/Payment" element={<Payment />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />


      </Routes>
    </div>
  );
}

export default App;
