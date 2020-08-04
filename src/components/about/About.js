import React from "react"
import "./About.css"
import IsVisible from "react-is-visible"
import Section from "../section/Section"
import { Fade } from "react-reveal"
import emoji from "react-easy-emoji"

const About = () => {
  const softwareSkills = [
    {
      skillName: "Java",
      amount: "90%",
    },
    {
      skillName: "JavaScript",
      amount: "85%",
    },
    {
      skillName: "TypeScript",
      amount: "75%",
    },
    {
      skillName: "HTML",
      amount: "80%",
    },
    {
      skillName: "CSS",
      amount: "80%",
    },
    {
      skillName: "React",
      amount: "75%",
    },
    {
      skillName: "SQL",
      amount: "70%",
    },
    {
      skillName: "Node.js",
      amount: "65%",
    },
    {
      skillName: "Python",
      amount: "70%",
    },
    {
      skillName: "MongoDB",
      amount: "55%",
    },
  ]
  return (
    <section className="about">
      <Section title="About">
        <div className="about-content">
          <Fade left duration={1000} distance="70px">
            <div className="about-text">
              <h2>Who am I?</h2>
              <p>I'm Julian.</p>
              <p>
                {emoji("⚡")} I'm a software engineering student at Macquarie
                University.
              </p>
              <p>
                {emoji("⚡")} I enjoy creating projects and learning new
                technologies.
              </p>
              <p>
                I've always been passionate about technology, which is why I
                decided to start studying software engineering nearly four years
                ago. Since then, I've learned a lot and aim to continue learning
                by constantly challenging myself!
              </p>
              <div className="location-wrapper">
                <svg
                  className="octicon octicon-location"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill="white"
                    fillRule="evenodd"
                    d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                  ></path>
                </svg>
                <p>Sydney, Australia</p>
              </div>
            </div>
          </Fade>
          <Fade right duration={1000} distance="70px">
            <div className="skills-wrapper">
              <h2>Skills</h2>
              <ul className="skills">
                {softwareSkills.map((skills) => {
                  return (
                    <li className="skill-bar-wrapper" key={skills.skillName}>
                      <IsVisible once>
                        {(isVisible) => (
                          <div
                            className="skill-bar"
                            style={
                              isVisible
                                ? {
                                    transition: "1.1s 0.2s width ease-in-out",
                                    width: `${skills.amount}`,
                                  }
                                : {
                                    width: 0,
                                  }
                            }
                          ></div>
                        )}
                      </IsVisible>
                      <div className="skill-name">{skills.skillName}</div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Fade>
        </div>
      </Section>
    </section>
  )
}

export default About
