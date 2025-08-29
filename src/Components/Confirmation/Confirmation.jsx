import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const Confirmation = () => {

  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user);
  
  const isLoggedIn = !!user
  
  const checkConfirmation = ()=>{
    if(isLoggedIn){
      navigate('./Payment')
    }
    else{
      navigate('/SignUp')
    }
  }

  const { state } = useLocation()
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1 className='font-bold text-3xl mt-10'>Confirmation Page</h1>
      <div className='w-1/2 h-screen flex flex-col space-y-6 justify-center items-center'>
        <img className='h-[400px] w-1/3' src={state.posterUrl} alt="" />
        <h2 className='font-semibold text-3xl text-gray-300'>Theater Name : {state.theater}</h2>
        <h2 className='font-semibold text-xl text-gray-400'>Slot : {state.slot}</h2>
        <p className='font-semibold text-xl text-gray-400'>Seat No : {state.seats.join(', ')}</p>
        <p className='font-semibold text-xl text-gray-400'>Total no of Seat : {state.totalNoOfSeat}</p>
        <button onClick={checkConfirmation}
        className='w-1/2 rounded py-4 font-bold bg-gray-200 hover:bg-green-400 text-center text-black'>
          Pay & Generate Ticket
        </button>
      </div>
    </div>
  )
}

export default Confirmation