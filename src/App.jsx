import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loader from "./services/loader"

const Home = lazy(() =>
  import("./pages/Home/Home")
)
const Header = lazy(() =>
  import("./components/Header/Header")
)
const NotFound = lazy(() =>
  import("./pages/NotFound/NotFound")
)
const Movies = lazy(() =>
  import("./pages/Movies/Movies")
)
const MovieDetails = lazy(() =>
  import("./pages/MovieDetails/MovieDetails")
)
const Cast = lazy(() =>
  import("./components/Cast/Cast")
)
const Reviews = lazy(() =>
  import("./components/Reviews/Reviews")
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
