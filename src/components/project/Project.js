import React from "react"
import Tags from "../tags/Tags"

const Project = ({ link, name, tags, about, setFilter }) => {
  // If the project link is empty, the project is "coming soon"
  return (
    <div>
      {link.length === 0 ? (
        <p className="content-link">{name} (coming soon):</p>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <p className="content-link">{name}:</p>
        </a>
      )}
      <Tags tagNames={tags} setFilter={setFilter} />
      <p>{about}</p>
    </div>
  )
}

export default Project
