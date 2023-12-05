const Cast = ({ array }) => {
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
    return array.map((elm) => (
        <div key={elm.id}>
            <p>{elm.name }</p>
            <img src={elm.profile_path ? `https://image.tmdb.org/t/p/w500/${elm.profile_path}`: defaultImg} alt={elm.name} />
       </div>
        
            
            

))
}
export default Cast