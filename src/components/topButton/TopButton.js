import React from "react";
import "./TopButton.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Link } from "react-scroll";

const TopButton = () => {
  // When the user scrolls down 20px from the top of the document, show the button
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 800
    ) {
      document.getElementById("topButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
    }
  };
  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  }; //To make sure that this button is not visible at starting.
  // When the user clicks on the button, scroll to the top of the document
  return (
    <Link
      activeClass="active"
      to="home"
      spy={true}
      smooth={true}
      duration={500}
    >
      <button id="topButton" title="Go to top">
        <i aria-hidden="true">
          <ArrowUpwardIcon fontSize="medium" />
        </i>
      </button>
    </Link>
  );
};

export default TopButton;
