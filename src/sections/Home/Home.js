import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './home.css';
import myPhoto from './myPhoto.png';
import insta from './download.jpg';
import linkedin from './LinkedIn_logo_initials.png';
import gmail from './gmail.png';
import github from './github.png';
import leetcode from './leetcode.png';

function scatterIcons() {
  const iconsContainer = document.querySelector('.icons-container');
  const icons = document.querySelectorAll('.app-icon');

  iconsContainer.style.display = 'block';
  iconsContainer.style.opacity = 1;

  icons.forEach((icon, index) => {
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 300 + 100;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    icon.style.transform = `translate(${x}px, ${y}px) scale(1.2)`;
    icon.style.opacity = 1;
    icon.style.transitionDelay = `${index * 0.1}s`;
  });

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
        <div className="home-text-wrapper">
          <h1 className="home-title">
            I’m <span className="highlight">Nakul</span> <br />
            <span id="typed-text" className="typed-text"></span> Developer
          </h1>
        </div>
      </div>
      <div className="home-image">
        <img src={myPhoto} alt="Nakul" />
      </div>
      <div className="contact-button-container">
        <a href="#contact" className="contact-button" onClick={scatterIcons}>
          Connect with me
        </a>
        <div className="icons-container">
          <a href="https://linkedin.com.in/nakul-bhatt-157aba24a" target="_blank" rel="noreferrer noopener">
            <img src={linkedin} className="app-icon" alt="LinkedIn" />
          </a>
          <a href="https://instagram.com/nakulbhatt106" target="_blank" rel="noreferrer noopener">
            <img src={insta} className="app-icon" alt="Instagram" />
          </a>
          <a href="https://github.com/NakulBhatt10" target="_blank" rel="noreferrer noopener">
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
