import React, { useState, useEffect } from "react"
import "./Projects.css"
import Project from "../project/Project"
import Section from "../section/Section"
import { Fade } from "react-reveal"
import ApolloClient, { gql } from "apollo-boost"

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    })
  },
})
const query = gql`
  {
    user(login: "juliancesaro") {
      pinnedItems(first: 4, types: [REPOSITORY]) {
        totalCount
        edges {
          node {
            ... on Repository {
              name
              description
              url
              id
              diskUsage
              languages(first: 2, orderBy: { field: SIZE, direction: DESC }) {
                nodes {
                  name
                  color
                }
              }
              repositoryTopics(first: 3) {
                nodes {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const Projects = () => {
  const [githubProjects, setGithubProjects] = useState([])
  const [loadProjectsError, setLoadProjectsError] = useState(false)

  useEffect(() => {
    getProjects()
  }, [])

  const getProjects = async () => {
    try {
      const queryResult = await client.query({
        query,
      })
      setGithubProjects(queryResult.data.user.pinnedItems.edges)
    } catch (error) {
      console.log(error)
      setLoadProjectsError(true)
    }
  }

  if (!loadProjectsError) {
    return (
      <section className="projects">
        <Section title="Projects">
          <div className="projects-content">
            <ul className="projects-list">
              {githubProjects.map((project) => (
                <li key={project.node.name}>
                  <Fade bottom duration={1000} distance="20px">
                    <Project project={project.node} />
                  </Fade>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </section>
    )
  } else {
    return null
  }
}

export default Projects
