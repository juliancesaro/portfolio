import React from "react"
import "./Project.css"
import Tags from "../tags/Tags"
import GOshop from "../../images/GOshop.png"

const Project = ({ link, name, tags, about, setFilter }) => {
  // If the project link is empty, the project is "coming soon"
  return (
    <div>
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
            <img className="GOshop" src={GOshop} alt={name} width="200px"></img>
          ) : name === "Vaporwave website" ? (
            <h1 class="Vaporwave">VaporWave</h1>
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
