import React from "react";
import "./About.css";
import Section from "../section/Section";

const About = () => {
  const softwareSkills = [
    {
      skillName: "html-5",
      amount: "95%",
    },
    {
      skillName: "css3",
      amount: "85%",
    },
    {
      skillName: "Java",
      amount: "85%",
    },
    {
      skillName: "JavaScript",
      amount: "90%",
    },
    {
      skillName: "reactjs",
      amount: "95%",
    },
    {
      skillName: "nodejs",
      amount: "80%",
    },
    {
      skillName: "sql",
      amount: "85%",
    },
    {
      skillName: "MongoDB",
      amount: "60%",
    },
    {
      skillName: "python",
      amount: "55%",
    },
  ];
  return (
    <section className="about">
      <Section title="About">
        <div className="about-content">
          <div className="about-text">
            <h2>Who am I?</h2>
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
          <div className="skills-wrapper">
            <h2>Skills</h2>
            <ul className="skills">
              {softwareSkills.map((skills) => {
                return (
                  <li className="skill-bar-wrapper" key={skills.skillName}>
                    <div
                      className="skill-bar"
                      style={{
                        width: `${skills.amount}`,
                      }}
                    ></div>
                    <div className="skill-name">{skills.skillName}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>
    </section>
  );
};

export default About;
