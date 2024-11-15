// components/Home.js
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './home.css';
import myPhoto from './myPhoto.png'; // Import your photo

const Home = () => {
  useEffect(() => {
    const options = {
      strings: ['Frontend', 'Software', 'Backend', 'Full Stack'], // List of words to type
      typeSpeed: 100, // Speed of typing
      backSpeed: 50,  // Speed of deleting text
      loop: true,     // Loop typing indefinitely
    };

    const typed = new Typed('#typed-text', options); // Initialize Typed.js

    return () => {
      typed.destroy(); // Clean up when component unmounts
    };
  }, []);

  return (
    <section id="home" className="home-section"> {/* Added id="home" */}
      <div className="home-content">
        <p className="home-greeting"><h1>Hello</h1></p>
        <h1 className="home-title">
          I’m <span className="highlight">Nakul</span> <br />
          <span id="typed-text"></span>Developer
        </h1>
      </div>
      <div className="home-image">
        <img src={myPhoto} alt="Nakul" /> {/* Using your photo */}
      </div>
      <div className="hire-me">
        <a href="#contact">CONTACT ME</a> {/* Link to Contact section */}
      </div>
    </section>
  );
};

export default Home;
