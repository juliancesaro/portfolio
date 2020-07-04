import React from "react"
import "./Tags.css"
import Tag from "../tag/Tag"

const Tags = ({ tagNames, setFilter }) => {
  return (
    <ul className="tags">
      {tagNames.map((tag) => (
        <li key={tag}>
          <Tag tagName={tag} setFilter={setFilter} />
        </li>
      ))}
    </ul>
  )
}

export default Tags
