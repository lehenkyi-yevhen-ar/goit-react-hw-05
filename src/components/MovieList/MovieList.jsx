import { useEffect, useState } from "react"
import {
  Link,
  useSearchParams,
  useLocation,
} from "react-router-dom"
import { fetchMovieList } from "../../services/api"
import SearchBar from "../SearchBar/SearchBar"

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [searchParams, setSearchParams] =
    useSearchParams()
  const query = searchParams.get("query") ?? ""
  const location = useLocation()

  useEffect(() => {
    const getMoviesByQuery = async (query) => {
      if (query) {
        const data = await fetchMovieList(query)
        setMovies(data)
      } else {
        setMovies([])
      }
    }
    getMoviesByQuery(query)
  }, [query])

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return setSearchParams({})
    }
    searchParams.set("query", newQuery)
    setSearchParams(searchParams)
  }

  return (
    <>
      <SearchBar
        handleChangeQuery={handleChangeQuery}
        query={query}
      />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={movie.id.toString()}
              state={location}
            >
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MovieList
