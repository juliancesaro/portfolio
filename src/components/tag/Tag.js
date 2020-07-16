import React from "react"
import "./Tag.css"

const Tag = ({ tagName }) => {
  return (
    <div className="tag">
      <p className="tagname">{tagName}</p>
    </div>
  )
}

export default Tag
