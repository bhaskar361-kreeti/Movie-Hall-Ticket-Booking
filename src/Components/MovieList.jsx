import React, { useEffect, useState } from 'react'

const MovieList = () => {

  const [movies, setMovies] = useState("");

  useEffect(()=>{
    fetch('/Movies.json')
    .then((res)=> res.json())
    .then((data)=> {
      setMovies(data)
      console.log(data);
      
    })
    .catch((err)=>console.log(err)
    )
  }, [])

  return (
    <div className='w-full p-10 grid grid-cols-2'>
      {movies.map((movie)=>(
        <div>
          
        </div>
      ))}
    </div>
  )
}

export default MovieList