import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loader from "./services/Loader"

const Home = lazy(() =>
  import("./pages/HomePage/HomePage")
)
const Header = lazy(() =>
  import("./components/Navigation/Navigation")
)
const NotFound = lazy(() =>
  import("./pages/NotFound/NotFound")
)
const Movies = lazy(() =>
  import("./pages/MoviesPage/MoviesPage")
)
const MovieDetails = lazy(() =>
  import("./pages/MovieDetails/MovieDetailsPage")
)
const Cast = lazy(() =>
  import("./components/MovieCast/MovieCast")
)
const Reviews = lazy(() =>
  import("./components/Reviews/MovieReviews")
)

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movies"
            element={<Movies />}
          />
          <Route
            path="/movies/:movieId"
            element={<MovieDetails />}
          >
            <Route
              path="cast"
              element={<Cast />}
            />
            <Route
              path="reviews"
              element={<Reviews />}
            />
          </Route>
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
