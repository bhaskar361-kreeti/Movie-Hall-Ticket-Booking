import Movie from "../Components/Movies/Movie";
import Header from "../Components/Header/Header";

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <Header />
      <Movie />
    </div>
  );
};

export default Home;
