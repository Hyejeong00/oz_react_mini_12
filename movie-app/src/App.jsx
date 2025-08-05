import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import MovieDetail from '../pages/MovieDetail/MovieDetail'
import Layout from '../components/Layout'
import { useDispatch } from 'react-redux'
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpComingMovies } from './RTK/movieThunks'
import { useEffect } from 'react'
import SearchMovie from '../pages/SearchMovie'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import getUserInfo from "../hooks/useSupabaseAuth"
import { setUser } from "./RTK/userSlice"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPopularMovies())
    dispatch(fetchNowPlayingMovies())
    dispatch(fetchUpComingMovies())
    dispatch(fetchTopRatedMovies())
    const fetchUser = async () => {
      const user = await getUserInfo()
      if (user) dispatch(setUser(user))
    }
    fetchUser()
  }, [])

  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/details/:movieId" element={<MovieDetail />} />
          <Route path='/search/' element={<SearchMovie />} />
        </Route>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
