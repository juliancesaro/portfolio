import React from "react"
import "./MobileNav.css"
import { Link } from "react-scroll"

const MobileNav = () => {
  return (
    <div className="mobilenav">
      <div className="mobilenavlinks">
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
    </div>
  )
}

export default MobileNav
