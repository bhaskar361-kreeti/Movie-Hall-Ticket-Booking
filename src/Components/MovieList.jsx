import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

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
    <div className='flex justify-center flex-col items-center w-full'>
      <h1 className='font-bold text-2xl '>Recommended Movie</h1>
      <div className='all-movies w-full p-10 grid grid-cols-4 gap-4'>
        {movies.map((movie, index) => (
          <div key={index} className="p-4  flex justify-evenly items-center flex-col rounded">
            <img className='w-7/10 h-7/10 rounded' src={movie.posterUrl} alt="" />
            <h2 className="font-bold text-white text-lg">{movie.name}</h2>
            <p className='text-gray-400 text-md font-bold'>{movie.genre}</p>
            <button
             className='px-6 py-4 rounded font-bold bg-gray-300 text-black cursor-pointer hover:bg-blue-600 hover:text-white'>More Details</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieList