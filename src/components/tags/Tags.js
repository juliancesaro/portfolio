import React from "react"
import "./Tags.css"
import Tag from "../tag/Tag"

const Tags = ({ tagNames }) => {
  return (
    <ul className="tags">
      {tagNames.map((tag) => (
        <li key={tag}>
          <Tag tagName={tag} />
        </li>
      ))}
    </ul>
  )
}

export default Tags
