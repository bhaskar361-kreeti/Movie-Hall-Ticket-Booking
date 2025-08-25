import './App.css'
import {Routes, Route} from 'react-router-dom'
import MovieList from './Components/MovieList'
import MovieDetails from './Components/MovieDetails'
import ShowTime from './Components/ShowTime'
import BookSeat from './Components/BookSeat'

function App() {


  return (
    <>
    <div className='allPath bg-black h-full w-full flex justify-center items-center'>
      <Routes>
        <Route path='/' element={<MovieList/>} />
        <Route path='/movie/:id' element={<MovieDetails/>} />
        <Route path='/movie/:id/showTime' element={<ShowTime/>} />
        <Route path='/movie/:id/showTime/BookSeat' element={<BookSeat/>} />
      </Routes>
    </div>
    </>
  )
}

export default App