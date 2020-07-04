import React from "react"
import "./Navbar.css"
import { Link } from "react-scroll"
import MenuIcon from "@material-ui/icons/Menu"
import MobileNav from "../mobileNav/MobileNav"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navlinks">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          HOME
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={1}
          duration={500}
        >
          ABOUT
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
        >
          PROJECTS
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          CONTACT
        </Link>
      </div>
      <div className="hamburger">
        <MenuIcon fontSize="large" />
      </div>
      <MobileNav />
    </div>
  )
}

export default Navbar
