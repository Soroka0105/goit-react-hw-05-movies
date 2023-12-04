const MovieCard = ({ obj }) => {
const {backdrop_path, imdb_id, title, vote_average, overview} = obj
    return (
        <>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path
}`} alt={imdb_id} />
            </div>

            <div>
            <p>{title}</p>
            <p>rating:{vote_average}</p>
            <span>{overview }</span>
    </div>
        </>
        
)

}

export default MovieCard