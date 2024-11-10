// Contact.js
import React from 'react';
import './Contact.css';
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-description">
                I'd love to hear from you! Whether you want to collaborate or just say hi, feel free to reach out.
            </p>

            {/* Contact Form */}
            <form className="contact-form">
                <input type="text" placeholder="Your Name" className="form-input" required />
                <input type="email" placeholder="Your Email" className="form-input" required />
                <textarea placeholder="Your Message" className="form-textarea" required></textarea>
                <button type="submit" className="form-button">Send Message</button>
            </form>

            {/* Social Media Links */}
            <div className="social-media-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaFacebook />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaTwitter />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaGithub />
                </a>
            </div>

            {/* Contact Footer */}
            <p className="contact-footer">
                Or send me an email at <a href="mailto:yourname@example.com" className="contact-email">yourname@example.com</a>
            </p>
        </div>
    );
};

export default Contact;
