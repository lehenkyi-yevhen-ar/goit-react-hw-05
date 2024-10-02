import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import NotFound from "./pages/NotFound/NotFound"
import Header from "./components/Header/Header"
import Movies from "./pages/Movies/Movies"
import MovieDetails from "./pages/MovieDetails/MovieDetails"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={<Movies />}
        />
        <Route
          path="/movies/:movieId"
          element={<MovieDetails />}
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
