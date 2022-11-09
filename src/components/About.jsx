import React from "react";
import aboutImg from "./FortWorth.JPG";

const About = () => {
  return (
    <div id="navbar">
      <img src={aboutImg} alt="Fort Worth" id="aboutImg"></img>
      <h1>About Needs Routing</h1>
      <h2>
        Fullstack Software Developer.
        <ol>
          Apps, Languages and Skills:
          <li>
            Node.js, React.Js, PostgreSQL, Express, Javascript, Python, HTML,
            CSS
          </li>
          <li>Cloud Computing: AWS Solutions Architect</li>
        </ol>
      </h2>
      <h4>
        University studies in International Relations, Agricultural Sciences,
        Landscape Architecture & Planning.
      </h4>
      <img src={aboutImg} />;
    </div>
  );
};

export default About;
