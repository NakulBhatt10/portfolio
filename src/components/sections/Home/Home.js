// components/Home.js
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './home.css';
import myPhoto from './myPhoto.png';
import insta from './instagram-logo.png';
import linkedin from './LinkedIn_logo_initials.png'
import gmail from './gmail.png'
import github from './github.png'
import leetcode from './leetcode.png'



function scatterIcons() {
  const iconsContainer = document.querySelector('.icons-container');
  const icons = document.querySelectorAll('.app-icon');

  // Make icons visible
  iconsContainer.style.display = 'block';
  iconsContainer.style.opacity = 1;

  icons.forEach((icon, index) => {
    // Generate random angles and increased distances for a wider scatter effect
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 300 + 100; // Increased distance range

    // Calculate new position for scatter effect and scale it up
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    // Apply the styles for the animation once with scale
    icon.style.transform = `translate(${x}px, ${y}px) scale(1.5)`; // Scale up to 1.5x size
    icon.style.opacity = 1;

    // Add a delay for a staggered effect
    icon.style.transitionDelay = `${index * 0.1}s`;
  });

  // Remove the onclick event to prevent re-triggering
  document.querySelector('.contact-button').onclick = null;
}

const Home = () => {
  useEffect(() => {
    const options = {
      strings: ['Frontend', 'Software', 'Backend', 'Full Stack'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed('#typed-text', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <p className="home-greeting">
          <h1>Hello</h1>
        </p>
        <h1 className="home-title">
          I’m <span className="highlight">Nakul</span> <br />
          <span id="typed-text"></span>Developer
        </h1>
      </div>
      <div className="home-image">
        <img src={myPhoto} alt="Nakul" />
      </div>
      <div className="contact-button-container">
        <a href="#contact" className="contact-button" onClick={scatterIcons}>
          CONNECT WITH ME
        </a>
        <div className="icons-container">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener">
            <img src={linkedin} className="app-icon" alt="LinkedIn" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer noopener">
            <img src={insta} className="app-icon" alt="Instagram" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer noopener">
            <img src={github} className="app-icon" alt="GitHub" />
          </a>
          <a href="https://leetcode.com" target="_blank" rel="noreferrer noopener">
            <img src={leetcode} className="app-icon" alt="LeetCode" />
          </a>
          <a href="mailto:your-email@example.com" target="_blank" rel="noreferrer noopener">
            <img src={gmail} className="app-icon" alt="Email" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
