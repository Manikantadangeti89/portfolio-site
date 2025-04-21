import React from "react";
import "../styles/Certifications.css";
import HTMLCSSJS from "../assets/certifications/HTMLCSSJS.png";
import Nodejs from "../assets/certifications/Nodejs.png";
import PHP from "../assets/certifications/PHP.png";
import DSA from "../assets/certifications/DSA.png";
import CloudComputing from "../assets/certifications/CloudComputing.png";

const Certifications = () => {
  const certificates = [
    {
      image: HTMLCSSJS,
      name: "HTML, CSS, and Javascript for Web Developers - Coursera",
    },
    {
      image: Nodejs,
      name: "Server side JavaScript with Node.js - Coursera",
    },
    {
      image: PHP,
      name: "Building Web Applications in PHP - Coursera",
    },
    {
      image: CloudComputing,
      name: "Cloud Computing - NPTEL",
    },
    {
      image: DSA,
      name: "LPU - Data Structures: Deep Dive Using C - E-Box",
    },
  ];

  return (
    <div className="certifications-container">
      <h1 className="certifications-heading">Certifications</h1>
      {certificates.map((cert, index) => (
        <div className="cert-card" key={index}>
          <div className="cert-image">
            <img src={cert.image} alt={`Certificate ${index + 1}`} />
          </div>
          <div className="cert-name">
            <h2>{cert.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
