import React from "react";
import "../styles/Certifications.css";
import Board_Inf from "../assets/certifications/Board_Inf.jpg";
import NPTEL from "../assets/certifications/NPTEL.png";
import IBM_Devops from "../assets/certifications/IBM_Devops.png";
import HackerRank from "../assets/certifications/HackerRank.png";
import HTMLCSSJS from "../assets/certifications/HTMLCSSJS.png";

const Certifications = () => {
  const certificates = [
    {
      image: Board_Inf,
      name: "Core And Advance Java - Board_Infinity",
    },
    {
      image: NPTEL,
      name: "Cloud Computing - NPTEL",
    },
    {
      image: IBM_Devops,
      name: "IBM DevOps and Software Engineering - Coursera",
    },
    {
      image: HackerRank,
      name: "Problem Solving - HackerRank",
    },
    {
      image: HTMLCSSJS,
      name: "HTML, CSS, and JavaScript for Web Developers - Coursera",
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
