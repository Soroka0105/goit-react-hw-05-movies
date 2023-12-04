import {  useState, useEffect } from 'react'
import React from 'react'
import { Outlet } from 'react-router-dom';
import MovieSearch from './../../components/Form/index';
import { getMovieWithSearch } from 'api/api' 
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader';

const MoviesPage = () => {
  const [query, setQuery] = useState('')
  const [movieList, setMovieList] = useState([])
  const [error, setError] = useState(null)
  const [loader, setLoader] = useState(false)
  

  
  const handleSubmit = value => {
    setQuery(value)
    
  }
 
  useEffect(() => {
    const fetchMoviesList = async () => {
   setLoader(true)
    try {
      const resp = await getMovieWithSearch(query)
      console.log(resp.results)
setMovieList(resp.results)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoader(false)
    }
    }
    fetchMoviesList()

  }, [query]);
  
  

  return (
    <>
      {error && <h1>{error}</h1>}
      {loader ? <Loader/> :  <MovieSearch onSubmit={handleSubmit} />}
     
      {query && <MoviesList array={movieList} />}
      
      <Outlet/>
  
    </>
   
  )
}

export default MoviesPage
