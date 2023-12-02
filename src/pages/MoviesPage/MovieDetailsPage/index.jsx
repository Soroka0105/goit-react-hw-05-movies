import { useParams, Link, Outlet } from "react-router-dom"
import { useEffect } from "react";


const MovieDetailsPage = () => {
    const { movieId } = useParams()

    useEffect(() => {
if (!movieId) return;
}, [movieId]);
    console.log(movieId)

    
    return (
        <>
        <div>
      Movie Details
            </div>
             <Link to={'reviews'}>Reviews</Link>
            <Link to={'cast'}>Cast</Link>
            <Outlet/>
        </>
    
  )
}

export default MovieDetailsPage
