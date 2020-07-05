import React, { useState } from "react"
import "./Projects.css"
import Project from "../project/Project"
import Tag from "../tag/Tag"
import data from "../../data/projects.json"
import Section from "../section/Section"

const Projects = () => {
  const [filter, setFilter] = useState("")
  const projects = data.projects

  const projectsToShow =
    filter.length === 0
      ? projects
      : projects.filter((project) => project.tags.includes(filter))
  return (
    <section className="projects">
      <Section title="Projects">
        <div className="projects-content">
          <div className="alltag">
            <Tag tagName={"All"} setFilter={() => setFilter("")} />
          </div>
          <ul className="projects-list">
            {projectsToShow.map((project) => (
              <li key={project.name}>
                <Project
                  link={project.link}
                  name={project.name}
                  tags={project.tags}
                  about={project.about}
                  setFilter={setFilter}
                />
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </section>
  )
}

export default Projects
