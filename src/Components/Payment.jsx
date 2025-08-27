import React from 'react'
import { useLocation } from 'react-router-dom'

const Payment = () => {

  const { state } = useLocation()
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
      <h1 className='font-bold text-3xl mt-10'>Payment Page</h1>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <img className='h-[400px] w-1/3' src={state.url} alt="" />
        <h2 className='font-semibold text-3xl text-gray-300'>Theater Name : {state.theater}</h2>
        <h2 className='font-semibold text-3xl text-gray-300'>Slot: {state.slot}</h2>
        <p className='font-semibold text-3xl text-gray-300'>Seats: {state.seats}</p>
      </div>
    </div>
  )
}

export default Payment