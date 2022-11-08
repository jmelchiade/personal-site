import react from "react";
import FortWorth from "../ForthWorth.JPG";

const aboutImg = require("../ForthWorth.JPG");
const About = () => {
  return (
    <div id="navbar">
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
      return <img src={FortWorth} alt="FortWorth" />;
    </div>
  );
};

export default About;
