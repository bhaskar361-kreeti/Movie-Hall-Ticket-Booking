import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';


const BookSeat = () => {

  const { state } = useLocation();
  const seats = Array.from({ length: 60 }, (_, i) => i + 1)
  console.log(seats);


  return (
    <div className='w-full min-h-screen flex flex-col space-y-6 justify-center items-center '>
      <div className='flex justify-center gap-x-4 items-center'>
        <h1 className='font-bold text-3xl'>{state.theater}</h1>
        <h2 className='font-bold text-3xl'>Time:- {state.slot}</h2>
      </div>
      <h2 className='text-xl text-gray-300'>Select your seat</h2>
      <div className='w-1/2 grid grid-cols-10  '>
        {seats.map((seat) => (
          <button className='w-10 py-2 m-2 border-pink-200 rounded border-l-6 border-2 cursor-pointer bg-gray-200 text-black hover:bg-green-600 hover:text-white'>{seat}</button>
        ))}
      </div>
    </div>
  )
}

export default BookSeat