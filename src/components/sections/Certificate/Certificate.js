import React from 'react';
import './certificate.css';
import uiUxIcon from './one.png'; // Placeholder for UI/UX icon
import appDesignIcon from './one.png'; // Placeholder for App Design icon
import webDesignIcon from './two.png'; // Placeholder for Web Design icon

const Certificate = () => {
  return (
    <div className="certificate-section-container">
      <h2 className="section-title">
        <span className="highlight">My</span> Certificates
      </h2>

      <div className="certificate-cards">
        <div className="certificate-card">
          <div className="certificate-icon">
            <img src={uiUxIcon} alt="UI/UX Design" />
          </div>
          <h3 className="certificate-title">UI/UX Design</h3>
          <p className="certificate-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <a href="#" className="learn-more">Learn more ➔</a>
        </div>

        <div className="certificate-card">
          <div className="certificate-icon">
            <img src={appDesignIcon} alt="App Design" />
          </div>
          <h3 className="certificate-title">App Design</h3>
          <p className="certificate-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <a href="#" className="learn-more">Learn more ➔</a>
        </div>

        <div className="certificate-card">
          <div className="certificate-icon">
            <img src={webDesignIcon} alt="Web Design" />
          </div>
          <h3 className="certificate-title">Web Design</h3>
          <p className="certificate-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <a href="#" className="learn-more">Learn more ➔</a>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
