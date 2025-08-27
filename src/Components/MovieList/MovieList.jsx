import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from "../Button/Button";


const MovieList = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/Movies.json')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data)
        console.log(data);
      })
      .catch((err) => console.log(err)
      )
  }, [])

  return (
    <div className='flex justify-center flex-col items-center w-full p-10'>
      <div className='w-full  flex justify-between items-center'>
        <h1 className='font-bold text-4xl '>Recommended Movies</h1>
        <div className='w-1/4 flex justify-center items-center gap-x-4 '>
          <Link to={'./login'} className='px-6 rounded-xl py-3 font-bold bg-gray-200 text-black hover:bg-orange-300 cursor-pointer'>
            Login
          </Link>
          <Link to={'./signUp'} className='px-6 rounded-xl py-3 font-bold bg-gray-200 text-black hover:bg-orange-300 cursor-pointer'>
            SignUp
          </Link>
        </div>
      </div>
      <div className='all-movies w-full p-10 grid grid-cols-4 gap-4'>
        {movies.map((movie, index) => (
          <div key={index} className="p-4  flex justify-evenly items-center flex-col rounded">
            <img className='w-7/10 h-7/10 rounded transform transition duration-500 hover:scale-105 hover:shadow-xl' src={movie.posterUrl} alt="" />
            <h2 className="font-bold text-white text-lg">{movie.name}</h2>
            <p className='text-gray-400 text-md font-bold'>{movie.genre}</p>
            <Link to={`./movie/${movie.id}`}>
              <Button/>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieList