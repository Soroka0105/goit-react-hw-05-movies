import { useParams, Link, Outlet, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import { getSingleMovie } from "api/api";
import MovieCard from "components/MovieCard";
import { Loader } from "components/Loader";

const MovieDetailsPage = () => {
    const [movieObj, setMovieObj] = useState({})
    const [error, setError] = useState(null)
    const [loader, setLoader] = useState(false)
    const { movieId } = useParams(0)
    const location = useLocation()
    const back = location?.state?.from ?? '/'

    useEffect(() => {
        const fetchMovieById = async () => {
            setLoader(true)
            try {
                const data = await getSingleMovie(movieId)
                setMovieObj(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoader(false)
            }
        }
    fetchMovieById()

        if (!movieId) return

}, [movieId]);
    console.log(movieId)
    console.log(movieObj)

    
    return (
        <>
        <h2>
      Movie Details
            </h2>
            <Link to={back}>Back</Link>
            {error && <h1>{error}</h1> }
            {loader ? <Loader/> : <MovieCard obj={movieObj } />}
             <Link to={'reviews'}>Reviews</Link>
            <Link to={'cast'}>Cast</Link>
            <Outlet/>
        </>
    
  )
}

export default MovieDetailsPage
