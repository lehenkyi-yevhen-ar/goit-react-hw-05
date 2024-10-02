import { useSearchParams } from "react-router-dom"
import MovieList from "../../components/MovieList/MovieList"
import { useEffect, useState } from "react"
import { fetchMovieList } from "../../services/api"
import SearchBar from "../../components/SearchBar/SearchBar"
import Loader from "../../services/loader"

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [searchParams, setSearchParams] =
    useSearchParams()
  const query = searchParams.get("query") ?? ""
  const [isLoading, setIsLoading] =
    useState(false)

  useEffect(() => {
    const getMoviesByQuery = async (query) => {
      if (query) {
        setIsLoading(true)
        const data = await fetchMovieList(query)
        setMovies(data)
        setIsLoading(false)
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
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery}/>
      {isLoading ? <Loader/> :
      <MovieList movies={movies} />
}
    </div>
  )
}

export default Movies
