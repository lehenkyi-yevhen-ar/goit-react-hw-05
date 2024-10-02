import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <h1>
        Sorry, but the page you are looking for is
        not found ...
      </h1>
      <Link to="/">Back to Home Page</Link>
    </div>
  )
}

export default NotFound
