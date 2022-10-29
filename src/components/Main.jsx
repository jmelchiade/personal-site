import react from "react";
import ReactDOM from "react-dom";
import { Navbar, Contact, Portfolio, About, Footer } from "./";

const Main = () => {
  return (
    <div className="container">
      <h1>Hi, I'm Jenniffer.</h1>
      <div className="footer-img">
        <img src="../images/LinkedIn" alt="LinkedIn" />
        <img src="../images/LinkedIn" alt="Twitter" />
        <img src="../images/Facebook" alt="Facebook" />
        <img src="../images/Twitter" alt="Instagram" />
        <img src="../images/GitHub" alt="GitHub" />
      </div>
      <Navbar />
      <Contact />
      <Portfolio />
      <About />
      <Footer />
    </div>
  );
};

export default Main;
