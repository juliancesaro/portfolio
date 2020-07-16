import React from "react"
import "./Projects.css"
import Project from "../project/Project"
import data from "../../data/projects.json"
import Section from "../section/Section"
import { Fade } from "react-reveal"

const Projects = () => {
  const projects = data.projects

  return (
    <section className="projects">
      <Section title="Projects">
        <div className="projects-content">
          <ul className="projects-list">
            {projects.map((project) => (
              <li key={project.name}>
                <Fade bottom duration={1000} distance="20px">
                  <Project
                    link={project.link}
                    name={project.name}
                    tags={project.tags}
                    about={project.about}
                  />
                </Fade>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </section>
  )
}

export default Projects
