import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = (e) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*#/, '');
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: 'smooth',
        });

        const links = document.querySelectorAll('.nav-link');
        links.forEach((link) => {
            link.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
        setIsMobileMenuOpen(false); // Close menu on link click
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <h1>NAKUL</h1>
                </div>
                <div className="menu-icon" onClick={toggleMobileMenu}>
                    <div className="menu-bar"></div>
                    <div className="menu-bar"></div>
                    <div className="menu-bar"></div>
                </div>
                <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <a href="#home" onClick={handleScroll} className="nav-link">Home</a>
                        <a href="#educationsection" onClick={handleScroll} className="nav-link">Education</a>
                        <a href="#certificate" onClick={handleScroll} className="nav-link">Achievements</a>
                        <a href="#skills" onClick={handleScroll} className="nav-link">Skills</a>
                        <a href="#about" onClick={handleScroll} className="nav-link">About</a>
                        <a href="src\Navbar\nakul_resume.pdf" target="_blank" className="resume-btn">Resume</a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
