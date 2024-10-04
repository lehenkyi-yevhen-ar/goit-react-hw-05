import {
  Link,
  useLocation,
} from "react-router-dom"
import s from "./MovieList.module.css"

const MovieList = ({movies}) => {
  const location = useLocation()

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li key={movie.id}
          className={s.element}>
            <Link
              to={`/movies/${movie.id}`}
              state={location}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                className={s.img}
              />
              <p className={s.title}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieList
