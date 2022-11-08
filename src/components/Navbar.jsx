import react from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <span id="upperNavContainer">
        <button id="homeBtn">Home</button>
      </span>
      <div id="navbar">
        I am Navbar
        <NavLink id="portfolioNavLink" to="portfolio">
          Portfolio
        </NavLink>
        {/* <img src="" alt="navImage"></img> */}
        <NavLink id="aboutNavLink" to="about">
          About
        </NavLink>
        <NavLink id="contactNavLink" to="contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
