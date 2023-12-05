import { useParams } from "react-router-dom"
import { getMovieReviews } from "api/api"
import { useState, useEffect } from "react"
import { Loader } from "components/Loader"
import Reviews from './../../../../components/reviews/index';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([])
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(null)
  const { movieId } = useParams(0)
  
  useEffect(() => {
      if (!movieId) return
    const fetchReviews = async () => {
setLoader(true)
      try {
        const data = await getMovieReviews(movieId)
        setReviews(data.results)
      } catch (error) {
        setError(error.message)
      } finally {
      setLoader(false)
    }
    }
      
    
fetchReviews()
      

}, [movieId]);
    
  return (
    <>
      {error && <h1>{error}</h1>}
      {loader && <Loader />}
      {reviews.length > 0 ?<Reviews array={reviews} />:<h2>No Reviews</h2> }
      
    </>
  )
}

export default ReviewsPage