import { useParams, Link, Outlet } from "react-router-dom"
import { useEffect, useState } from "react";
import { getSingleMovie } from "api/api";
import MovieCard from "components/MovieCard";

const MovieDetailsPage = () => {
    const [movieObj, setMovieObj] = useState({})
    const { movieId } = useParams(0)
    

    useEffect(() => {
        const data = getSingleMovie(movieId)
        data.then(movieObj => { setMovieObj(movieObj) })
    

        if (!movieId) return

}, [movieId]);
    console.log(movieId)
    console.log(movieObj)

    
    return (
        <>
        <div>
      Movie Details
            </div>
            <MovieCard obj={movieObj } />
             <Link to={'reviews'}>Reviews</Link>
            <Link to={'cast'}>Cast</Link>
            <Outlet/>
        </>
    
  )
}

export default MovieDetailsPage
