import React from "react"
import "./Footer.css"
import linkedin from "../../images/linkedin.png"
import github from "../../images/github.png"
import facebook from "../../images/facebook.png"

const Footer = () => {
  return (
    <footer>
      <a
        href="https://github.com/juliancesaro"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="Github Logo" width="40px" />
      </a>
      <a
        href="https://www.linkedin.com/in/juliancesaro/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="Linkedin Logo" width="40px" />
      </a>

      <a
        href="https://www.facebook.com/julian.cesaro.1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebook} alt="Facebook Logo" width="40px" />
      </a>
    </footer>
  )
}

export default Footer
