import React from "react";
import "../styles/Projects.css";
import momNoteImg from '../assets/images/momsnote.avif';
import bloodImg from '../assets/images/bdms1.jpg';
import rentalImg from '../assets/images/findUrNest2.jpg';


const Projects = () => {
  const p1 = {
    title : "Mom's Note – Recipe Sharing Website",
    description : `A feature-rich recipe sharing platform designed for food lovers to explore, upload, and save their favorite recipes.
              Users can browse trending recipes from an external API as well as community-submitted ones stored in a MongoDB database.
              It offers a sleek UI with filtering, search functionality, and real-time form validation for submissions.
              The design mimics a mom’s guidance, offering helpful cooking notes and tips throughout.
              Responsive and mobile-friendly with React routing, reusable components, and state management.
              Built using MERN stack with integration of the Spoonacular API for added variety.`,
    techstack : " React, Node.js, Express, MongoDB, Spoonacular API"
  }
  const p2 = {
    title : "Blood Donation Management System",
    description : `This web application streamlines the process of managing blood donations and inventory in hospitals and blood banks.
              Admins can register donors, monitor blood availability by type, and view patient requests in real-time.
              It has a secure login system, dynamic tables, and alerts for low inventory levels.
              The UI is clean, intuitive, and responsive with clear call-to-actions for all users.
              Developed using core PHP and MySQL, with structured backend logic for scalability.
              Ideal for small clinics or NGOs to digitally manage blood drives and donations.`,
    techstack : " PHP, MySQL, HTML, CSS"
  }
  const p3 = {
    title : "FindURNest – Rental Booking Website",
    description : `A fully functional rental booking website allowing users to discover and reserve properties across different locations.
              Includes user authentication, property filtering, booking confirmations, and owner dashboards.
              Built with modern UI/UX principles ensuring ease of navigation and responsiveness on all devices.
              Utilizes RESTful APIs to handle backend operations like user booking, listings, and feedback.
              Clean database structure to manage users, listings, and booking history with MongoDB.
              An ideal project to showcase full-stack proficiency using Node.js, Express, and MongoDB.`,
    techstack : " HTML, CSS, JavaScript, Node.js, Express, MongoDB"
  }


  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>

      <div className="project-card">
        <h2 className="project-title">{p1.title}</h2>
        <div className="project-content">
          <div className="project-description">
            <p>{p1.description}</p>
            <p><strong>Tech Stack:</strong>{p1.techstack}</p>
            <div className="project-buttons">
              <a href="https://github.com/Manikantadangeti89/Mom-s-Note---Recipe-Sharing" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              <a href="https://manikantadangeti89.github.io/Mom-s-Note---Recipe-Sharing/" target="_blank" rel="noopener noreferrer" className="btn">View Live</a>
            </div>
          </div>
          <div className="project-image">
            <img src={momNoteImg} alt="Mom's Note" />
          </div>
        </div>
      </div>

      <div className="project-card">
        <h2 className="project-title">{p2.title}</h2>
        <div className="project-content">
          <div className="project-description">
            <p>{p2.description}</p>
            <p><strong>Tech Stack:</strong>{p2.techstack}</p>
            <div className="project-buttons">
              <a href="https://github.com/Manikantadangeti89/blood-donation-management-system" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              <a href="#" className="btn">View Live</a>
            </div>
          </div>
          <div className="project-image">
            <img src={bloodImg} alt="Blood Donation System" />
          </div>
        </div>
      </div>

      <div className="project-card">
        <h2 className="project-title">{p3.title}</h2>
        <div className="project-content">
          <div className="project-description">
            <p>{p2.description}</p>
            <p><strong>Tech Stack:</strong>{p3.techstack}</p>
            <div className="project-buttons">
              <a href="https://github.com/Manikantadangeti89/FindURNest" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              <a href="#" className="btn">View Live</a>
            </div>
          </div>
          <div className="project-image">
            <img src={rentalImg} alt="FindURNest" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
