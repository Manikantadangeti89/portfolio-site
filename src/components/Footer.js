import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">Designed and Developed by Manikanta Dangeti</p>
      <div className="footer-icons">
        <a href="https://www.instagram.com/manikantadangeti89" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/Manikantadangeti89" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/manikantadangeti/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p className="footer-copyright">© {year} MK. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
