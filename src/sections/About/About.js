import React from 'react';
import './about.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2>About Me</h2>
                <div className="about-content">
                    <p>
                        I am a passionate software developer dedicated to crafting intuitive and efficient web applications.
                        With experience in front-end and back-end technologies, I thrive on solving real-world problems through code.
                    </p>
                    <p>
                        I’m constantly learning and excited to collaborate on projects that make a difference.
                    </p>
                    <p>
                        Feel free to connect with me:
                    </p>
                    <div className="social-links">
                        <a
                            href="https://linkedin.com/in/nakul-bhatt-157aba24a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/NakulBhatt10"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="nakulbhatt610@example.com"
                            className="social-icon"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
