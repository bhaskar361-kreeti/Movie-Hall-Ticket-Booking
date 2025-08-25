import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


const ShowTime = () => {

  const [showTimes, setShowTimes] = useState([])
  const [showBanner, setShowBanner] = useState()

  const { id } = useParams()
  useEffect(() => {
    fetch('/Movies.json')
      .then((res) => res.json())
      .then((data) => {
        let selected = data.find((m) => m.id === id)  //m.id will select all the url and match with selected url
        if (selected) {
          setShowTimes(selected.theaters)
          setShowBanner(selected.posterUrl)
        }
        console.log(selected.theaters);

      })
      .catch((err) => console.log(err)
      )
  }, [id])


  return (
    <div className='w-full min-h-screen text-2xl flex justify-center items-center flex-col'>
      <h1 className="text-3xl font-bold m-6 text-center">Choose Theater & Show Time</h1>
      <div className='w-4/5 flex justify-evenly items-center '>
        <img src={showBanner} alt="" className='w-1/4 h-[500px]' />
        {showTimes.map((theater, index) => (
          <div key={index} className=" p-6 rounded-xl shadow-md  gap-4 flex flex-col">
            <h2 className='text-center'>{theater.name}</h2>
            {theater.slots.map((slot, i) => (
              <Link to={`./BookSeat`}
                state={{ theater: theater.name, slot }}>
                <button
                  key={i}
                  className=" w-[140px] text-[18px] py-3 bg-gray-200 border-green-400 border-l-10 border-3 text-black rounded cursor-pointer"
                >
                  {slot}
                </button>
              </Link>

            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowTime