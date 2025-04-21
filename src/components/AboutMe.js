import React from "react";
import { Link } from "react-router-dom";
import MyImage from "../assets/images/MyImageGibli.png";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <img
          src={MyImage}
          alt="About Me"
          className="about-image"
        />
      </div>
      <div className="about-right">
        <h1>About Me</h1>
        <p>
          Hi! I'm Manikanta Dangeti, a passionate full-stack developer who loves building web
          applications that solve real-world problems. I’m enthusiastic about technology and
          constantly learning new tools and frameworks to improve my craft.
        </p>
        <p>
          I specialize in the MERN stack, and I have experience creating clean UI designs,
          integrating with APIs, and managing databases. Apart from coding, I enjoy solving puzzles
          and diving into competitive programming challenges.
        </p>
        <div className="about-buttons">
          <Link to="/resume" className="about-btn">Resume</Link>
          <Link to="/projects" className="about-btn">Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
