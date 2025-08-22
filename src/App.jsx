import './App.css'
import {Routes, Route} from 'react-router-dom'
import MovieList from './Components/MovieList'
import MovieDetails from './Components/MovieDetails'

function App() {


  return (
    <>
    <div className='bg-black p-10'>
      <Routes>
        <Route path='/' element={<MovieList/>} />
        <Route path='/movie' element={<MovieDetails/>} />

      </Routes>
    </div>
    </>
  )
}

export default App
