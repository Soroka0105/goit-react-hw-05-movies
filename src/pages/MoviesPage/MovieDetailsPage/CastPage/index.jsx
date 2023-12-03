import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Cast from "components/Cast"
import { getMovieCast } from "api/api"

const CastPage = () => {
  const [cast, setCast] = useState([])
  const { movieId } = useParams(0)
  
useEffect(() => {
        const data = getMovieCast(movieId)
        data.then(cast => { setCast(cast.cast) })
    

        if (!movieId) return

}, [movieId]);

    console.log(cast)
  return (
    <>
      <Cast array={cast} />
    </>
  )

}

export default CastPage