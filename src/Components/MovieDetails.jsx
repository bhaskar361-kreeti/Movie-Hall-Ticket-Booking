import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const MovieDetails = () => {

  const { id } = useParams()//give the id of the movie from the url we have clicked
  const [movieDetail, setMovieDetail] = useState([])

  useEffect(() => {
    fetch('/Movies.json')
      .then((res) => res.json())
      .then((data) => {
        let selected = data.find((m) => m.id === id)  //m.id will select all the url and match with selected url
        setMovieDetail(selected)
        console.log(data);
      })
      .catch((err) => console.log(err)
      )
  }, [id])

  return (
    <div className=' min-h-screen w-3/5 flex  p-10 justify-evenly items-center '>
      <img className='h-[400px]' src={movieDetail.posterUrl} alt="#" />
      <div className='w-1/2 h-full flex justify-center items-center flex-col space-y-4'>
        <h1 className="text-5xl font-bold mt-6">{movieDetail.name}</h1>
        <div className='w-full flex justify-center items-center gap-x-2'>
          <p className="text-gray-400 text-lg mt-2">{movieDetail.genre}</p>
          <p className="text-gray-400 mt-2">Rating: {movieDetail.rating}</p>
          <p className="text-gray-400 mt-2">Format: {movieDetail.format}</p>
        </div>
        <div className='flex justify-center items-center '><p className='text-gray-400 mt-2 text-center'>{movieDetail.desc}</p></div>
        <Link to={`./showTime`}>
          <button className='w-full cursor-pointer px-10 py-4 bg-pink-500 text-gray-200 font-bold rounded hover '>Book Seats</button>
        </Link>
      </div>
    </div>
  )
}

export default MovieDetails