import {  useState, useEffect } from 'react'
import React from 'react'
import { Outlet, useParams } from 'react-router-dom';
import MovieSearch from './../../components/Form/index';
import { getMovieWithSearch } from 'api/api' 
import MoviesList from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [query, setQuery] = useState('')
  const [movieList, setMovieList] = useState([])
  const { movieId } = useParams(0)

  
  const handleSubmit = ({ query}) => {
    setQuery(query)
    
  }

  
  useEffect(() => {
        const data = getMovieWithSearch(query)
        data.then(movieList => { setMovieList(movieList) })

  }, [query]);
  console.log(query)
  console.log(movieId)
  console.log(movieList.results)

  return (
    <>
      {!movieId && <MovieSearch submit={handleSubmit} />}
      {query && <MoviesList array={movieList.results } />}
      
      <Outlet/>
  
    </>
   
  )
}

export default MoviesPage
