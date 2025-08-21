import './App.css'
import {Routes, Route} from 'react-router-dom'
import MovieList from './Components/MovieList'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<MovieList/>} />
      </Routes>
    </>
  )
}

export default App
