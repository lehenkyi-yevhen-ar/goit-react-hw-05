import { useSearchParams } from "react-router-dom"
import MovieList from "../../components/MovieList/MovieList"
import { useEffect, useState } from "react"
import { fetchMovieList } from "../../services/api"
import SearchBar from "../../components/SearchBar/SearchBar"
import Loader from "../../services/Loader"


const Movies = () => {
  const [movies, setMovies] = useState([])
  const [searchParams, setSearchParams] =
    useSearchParams()
  const query = searchParams.get("query") ?? ""
  const [isLoading, setIsLoading] =
    useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!query) {
      return
    }
    const getMoviesByQuery = async () => {
      try {
        setIsError(false)
        setIsLoading(true)
        const data = await fetchMovieList(
          query
        )
        setMovies(data)
      } catch (error) {
        setIsError(true)
        console.error(error);
      } finally {
        setIsLoading(false)
      }
    }
    getMoviesByQuery()
  }, [query])

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return setSearchParams({})
    }
    searchParams.set("query", newQuery)
    setSearchParams(searchParams)
    setMovies([])
  }

  return (
    <div>
      <SearchBar
        handleChangeQuery={handleChangeQuery}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  )
}

export default Movies
