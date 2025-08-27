import { Link } from "react-router-dom";
import Movie from "../Components/Movies/Movie";
import Header from "./Header";

const Home = () => {
  return (
    <div className="flex justify-center flex-col items-center w-full p-10">
      <Header />
      <Movie />
    </div>
  );
};

export default Home;
