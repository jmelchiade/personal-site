import react from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {};

<div>
  <h1>Hello</h1>
  <NavLink id="portfolioLink" to="portfolio">
    Portfolio
  </NavLink>

  <NavLink id="aboutLink" to="about">
    About
  </NavLink>

  <NavLink id="homeLink" to="home">
    Home
  </NavLink>
</div>;

export default Navbar;
