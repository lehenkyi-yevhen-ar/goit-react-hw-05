import clsx from "clsx"
import s from "./Header.module.css"
import { NavLink } from "react-router-dom"

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink)
  }
  return (
    <div className={s.wrapper}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink
        className={buildLinkClass}
        to="/movies"
      >
        Movies
      </NavLink>
    </div>
  )
}

export default Header
