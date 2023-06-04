import CustomLink from "../customLink/customLink";
import "./Header.css"

const Header = () => {
  return (
    <nav className="header_block">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/users">Users</CustomLink>
    </nav>
  )
}

export default Header