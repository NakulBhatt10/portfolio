import React from 'react';
import './skills.css';

const skills = [
    { name: 'JavaScript', logo: '🟨' },
    { name: 'HTML', logo: '🟧' },
    { name: 'CSS', logo: '🟦' },
    { name: 'React.JS', logo: '⚛️' },
    { name: 'Next.JS', logo: '⬛' },
    { name: 'Node.JS', logo: '🟩' },
    { name: 'Mongo DB', logo: '🌱' },
    { name: 'Express.JS', logo: '⚙️' },
    { name: 'Bootstrap', logo: '📦' },
    { name: 'Tailwind CSS', logo: '🌊' },
    { name: 'React Router', logo: '🔀' },
    { name: 'Redux Toolkit', logo: '🔄' },
    { name: 'Responsive', logo: '📱' },
    { name: 'Git', logo: '🔧' },
    { name: 'Github', logo: '🐙' },
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2 className="skills-title">My Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill">
                        <span className="skill-logo">{skill.logo}</span>
                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
