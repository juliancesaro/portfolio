import React from "react"
import { Fade } from "react-reveal"
import { Link } from "react-scroll"
import "./Home.css"
import Navbar from "../navbar/Navbar"
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle"
import Particles from "react-particles-js"
import emoji from "react-easy-emoji"
import julian from "../../images/julian.png"

const AboutMe = () => {
  return (
    <div>
      <div className="home">
        <Particles
          className="particles"
          params={{
            particles: {
              number: { value: 20 },
              color: { value: ["#cc892b", "#1cd6b1", "#8c4ec7", "#8bc74e"] },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: true,
                  speed: 0.2,
                  opacity_min: 0.3,
                  sync: false,
                },
              },
              size: {
                value: 5,
                random: true,
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.1,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                bounce: true,
              },
            },
            interactivity: {
              detect_on: "canvas",
              // activate
              events: {
                onhover: {
                  enable: true,
                  mode: ["bubble"],
                },

                resize: true,
              },
              modes: {
                bubble: {
                  distance: 200,
                  size: 12,
                  duration: 1,
                  opacity: 0.8,
                  speed: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
        <Fade bottom duration={1000} distance="40px">
          <img className="julian" alt="julian" src={julian} />
          <h1>
            Hi, I'm <span className="name">Julian Cesaro</span>.{" "}
            <span className="wave-emoji">{emoji("👋")}</span>
          </h1>
          <h1>I'm an aspiring full-stack web developer.</h1>
          <div className="scroll-down">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-63}
              duration={500}
            >
              <h2>Read More!</h2>
              <span className="down-icon">
                <ArrowDropDownCircleIcon />
              </span>
            </Link>
          </div>
        </Fade>
        <Navbar />
      </div>
    </div>
  )
}

export default AboutMe
