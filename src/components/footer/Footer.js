import React from "react";
import "./Footer.css";
import emoji from "react-easy-emoji";

const Footer = () => {
  return (
    <footer>
      <p className="copyright">Made with {emoji("❤️")} by Julian Cesaro</p>
    </footer>
  );
};

export default Footer;
