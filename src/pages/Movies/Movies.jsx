import { useSearchParams } from "react-router-dom"
import MovieList from "../../components/MovieList/MovieList"
import { useEffect, useState } from "react"
import { fetchMovieList } from "../../services/api"
import SearchBar from "../../components/SearchBar/SearchBar"
import Loader from "../../services/loader"
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn"

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [searchParams, setSearchParams] =
    useSearchParams()
  const query = searchParams.get("query") ?? ""
  const [isLoading, setIsLoading] =
    useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getMoviesByQuery = async (
      query,
      page
    ) => {
      if (query) {
        setIsLoading(true)
        const data = await fetchMovieList(
          query,
          page
        )
        setMovies((prev) => [...prev, ...data])
        setIsLoading(false)
      } else {
        setMovies([])
      }
    }
    getMoviesByQuery(query, page)
  }, [query, page])

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return setSearchParams({})
    }
    searchParams.set("query", newQuery)
    setSearchParams(searchParams)
    setMovies([])
    setPage(1)
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
      {movies.length > 0 && (
        <LoadMoreBtn
          setPage={setPage}
          isLoading={isLoading}
        />
      )}
    </div>
  )
}

export default Movies
