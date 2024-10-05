import { useEffect, useState } from "react"
import { fetchTrendingMovies } from "../../services/api"
import {
  Link,
  useLocation,
} from "react-router-dom"
import Loader from "../../services/Loader"
import s from "./Trending.module.css"

const Trending = () => {
  const [trending, setTrending] = useState([])
  const [isLoading, setIsLoading] =
    useState(false)
  const location = useLocation()
  useEffect(() => {
    const getTrending = async () => {
      setIsLoading(true)
      const data = await fetchTrendingMovies()
      setTrending(data.results)
      setIsLoading(false)
    }
    getTrending()
  }, [])

  if (isLoading) return <Loader />

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {trending.map((movie) => (
          <li
            key={movie.id}
            className={s.element}
          >
            <Link
              to={`movies/${movie.id}`}
              state={location}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                className={s.img}
              />
              <p className={s.title}>
                {movie.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Trending
