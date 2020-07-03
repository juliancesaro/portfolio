import React from "react"
import { Fade } from "react-reveal"
import "./AboutMe.css"
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle"
import emoji from "react-easy-emoji"
import julian from "../../images/julian.png"

const AboutMe = () => {
  return (
    <div className="about-me">
      <Fade bottom duration={1000} distance="40px">
        <img className="julian" alt="julian" src={julian} />
        <h1>
          Hi, I'm <span className="name">Julian Cesaro</span>.{" "}
          <span className="wave-emoji">{emoji("👋")}</span>
        </h1>
        <h1>I'm an aspiring full-stack web developer.</h1>
        <div className="scroll-down">
          <h2>Read More!</h2>
          <span className="down-icon">
            <ArrowDropDownCircleIcon />
          </span>
        </div>
      </Fade>
    </div>
  )
}

export default AboutMe
