import { Outlet } from "react-router-dom";
import CustomLink from "../customLink/customLink";

const AboutPage = () => {
  return (
    <div className="about_block">
      <h1>About page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <CustomLink to="/about/contacts">Contacts</CustomLink>
        <CustomLink to="/about/team">Team</CustomLink>
        <Outlet />
    </div>
  )
}

export default AboutPage