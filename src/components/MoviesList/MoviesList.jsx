import { MovieItem } from "components/Movie/Movie"

const { Link } = require("react-router-dom")
const MoviesList = ({ array }) => {

    return (
        array.map((el) => (
            <Link key={el.id} to={`movies/movieDetails/${el.id}` }><MovieItem  elm={el} /></Link>
    ))
)
}
export default MoviesList