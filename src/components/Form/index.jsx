import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'


const MovieSearch = ({ submit }) => {
    const [query, setQuery] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const handleChange = ({ target: { value } }) => {
		// setSearchParams({ search: value })
		if (!value) setSearchParams({})
		setQuery(value)
    }
    const handleSubmit = (e) => {
		e.preventDefault()
		if (!query) return setSearchParams({})
		setSearchParams({ search: query })
		submit({ query: searchParams.get('search') })
    }
    useEffect(() => {
		const value = searchParams.get('search')
		if (value) setQuery(value)
	}, [searchParams])



    return (
        <form onSubmit={handleSubmit}>
    <input onChange={handleChange} name="query" type="text" value={query} />
    <button type="submit">Search</button>
        </form>
    )
}
export default MovieSearch
