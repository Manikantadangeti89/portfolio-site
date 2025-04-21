import React from "react";
import "../styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-heading">Resume</h1>

      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <a href={`${process.env.PUBLIC_URL}/Manikanta_Dangeti.pdf`} download className="download-btn">
          Download CV
        </a>
      </div>
      <div className="resume-section">
        <div className="resume-card">
          <h3>2021 - 2025</h3>
          <p><strong>B.Tech in Computer Science & Engineering</strong></p>
          <p>Lovely Professional University, Phagwara</p>
          <p>CGPA: 7.6/10</p>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Skills</h2>
        <div className="resume-card">
          <ul>
            <li><strong>Languages:</strong> Java, C++, JavaScript, HTML, CSS, PHP</li>
            <li><strong>Frameworks:</strong> React, Express</li>
            <li><strong>Databases:</strong> MongoDB, MySQL</li>
            <li><strong>Tools & Platforms:</strong> Node.js, Git, GitHub, Figma</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">Projects</h2>
        <div className="resume-card">
          <ul>
            <li><strong>Mom's Note – Recipe Sharing Website:</strong> React, MongoDB</li>
            <li><strong>Blood Donation Management System:</strong> PHP, MySQL</li>
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
        <h2 className="section-title">Competitive Programming</h2>
        <div className="resume-card">
          <p>Active on <strong>LeetCode</strong>, <strong>GeeksforGeeks Practice</strong>, and <strong>CodeChef</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Resume;