import MoviesList from "components/MoviesList/MoviesList"
import { getTrendingMovies } from "api/api"
import { useEffect, useState } from 'react'



const HomePage = () => {
  const [movies, setMovies] = useState([])

  

  useEffect(() => {
    const data = getTrendingMovies()

 data.then(
   movies => {setMovies(prevMovies => [...movies.results])}
  )
  

  }, [])

 
console.log(movies)





  return (
    <>
      <MoviesList array={movies } />
     
    </>
    
  )
}

export default HomePage
