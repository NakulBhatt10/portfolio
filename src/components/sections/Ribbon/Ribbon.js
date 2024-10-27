import React from 'react';
import './ribbon.css';
import courseraLogo from './Meta.png'; // Replace with your logo image paths
import anotherLogo from './Michigan.png'; // Add more logos as needed
import IBM from './IBM.png';

const Ribbon = () => {
  return (
    <div className="ribbon-container">
      <div className="ribbon-scroll">
        <img src={courseraLogo} alt="Coursera Certification" className="ribbon-logo" />
        <img src={anotherLogo} alt="Another Certification" className="ribbon-logo" />
        <img src={IBM} alt="Another Certification" className="ribbon-logo" />

        <span className="ribbon-delimiter">✦</span>

        {/* Repeat the logos for smooth scrolling */}
        <img src={courseraLogo} alt="Coursera Certification" className="ribbon-logo" />
        <img src={anotherLogo} alt="Another Certification" className="ribbon-logo" />
        <img src={IBM} alt="Another Certification" className="ribbon-logo" />

        <span className="ribbon-delimiter">✦</span>
      </div>
    </div>
  );
};

export default Ribbon;
