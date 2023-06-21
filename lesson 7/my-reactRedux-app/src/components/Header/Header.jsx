import CustomLink from "../customLink/customLink";
import "./Header.css"
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { Checkbox } from "../Checkbox/Checkbox";

const Header = () => {
  const [checked, setChecked] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);
  const changeTheme = () => {
    setChecked(!checked);
    setTheme(theme === 'white' ? 'grey' : 'white');
  }
  return (
    <nav className="header_block">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/users">Users</CustomLink>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/posts">Posts</CustomLink>
      <Checkbox checked={checked} changeTheme={changeTheme}/>
    </nav>
  )
}

export default Header