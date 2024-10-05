import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchCastByMovieId } from "../../services/api"
import Loader from "../../services/Loader"
import s from "./Cast.module.css"

const Cast = () => {
  const { movieId } = useParams()
  const [cast, setCast] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCastByMovieId(
        movieId
      )
      setCast(data.cast)
    }
    getData()
  }, [movieId])

  if (!cast) return <Loader />

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {cast.map((actor) => (
          <li
            key={actor.id}
            className={s.element}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt=""
              className={s.img}
            />
            <p className={s.castName}>
              {actor.name}
            </p>
            <p className={s.castCharacter}>
              Character: {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cast
