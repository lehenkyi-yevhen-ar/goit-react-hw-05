import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchReviewsByMovieId } from "../../services/api"
import Loader from "../../services/Loader"
import s from "./Reviews.module.css"

const Reviews = () => {
  const { movieId } = useParams()
  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] =
    useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const data = await fetchReviewsByMovieId(
        movieId
      )
      setReviews(data.results)
      setIsLoading(false)
    }
    getData()
  }, [movieId])

  if (isLoading) return <Loader />

  if (!reviews.length)
    return (
      <h2>Sorry, there are no reviews yet...</h2>
    )
  else
    return (
      <div className={s.container}>
        <ul className={s.list}>
          {reviews.map((review) => (
            <li
              key={review.id}
              className={s.element}
            >
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default Reviews
