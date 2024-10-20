import React from 'react';
import './../styles/navbar.css';

function Navbar() {

    const handleScroll = (e) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*#/, '');
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: 'smooth',
        });

        // Update the class name of the clicked link
        const links = document.querySelectorAll('.nav-link');
        links.forEach((link) => {
            link.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
    };

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <h1>My Website</h1>
                </div>
                <div className="nav-links">
                    <ul className="nav-list">
                        <a href="#home" onClick={handleScroll} className="nav-link">Home</a>
                        <a href="#about" onClick={handleScroll} className="nav-link">About</a>
                        <a href="#resume" onClick={handleScroll} className="nav-link">Resume</a>
                        <a href="#projects" onClick={handleScroll} className="nav-link">Projects</a>
                        <a href="#contact" onClick={handleScroll} className="nav-link">Contact</a>
                        <a href="/assets/resume/julia_resume.pdf" target="_blank" className="resume-btn">Resume</a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
