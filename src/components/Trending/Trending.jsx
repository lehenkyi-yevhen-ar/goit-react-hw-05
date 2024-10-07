import { useEffect, useState } from "react"
import { fetchTrendingMovies } from "../../services/api"
import Loader from "../../services/Loader"
import MovieList from "../MovieList/MovieList"

const Trending = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] =
    useState(false)
  useEffect(() => {
    const getTrending = async () => {
      setIsLoading(true)
      const data = await fetchTrendingMovies()
      setMovies(data.results)
      setIsLoading(false)
    }
    getTrending()
  }, [])

  if (isLoading) return <Loader />

  return <MovieList movies={movies} />
}

export default Trending
