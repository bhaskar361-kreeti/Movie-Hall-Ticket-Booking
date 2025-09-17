import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import ShowTime from "./Components/ShowTime/ShowTime";
import BookSeat from "./Components/BookSeat/BookSeat";
import Confirmation from "./Components/Confirmation/Confirmation";
import Payment from "./Components/Payment/Payment";
import SignUp from "./Components/signup/SignUp";
import Login from "./Components/login/Login";
import GenerateTicket from "./Components/generateTicket/GenerateTicket";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div className="text-white min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movie/:id/showTime" element={<ShowTime />} />
        <Route path="/movie/:id/showTime/BookSeat" element={<BookSeat />} />
        <Route
          path="/Confirmation"
          element={
            <ProtectedRoute>
              <Confirmation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Confirmation/Payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Confirmation/Payment/ticket"
          element={
            <ProtectedRoute>
              <GenerateTicket />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
