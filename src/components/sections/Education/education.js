import React from 'react';
import './education.css';
import beImage from './be.png'; // Image for University
import mithibai from './mithibai.jpg'; // Image for College

const Education = () => {
  return (
    <div id="education" className="education-section-container"> {/* Added id="education" */}
      <h2 className="section-title">
        <span className="highlight"></span> Education
      </h2>
      <button className="view-all-button">
        <span>View All Education</span> ➔
      </button>

      {/* University Section */}
      <div className="content-wrapper">
        <div className="image-container">
          <img src={beImage} alt="University of Mumbai" className="education-image" />
        </div>
        <div className="details-container">
          <div className="pill-container">
            <span className="pill">React</span>
            <span className="pill">JavaScript</span>
            <span className="pill">HTML/CSS</span>
          </div>
          <h3 className="education-title">University of Mumbai</h3>
          <p className="education-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="subjects-list">
            <li>Advanced Algorithms</li>
            <li>Data Structures</li>
            <li>Machine Learning</li>
          </ul>
          <button className="view-details-button">
            <span>View Details</span> ➔
          </button>
        </div>
      </div>

      {/* College Section */}
      <div className="content-wrapper">
        <div className="image-container">
          <img src={mithibai} alt="Mithibai College" className="education-image" />
        </div>
        <div className="details-container">
          <div className="pill-container">
            <span className="pill">Physics</span>
            <span className="pill">Chemistry</span>
            <span className="pill">Mathematics</span>
          </div>
          <h3 className="education-title">Mithibai College</h3>
          <p className="education-description">
            Completed Higher Secondary education with a focus on science subjects including physics, chemistry, and mathematics.
          </p>
          <ul className="subjects-list">
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Mathematics</li>
          </ul>
          <button className="view-details-button">
            <span>View Details</span> ➔
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;
