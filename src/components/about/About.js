import React from "react"
import "./About.css"
import IsVisible from "react-is-visible"
import Section from "../section/Section"
import { Fade } from "react-reveal"

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
                I'm a fourth-year software engineering student studying at
                Macquarie University. I'm also an aspiring full-stack developer.
              </p>
              <p>
                I've always been passionate about technology, which is why I
                decided to start studying software engineering in 2017. Since
                then, I've learned a lot and hope to keep learning as
                opportunities present themselves.
              </p>
              <p>
                I created this website for you to view some of my personal
                projects and read a bit about myself. View away!
              </p>
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
