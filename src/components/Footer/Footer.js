import "./Footer.css";
import React from "react";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";

/* Component displays the bottom section  */

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-images-container">
        <img className="image-icons" src={facebook} alt="" />
        <img className="image-icons" src={twitter} alt="" />
      </div>
    </div>
  );
};

export default Footer;
