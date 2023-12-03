import { useParams } from "react-router-dom"
import { getMovieReviews } from "api/api"
import { useState, useEffect } from "react"
import Reviews from './../../../../components/reviews/index';

const ReviewsPage = () => {
const [reviews, setReviews] = useState([])
const { movieId } = useParams(0)
  console.log(movieId)
  useEffect(() => {
        const data = getMovieReviews(movieId)
        data.then(reviews => { setReviews(reviews.results) })
    

        if (!movieId) return

}, [movieId]);
console.log(reviews)
    
  return (
    <>
      <Reviews array={reviews} />
    </>
  )
}

export default ReviewsPage