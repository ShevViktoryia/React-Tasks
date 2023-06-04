import { useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "./CustomLink.css"

const CustomLink = ({children, to}) => {
  const location = useLocation();
  const match = location.pathname === to;

  return (
    <div className={match ? " active" : ""} id="link">
      <NavLink style={{color: match ? "yellow" : "white"}} to={to}>{children}</NavLink>
    </div>
  )
}

export default CustomLink