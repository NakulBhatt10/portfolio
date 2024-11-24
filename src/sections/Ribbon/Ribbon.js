import React from 'react';
import './ribbon.css';
import courseraLogo from './Meta.png';
import anotherLogo from './Michigan.png';
import IBM from './IBM.png';

const Ribbon = () => {
  const logos = [courseraLogo, anotherLogo, IBM];

  return (
    <div className="ribbon-container">
      <div className="ribbon-scroll">
        {logos.map((logo, index) => (
          <div key={`logo-${index}`} className="ribbon-item">
            <img src={logo} alt="Certification Logo" className="ribbon-logo" />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`} className="ribbon-item">
            <img src={logo} alt="Certification Logo" className="ribbon-logo" />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`} className="ribbon-item">
            <img src={logo} alt="Certification Logo" className="ribbon-logo" />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`} className="ribbon-item">
            <img src={logo} alt="Certification Logo" className="ribbon-logo" />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`} className="ribbon-item">
            <img src={logo} alt="Certification Logo" className="ribbon-logo" />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`} className="ribbon-item">
            <img src={logo} alt="Certification Logo" className="ribbon-logo" />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`} className="ribbon-item">
            <img src={logo} alt="Certification Logo" className="ribbon-logo" />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`} className="ribbon-item">
            <img src={logo} alt="Certification Logo" className="ribbon-logo" />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`} className="ribbon-item">
            <img src={logo} alt="Certification Logo" className="ribbon-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ribbon;
