const Reviews = ({ array}) => {
    return array.map((elm) => (
        <div key={elm.id }>
             <p>{elm.author}</p>
            <span>{elm.content }</span>
        </div>
     
           
          
            
            

))
}
export default Reviews