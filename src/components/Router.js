import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Achievement from "./Achievement";
import Resume from "./Resume";
import Contact from "./Contact";

const Router = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/certifications" element={<Certifications/>}/>
            <Route path="/achievment" element={<Achievement/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}

export default Router;