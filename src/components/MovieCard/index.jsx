const MovieCard = ({ obj }) => {

    return (
        <>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${obj.backdrop_path
}`} alt={obj.imdb_id} />
            </div>

            <div>
            <p>{obj.title}</p>
            <p>rating:{obj.vote_average}</p>
            <span>{obj.overview }</span>
    </div>
        </>
        
)

}

export default MovieCard