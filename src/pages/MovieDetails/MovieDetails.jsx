import {
  useEffect,
  useRef,
  useState,
} from "react"
import { fetchMovieById } from "../../services/api"
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom"
import Loader from "../../services/loader"
import s from "./MovieDetails.module.css"
const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  const location = useLocation()
  const goBackRef = useRef(location.state)

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieById(movieId)
      setMovie(data)
    }
    getData()
  }, [movieId])

  if (!movie) return <Loader />

  const userScore = (
    movie.vote_average * 10
  ).toFixed(0)

  return (
    <div className={s.container}>
      <Link
        className={s.goBack}
        to={goBackRef.current}
      >
        Go back
      </Link>
      <div className={s.mainContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
          className={s.mainImg}
        />
        <div className={s.detailsContainer}>
          <h2>{movie.title}</h2>
          <p className={s.details}>
            Original title: {movie.original_title}
          </p>
          <p className={s.details}>
            Country:{" "}
            {movie.production_countries
              .map((country) => country.name)
              .join(", ")}
          </p>
          <p className={s.details}>
            Year: {movie.release_date.slice(0, 4)}
          </p>
          <p className={s.details}>
            User score: {userScore}%
          </p>
          <p className={s.details}>
            Duration: {movie.runtime} min
          </p>
          <h3>Overview</h3>
          <p className={s.details}>
            {movie.overview}
          </p>
          <h3>Genres</h3>
          <p className={s.details}>
            {movie.genres
              .map((genre) => genre.name)
              .join(", ")}
          </p>
        </div>
      </div>
      <p className={s.additional}>
        Additional information
      </p>
      <div className={s.navLinks}>
        <NavLink className={s.moreBtn} to="cast">
          Cast
        </NavLink>
        <NavLink
          className={s.moreBtn}
          to="reviews"
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default MovieDetails
