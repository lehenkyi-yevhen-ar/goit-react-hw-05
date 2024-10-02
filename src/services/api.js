import axios from "axios"

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjUyZTQzOGNjYzhiNTMyMmFkNmRlMDY5NTU4YzlhNSIsIm5iZiI6MTcyNzg2MTQyNi4zNjA4OTUsInN1YiI6IjY2ZmQwY2VlNzA0MWQ2MGYzM2QwNjZkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UAPZp1WcwyqbX4vzmBBSFNxSyNcFbLUF7cQY8h-js0w",
  },
}

const BASE_URL =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1"

export const fetchMovieList = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}&query=${encodeURIComponent(
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
