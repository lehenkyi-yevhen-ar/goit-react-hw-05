import { useEffect, useState } from "react"
import { fetchTrendingMovies } from "../../services/api"
import { Link } from "react-router-dom"
import Loader from "../../services/loader"

const Trending = () => {
  const [trending, setTrending] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getTrending = async () => {
        setIsLoading(true)
      const data = await fetchTrendingMovies()
      setTrending(data.results)
      setIsLoading(false)
    }
    getTrending()
  }, [])
 

if (isLoading)  
    return <Loader/>

  return (
    <div>
      <ul>
        {trending.map((movie) => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Trending
