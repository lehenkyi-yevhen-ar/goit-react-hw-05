import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchCastByMovieId } from "../../services/api"
import Loader from "../../services/loader"

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
    <div>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
          src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
          alt=""
        />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cast
