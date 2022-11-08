import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home, Contact, Portfolio, About, Footer } from "./";

const Main = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
