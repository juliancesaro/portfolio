import React, { useState, useEffect } from "react";
import "./Projects.css";
import Project from "../project/Project";
import Section from "../section/Section";
import { Fade } from "react-reveal";
import ApolloClient, { gql } from "apollo-boost";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import bartiniLogo from "../../images/BartiniLogoWhiteNoShadow.png";

const useStyles = makeStyles((theme) => ({
  moreProjects: {
    "&": {
      margin: "20px auto",
      backgroundColor: "#0d7c7f",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "#0d6d70",
        boxShadow: "none",
      },
    },
    "& > *": {
      color: "white",
      padding: 4,
      fontSize: "15px",
      fontWeight: "500",
    },
  },
}));

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
  },
});
const query = gql`
  {
    user(login: "juliancesaro") {
      pinnedItems(first: 5, types: [REPOSITORY]) {
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
`;

const Projects = () => {
  const [githubProjects, setGithubProjects] = useState([]);
  const [loadProjectsError, setLoadProjectsError] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      const queryResult = await client.query({
        query,
      });
      setGithubProjects(queryResult.data.user.pinnedItems.edges);
      setLoadProjectsError(false);
    } catch (error) {
      console.log(error);
      setLoadProjectsError(true);
    }
  };

  if (loadProjectsError === false) {
    return (
      <section className="projects">
        <Section title="Projects">
          <div className="projects-content">
            <ul className="projects-list">
              <li>
                <Fade bottom duration={1000} distance="20px">
                  <a
                    className="project-link"
                    href="http://ec2-13-236-93-79.ap-southeast-2.compute.amazonaws.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bartini-card-wrapper">
                      <div className="bartini-card">
                        <div className="blue-bg"></div>
                        <div className="red-bg"></div>
                        <img
                          className="bartini-image"
                          src={bartiniLogo}
                          alt="bartini-logo"
                        />
                      </div>
                    </div>
                  </a>
                </Fade>
              </li>
              {githubProjects.map((project) => {
                return (
                  <li key={project.node.name}>
                    <Fade bottom duration={1000} distance="20px">
                      <Project project={project.node} type={"github"} />
                    </Fade>
                  </li>
                );
              })}
            </ul>
            <Fade bottom duration={1000} distance="20px">
              <div className="more-projects-wrapper">
                <a
                  className="project-link"
                  href={"https://github.com/juliancesaro"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={classes.moreProjects}
                    type="button"
                    variant="contained"
                  >
                    more projects
                  </Button>
                </a>
              </div>
            </Fade>
          </div>
        </Section>
      </section>
    );
  } else {
    return null;
  }
};

export default Projects;
