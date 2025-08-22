import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {

  const {id} = useParams()//give the id of the movie from the url we have clicked
  const[movieDetail, setMovieDetail] = useState([])

  useEffect(() => {
      fetch('/Movies.json')
        .then((res) => res.json())
        .then((data) => {
          let selected = data.find((m)=> m.id === id)
          setMovieDetail(selected)
          console.log(data);
        })
        .catch((err) => console.log(err)
        )
    }, [id])

  return (
    <div className=' min-h-screen w-full flex flex-col  p-10 justify-center items-center'>
      <img className='h-[400px]' src={movieDetail.posterUrl} alt="" />
      <h1 className="text-3xl font-bold mt-6">{movieDetail.name}</h1>
      <p className="text-gray-400 text-lg mt-2">{movieDetail.genre}</p>
      <p className="text-gray-400 mt-2">Rating: {movieDetail.rating}</p>
      <p className="text-gray-400 mt-2">Format: {movieDetail.format}</p>
    </div>
  )
}

export default MovieDetails