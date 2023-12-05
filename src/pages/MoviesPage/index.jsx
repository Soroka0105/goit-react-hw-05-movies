import {  useState, useEffect } from 'react'
import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom';
import MovieSearch from './../../components/Form/index';
import { getMovieWithSearch } from 'api/api' 
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader';

const MoviesPage = () => {
  // const [query, setQuery] = useState('')
  const [movieList, setMovieList] = useState([])
  const [error, setError] = useState(null)
  const [loader, setLoader] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  

  
  // const handleSubmit = value => {
  //   setQuery(value)
  //   setSearchParams({query:query})
  // }
 
  useEffect(() => {
    const movies = searchParams.get('query')
    if (!movies) return;
    const fetchMoviesList = async () => {
   setLoader(true)
    try {
      const resp = await getMovieWithSearch(movies)
      console.log(resp.results)
setMovieList(resp.results)
    } catch (error) {
      setError(error.message)
    } finally { 
      setLoader(false)
    }
    }
    fetchMoviesList()

  }, [searchParams]);
  
  

  return (
    <>
      {error && <h1>{error}</h1>}
      {loader ? <Loader/> :  <MovieSearch onSubmit={setSearchParams} />}
      <MoviesList array={movieList} />
      <Outlet/>
  
    </>
   
  )
}

export default MoviesPage
