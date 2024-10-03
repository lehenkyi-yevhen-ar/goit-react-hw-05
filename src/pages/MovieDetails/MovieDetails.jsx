import { useEffect, useState } from "react"
import { fetchMovieById } from "../../services/api"
import {
  NavLink,
  Outlet,
  useParams,
} from "react-router-dom"
import Loader from "../../services/loader"

const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)

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
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
        <h2>{movie.title}</h2>
        <p>
          Original title: {movie.original_title}
        </p>
        <p>
          Country:{" "}
          {movie.production_countries
            .map((country) => country.name)
            .join(", ")}
        </p>
        <p>
          Year: {movie.release_date.slice(0, 4)}
        </p>
        <p>User score: {userScore}%</p>
        <p>Duration: {movie.runtime} min</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>
          {movie.genres
            .map((genre) => genre.name)
            .join(", ")}
        </p>
      </div>
      <p>Additional information</p>
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default MovieDetails
