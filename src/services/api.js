import axios from "axios"

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjUyZTQzOGNjYzhiNTMyMmFkNmRlMDY5NTU4YzlhNSIsIm5iZiI6MTcyNzg2MTQyNi4zNjA4OTUsInN1YiI6IjY2ZmQwY2VlNzA0MWQ2MGYzM2QwNjZkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UAPZp1WcwyqbX4vzmBBSFNxSyNcFbLUF7cQY8h-js0w",
  },
  params: {
    language: "en-US",
  },
}

const BASE_URL = "https://api.themoviedb.org/3"

export const fetchMovieList = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?page=1&query=${encodeURIComponent(
        query
      )}`,
      options
    )
    return response.data.results
  } catch (error) {
    console.error(error)
    return []
  }
}

export const fetchMovieById = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}`,
      options
    )
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const fetchCastByMovieId = async (
  movieId
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits`,
      options
    )
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const fetchReviewsByMovieId = async (
  movieId
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews`,
      options
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day`,
      options
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}
