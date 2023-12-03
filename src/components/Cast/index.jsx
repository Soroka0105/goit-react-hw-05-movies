const Cast = ({ array }) => {
    return array.map((elm) => (
        <div key={elm.id}>
            <p>{elm.name }</p>
            <img src={`https://image.tmdb.org/t/p/w500/${elm.profile_path}`} alt={elm.name} />
       </div>
        
            
            

))
}
export default Cast