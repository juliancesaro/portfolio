import React from "react"
import "./Navbar.css"
import { Link, animateScroll as scroll } from "react-scroll"

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  return (
    <div className="navbar">
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
  )
}

export default Navbar
