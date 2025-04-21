import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css';
const NavBar=()=>{
    return(
        <div className="navbar">
            <div className="logo">Mk</div>
            <ul className="navlinks">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutme">AboutMe</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/certifications">Certifications</Link></li>
                <li><Link to="/achievment">Achievements</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}
export default NavBar;