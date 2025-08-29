import Movie from "../Components/Movies/Movie";
import Header from "../Components/Header/Header";

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <Header />
      <div className="p-10">
        <Movie />
      </div>
    </div>
  );
};


export default Home;
