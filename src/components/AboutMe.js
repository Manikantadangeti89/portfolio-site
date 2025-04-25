import React from "react";
import { Link } from "react-router-dom";
import MyImage from "../assets/images/MyImage.jpg";
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
        {/* <p>
          Hi! I'm Manikanta Dangeti, a passionate full-stack developer who loves building web
          applications that solve real-world problems. I’m enthusiastic about technology and
          constantly learning new tools and frameworks to improve my craft.
        </p>
        <p>
          I specialize in the MERN stack, and I have experience creating clean UI designs,
          integrating with APIs, and managing databases. Apart from coding, I enjoy solving puzzles
          and diving into competitive programming challenges.
        </p> */}
        <p>Hi, I’m Manikanta Dangeti — a full-stack developer who’s as comfortable writing backend logic as 
            I am crafting intuitive frontends.My journey started with curiosity, grew through consistency, 
            and continues with a deep hunger to build meaningful digital experiences.

            <br/><br/>Over the years, I’ve built a range of projects — from recipe-sharing platforms to blood donation systems
            to rental websites — not because I had to, but because I wanted to create something real. 
            I’m fluent in React, Node.js, Express, MongoDB, Java, and SQL, and I’m always expanding my toolkit.

            <br/><br/>I value clean code, user-focused design, and continuous iteration.  
            But more than that, I value growth through action, even when it's messy.
            I'm not here just to get hired. I'm here to build, share, and make a mark.  
            If you're looking for someone who blends creative energy with technical execution — let's connect.

            <br/><br/>📍 Always building. Always learning. Always leveling up.</p>
        <div className="about-buttons">
          <Link to="/resume" className="about-btn">Resume</Link>
          <Link to="/projects" className="about-btn">Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
