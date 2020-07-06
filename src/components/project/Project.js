import React from "react"
import "./Project.css"
import Tags from "../tags/Tags"
import GOshop from "../../images/GOshop.png"

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
            </div>
          ) : name === "Vaporwave website" ? (
            <div className="Vaporwave-wrapper">
              <h1 class="Vaporwave">VaporWave</h1>
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
