
import { Link, useLocation } from "react-router-dom"
import { MovieItem } from "components/Movie/Movie"


const MoviesList = ({ array }) => {
const location = useLocation()
    return (
        array.map((el) => 
            <Link key={el.id} to={`/movies/${el.id}` } state={{from: location}} ><MovieItem  elm={el} /></Link>
    )
)
}
export default MoviesList