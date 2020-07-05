import React, { useState } from "react"
import "./TopButton.css"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"
import { Link } from "react-scroll"

const TopButton = () => {
  const [topButtonVisible, setTopButtonVisible] = useState(false)
  // When the user scrolls down 20px from the top of the document, show the button
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 750 ||
      document.documentElement.scrollTop > 750
    ) {
      setTopButtonVisible(true)
    } else {
      setTopButtonVisible(false)
    }
  }
  window.onscroll = function () {
    scrollFunction()
  }
  window.onload = function () {
    scrollFunction()
  }
  return (
    <Link
      activeClass="active"
      to="home"
      spy={true}
      smooth={true}
      duration={500}
    >
      <button
        className={"topButton " + (topButtonVisible ? "on" : "off")}
        title="Go to top"
      >
        <i aria-hidden="true">
          <ArrowUpwardIcon />
        </i>
      </button>
    </Link>
  )
}

export default TopButton
