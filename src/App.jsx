import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loader from "./services/Loader"

const Home = lazy(() =>
  import("./pages/Home/HomePage")
)
const Header = lazy(() =>
  import("./components/Header/Navigation")
)
const NotFound = lazy(() =>
  import("./pages/NotFound/NotFound")
)
const Movies = lazy(() =>
  import("./pages/Movies/MoviesPage")
)
const MovieDetails = lazy(() =>
  import("./pages/MovieDetails/MovieDetailsPage")
)
const Cast = lazy(() =>
  import("./components/Cast/MovieCast")
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
