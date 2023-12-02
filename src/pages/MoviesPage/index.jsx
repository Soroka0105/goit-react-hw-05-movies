import { useCallback, useEffect, useMemo, useState } from 'react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import MovieSearch from './../../components/Form/index';


const MoviesPage = () => {
  const [query, setQuery] = useState('')
  
  const handleSubmit = ({ query}) => {
		setQuery(query)
	}
  console.log(query)


  return (
    <>
     <div>
        Movies
      </div>
      <MovieSearch submit={handleSubmit}/>
      <Link to={'movieDetails/123'}>Details</Link>
      <Outlet/>
  
    </>
   
  )
}

export default MoviesPage
