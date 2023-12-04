import { useState } from 'react'



const MovieSearch = ({ onSubmit }) => {
    const [query, setQuery] = useState('')
    // const [searchParams, setSearchParams] = useSearchParams()
  const handleChange = e => {
      
    setQuery(e.target.value)
		// setSearchParams({ search: value })
		// if (!value) setSearchParams({})
		// setQuery(value)
    }
    const handleSubmit = e => {
      e.preventDefault()
    onSubmit(query)
      setQuery('')
		// if (!query) return setSearchParams({})
		// setSearchParams({ search: query })
		// submit({ query: searchParams.get('search') })
    }
  //   useEffect(() => {
	// 	const value = searchParams.get('search')
	// 	if (value) setQuery(value)
	// }, [searchParams])



    return (
        <form onSubmit={handleSubmit}>
    <input onChange={handleChange} name="query" type="text" value={query} />
    <button type="submit">Search</button>
        </form>
    )
}
export default MovieSearch
