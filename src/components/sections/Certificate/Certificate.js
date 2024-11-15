import React from 'react';
import './certificate.css';
import newCertificate from './React.png'; // Adjusted path to use forward slashes
import uiUxIcon from './one.png'; // Placeholder for UI/UX icon
import appDesignIcon from './one.png'; // Placeholder for App Design icon
import webDesignIcon from './two.png'; // Placeholder for Web Design icon

const Certificate = () => {
  return (
    <div id="certificate" className="certificate-section-container"> {/* Added id="certificate" */}
      <h2 className="section-title">
        <span className="highlight">Certificates</span>
      </h2>

      <div className="certificate-cards">
        <div className="certificate-card">
          <img src={newCertificate} alt="Certificate" className="certificate-image" />
          <h3 className="certificate-title">React Basics</h3>
          <p className="certificate-description">
            Learned React basics, including components, state management, and props.
          </p>
          <a href="https://coursera.org/share/4975e16557d5970a58a9eae553899792" className="learn-more">
            Learn more ➔
          </a>
        </div>

        <div className="certificate-card">
          <div className="certificate-icon">
            <img src={appDesignIcon} alt="Backend" />
          </div>
          <h3 className="certificate-title">Python for Data Science, AI & Development</h3>
          <p className="certificate-description">
            Learned Python essentials for data science, AI, and development.
          </p>
          <a href="https://coursera.org/share/50870ad30fadb003e96e41d1e95d795a" className="learn-more">
            Learn more ➔
          </a>
        </div>

        <div className="certificate-card">
          <div className="certificate-icon">
            <img src={webDesignIcon} alt="Interactivity with JavaScript" />
          </div>
          <h3 className="certificate-title"> Interactivity with JavaScript</h3>
          <p className="certificate-description">
            Mastered DOM manipulation, event handling, and user interactions with JavaScript.
          </p>
          <a href="https://coursera.org/share/c67cfa52903e525b604132d576994d05" className="learn-more">
            Learn more ➔
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
