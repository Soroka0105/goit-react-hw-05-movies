import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Cast from "components/Cast"
import { getMovieCast } from "api/api"
import { Loader } from "components/Loader"

const CastPage = () => {
  const [cast, setCast] = useState([])
  const [error, setError] = useState(null)
  const [loader, setLoader] = useState(false)
  const { movieId } = useParams(0)
  
  useEffect(() => {
    if (!movieId) return
    const fetchCast = async () => {
      setLoader(true)
    try {
      const data = await getMovieCast(movieId)
      setCast(data.cast)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoader(false)
    }
  }
fetchCast()
       
}, [movieId]);

  return (
    <>
      {error && <h1>{error}</h1>}
      {loader ? <Loader/> :<Cast array={cast} /> }
      
    </>
  )

}

export default CastPage