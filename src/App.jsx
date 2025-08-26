import './App.css'
import {Routes, Route} from 'react-router-dom'
import MovieList from './Components/MovieList'
import MovieDetails from './Components/MovieDetails'
import ShowTime from './Components/ShowTime'
import BookSeat from './Components/BookSeat'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Payment from './Components/Payment'

function App() {


  return (
    <>
    <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-gray-900 text-white h-full w-full flex justify-center items-center'>
      <Routes>
        <Route path='/' element={<MovieList/>} />
        <Route path='/movie/:id' element={<MovieDetails/>} />
        <Route path='/movie/:id/showTime' element={<ShowTime/>} />
        <Route path='/movie/:id/showTime/BookSeat' element={<BookSeat/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signUp' element={<SignUp/>} />
        {/* <Route path='/movie/:id/showTime/payment' element={<Payment/>} /> */}



      </Routes>
    </div>
    </>
  )
}

export default App