import MoviesList from "components/MoviesList/MoviesList"
import { getTrendingMovies } from "api/api"
import { useEffect, useState } from 'react'
import { Loader } from "components/Loader"



const HomePage = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
   setLoader(true)
    try {
      const resp = await getTrendingMovies()
      setMovies(resp.results)
    } catch (error) {
      setError(error.message)
      console.error(error.message)
    } finally {
      setLoader(false)
    }
    
  }

 






  return (
    <>
      {error && <h1>{error}</h1> }
      {loader ? <Loader/> :<MoviesList array={movies } />}
    </>
    
  )
}

export default HomePage
