import React from "react";
import "../styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-heading">Resume</h1>

      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <a href={`${process.env.PUBLIC_URL}/Gopi_k.pdf`} download className="download-btn">
          Download CV
        </a>
      </div>
      <div className="resume-section">
        <div className="resume-card">
          <h3>2023 - 2026</h3>
          <p><strong>B.Tech in Computer Science & Engineering</strong></p>
          <p>Lovely Professional University, Phagwara</p>
          <p>CGPA: 6.93/10</p>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Skills</h2>
        <div className="resume-card">
          <ul>
            <li><strong>Languages:</strong> Java, C++, JavaScript, HTML, CSS, PHP</li>
            <li><strong>Frameworks:</strong> React, Express, BootStrap, SpringBoot(Basic)</li>
            <li><strong>Databases:</strong> MongoDB, MySQL</li>
            <li><strong>Tools & Platforms:</strong> Git, GitHub, Figma, Docker, Jenkins</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Projects</h2>
        <div className="resume-card">
          <ul>
            <li><strong>DocSwitch - File Converter Website:</strong> React, MongoDB</li>
            <li><strong>Artistry - Paintings Portals website:</strong> PHP, MySQL</li>
            <li><strong>FindURNest – Online Rental Booking:</strong> MERN Stack</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Certifications</h2>
        <div className="resume-card">
          <ul>
            <li>HTML, CSS, and Javascript for Web Developers from Coursera</li>
            <li>Server side JavaScript with Node.js from Coursera</li>
            <li>Building Web Applications in PHP from Coursera</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Problem Solving</h2>
        <div className="resume-card">
          <p>Active on <strong>LeetCode</strong>, <strong>GeeksforGeeks Practice</strong>, and <strong>HackerRank</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Resume;