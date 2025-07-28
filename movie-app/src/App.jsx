import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import MovieDetail from '../pages/MovieDetail'
import Layout from '../components/Layout'
import { useDispatch } from 'react-redux'
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpComingMovies } from './RTK/movieThunks'
import { useEffect } from 'react'
import { fetchGenres } from './RTK/genreThunk'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPopularMovies())
    dispatch(fetchNowPlayingMovies())
    dispatch(fetchUpComingMovies())
    dispatch(fetchTopRatedMovies())
    dispatch(fetchGenres());
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/details/:type/:movieId" element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
