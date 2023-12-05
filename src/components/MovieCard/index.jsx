const MovieCard = ({ obj }) => {
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
const {backdrop_path, imdb_id, title, vote_average, overview} = obj
    return (
        <>
            <div>
                <img src={backdrop_path ? `https://image.tmdb.org/t/p/w500/${backdrop_path
}`: defaultImg} alt={imdb_id} />
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