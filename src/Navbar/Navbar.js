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
        links.forEach((link) => link.classList.remove('active'));
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
                <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li>
                            <a href="#home" onClick={handleScroll} className="nav-link">Home</a>
                        </li>
                        <li>
                            <a href="#education1" onClick={handleScroll} className="nav-link">Education</a>
                        </li>
                        <li>
                            <a href="#certificate" onClick={handleScroll} className="nav-link">Achievements</a>
                        </li>
                        <li>
                            <a href="#skills" onClick={handleScroll} className="nav-link">Skills</a>
                        </li>
                        <li>
                            <a href="#about" onClick={handleScroll} className="nav-link">About</a>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
