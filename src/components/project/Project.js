import React from "react"
import "./Project.css"
import Tags from "../tags/Tags"
import GOshop from "../../images/GOshop.png"
import GOshop_small from "../../images/GOshop-small.png"

const Project = ({ link, name, tags, about, setFilter }) => {
  // If the project link is empty, the project is "coming soon"
  return (
    <div className="project-card">
      {link.length === 0 ? (
        <p className="content-link">{name} (coming soon):</p>
      ) : (
        <a
          className="project-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
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
        </a>
      )}
      <Tags tagNames={tags} setFilter={setFilter} />
      <p>{about}</p>
    </div>
  )
}

export default Project
