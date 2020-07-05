import React from "react"
import "./About.css"
import Section from "../section/Section"

const About = () => {
  const softwareSkills = [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
  ]
  return (
    <section className="about">
      <Section title="About">
        <div className="about-content">
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>I'm Julian.</p>
            <p>
              I'm currently a fourth-year software engineering student at
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
          <div className="software-skills-main-div">
            <h3>Skills</h3>
            <ul className="dev-icons">
              {softwareSkills.map((skills) => {
                return (
                  <li className="software-skill-inline" name={skills.skillName}>
                    <i className={skills.fontAwesomeClassname}></i>
                    <p>{skills.skillName}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Section>
    </section>
  )
}

export default About
