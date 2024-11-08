import React from 'react';
import './about.css'; // Import your CSS file for this component


const aboutData = [
    { id: 1, title: 'JavaScript', icon: '💻' },
    { id: 2, title: 'TypeScript', icon: '📘' },
    { id: 3, title: 'React', icon: '⚛️' },
    { id: 4, title: 'Next.js', icon: '🔥' },
    { id: 5, title: 'Node.js', icon: '🌳' },
    { id: 6, title: 'SQL', icon: '📊' },
];

const About = () => {
    return (
        <section id="about" className="about-container">
            <h2>About Me</h2>

            <div className="about-content">
                <div className="about-text">
                    <p>
                        Throughout this years, I’ve honed my skills in <strong>JavaScript</strong> and <strong>Python</strong>.
                        I've experimented with <strong>JavaScript</strong>, <strong>Python</strong>, and developed an appetite for learning <strong>React</strong>,
                        <strong>C#</strong>, and <strong>Python</strong>.
                    </p>
                    <p>
                        Exploring various techniques and technologies like <strong>React</strong>, <strong>Next.js</strong>,
                        and <strong>Node.js</strong>, I've collaborated on exciting projects and expanded my knowledge.
                    </p>
                    <p>
                        I'm eager to apply my skills and creativity to make meaningful impacts in the real world.
                    </p>
                    <p>Here are things I would love to work with:</p>

                    <ul className="tech-list">
                        {aboutData.map(({ id, title, icon }) => (
                            <li key={id} className="tech-item">
                                <span className="tech-icon">{icon}</span> {title}
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </section>
    );
};

export default About;
