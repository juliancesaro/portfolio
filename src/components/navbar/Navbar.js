import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-scroll"
import MenuIcon from "@material-ui/icons/Menu"
import MobileNav from "../mobileNav/MobileNav"

const Navbar = () => {
  const [mobilenavVisible, setMobilenavVisible] = useState(false)
  const [hamburgerClass, setHamburgerClass] = useState("")
  const toggleMobilenavVisible = () => {
    setMobilenavVisible(!mobilenavVisible)
    if (hamburgerClass === "") {
      setHamburgerClass("open")
    } else {
      setHamburgerClass("")
    }
  }
  return (
    <div className="navbar">
      <div className="navlinks">
        <div id="homelink">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            HOME
          </Link>
        </div>
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
        <div
          id="nav-icon3"
          className={hamburgerClass}
          onClick={toggleMobilenavVisible}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <MobileNav
        toggleMobilenavVisible={toggleMobilenavVisible}
        mobilenavVisible={mobilenavVisible}
      />
    </div>
  )
}

export default Navbar
