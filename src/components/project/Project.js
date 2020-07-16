import React from "react"
import "./Project.css"
import Tags from "../tags/Tags"
import GOshop from "../../images/GOshop.png"
import GOshop_small from "../../images/GOshop-small.png"

const Project = ({ link, name, tags, about }) => {
  // If the project link is empty, the project is "coming soon"
  return (
    <div className="project-card-wrapper">
      {link.length === 0 ? (
        <div className="project-card-dead">
          <p className="content-link">{name} (coming soon):</p>
          <Tags tagNames={tags} />
          <p>{about}</p>
        </div>
      ) : (
        <a
          className="project-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-card">
            {name === "GOshop" ? (
              <div className="GOshop-wrapper">
                <img
                  className="GOshop"
                  src={GOshop}
                  alt={name}
                  width="150px"
                ></img>
                <img
                  className="GOshop_small"
                  src={GOshop_small}
                  alt={name}
                  width="80px"
                ></img>
              </div>
            ) : name === "Vaporwave website" ? (
              <div className="Vaporwave-wrapper">
                <h1 className="Vaporwave">VaporWave</h1>
              </div>
            ) : name === "Conway's Game of Life" ? (
              <div className="Conway-wrapper">
                <h1 className="game-of-life">Conway's Game of Life</h1>
              </div>
            ) : (
              <p className="content-link">{name}:</p>
            )}
            <Tags tagNames={tags} />
            <p>{about}</p>
          </div>
        </a>
      )}
    </div>
  )
}

export default Project
