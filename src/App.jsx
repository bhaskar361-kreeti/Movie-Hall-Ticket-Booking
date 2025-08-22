import './App.css'
import {Routes, Route} from 'react-router-dom'
import MovieList from './Components/MovieList'
import MovieDetails from './Components/MovieDetails'

function App() {


  return (
    <>
    <div className='allPath bg-black h-full w-full '>
      <Routes>
        <Route path='/' element={<MovieList/>} />
        <Route path='/movie/:id' element={<MovieDetails/>} />

      </Routes>
    </div>
    </>
  )
}

export default App
