import React from "react";
import "../styles/Projects.css";
import DocSwitch from '../assets/images/DocSwitch.png';
import Artistry from '../assets/images/Artistry.jpg';
import TripNest from '../assets/images/TripNest.png';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>

      <div className="project-card">
        <h2 className="project-title">DocSwitch - A solution for every document conversion</h2>
        <div className="project-content">
          <div className="project-description">
            <p>
            DocSwitch is an MERN based document conversion platform that streamlines file format transformations with ease. Built using a modern tech stack, it leverages powerful third-party APIs like CloudConvert, iLovePDF, and Adobe PDF Services to support seamless conversion between PDF, Word, Excel, and more. The system automates backend processing and integrates with a responsive frontend for real-time interaction. It's designed for efficiency, reliability, and versatility in handling various document formats across platforms.for added variety.
            </p>
            <p><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, ILOVE_API, Adobe PDF Services API, Cloud_Convert API</p>
            <div className="project-buttons">
              <a href="https://github.com/Gopi-Kumar18/DocSwitch/" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="btn">View Live</a>
            </div>
          </div>
          <div className="project-image">
            <img src={DocSwitch} alt="DocSwitch file converter" />
          </div>
        </div>
      </div>

      <div className="project-card">
        <h2 className="project-title">Artistry</h2>
        <div className="project-content">
          <div className="project-description">
            <p>
            Artistry is a Laravel-based e-commerce platform dedicated to showcasing and selling diverse styles of paintings from artists around the world. Unlike traditional e-commerce sites, Artistry focuses exclusively on the art market, offering a curated collection of artwork at various price points. The platform provides a smooth browsing, purchasing, and user experience tailored for art enthusiasts and collectors.
            </p>
            <p><strong>Tech Stack:</strong> PHP, MySQL, HTML, CSS, Laravel FrameWork</p>
            <div className="project-buttons">
              <a href="https://github.com/Gopi-Kumar18/Artistry" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              <a href="#" className="btn">View Live</a>
            </div>
          </div>
          <div className="project-image">
            <img src={Artistry} alt="Artistry Paintings" />
          </div>
        </div>
      </div>

      <div className="project-card">
        <h2 className="project-title">TripNest - A Website for Best Tourism</h2>
        <div className="project-content">
          <div className="project-description">
            <p>
            TripNest is a responsive travel website built using React, HTML, CSS, and Bootstrap. The platform showcases a variety of tourism packages, helping users explore and book their ideal travel experiences. It highlights attractive pricing and frequently features unbeatable deals on popular destinations, making travel both exciting and budget-friendly.
            </p>
            <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, Node.js, Express, MongoDB</p>
            <div className="project-buttons">
              <a href="https://github.com/Gopi-Kumar18/TripNest_Tourism_App" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              <a href="#" className="btn">View Live</a>
            </div>
          </div>
          <div className="project-image">
            <img src={TripNest} alt="TripNest" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
