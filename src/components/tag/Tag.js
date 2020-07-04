import React from "react"
import "./Tag.css"

const Tag = ({ tagName, setFilter }) => {
  return (
    <div className="tag">
      <p className="tagname" onClick={() => setFilter(tagName)}>
        {tagName}
      </p>
    </div>
  )
}

export default Tag
