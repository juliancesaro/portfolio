import React from "react"
import "./Tags.css"
import Tag from "../tag/Tag"

const Tags = ({ tags }) => {
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li key={tag.topic.name}>
          <Tag tagName={tag.topic.name} />
        </li>
      ))}
    </ul>
  )
}

export default Tags
