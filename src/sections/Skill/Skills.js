import React from 'react';
import './skills.css';

const skillCategories = [
    {
        title: 'Front-End Skills',
        skills: [
            { name: 'JavaScript', logo: '🟨' },
            { name: 'HTML', logo: '🟧' },
            { name: 'CSS', logo: '🟦' },
            { name: 'React.JS', logo: '⚛️' },
            { name: 'Next.JS', logo: '⬛' },
            { name: 'Tailwind CSS', logo: '🌊' },
            { name: 'Bootstrap', logo: '📦' },
        ],
    },
    {
        title: 'Back-End Skills',
        skills: [
            { name: 'Node.JS', logo: '🟩' },
            { name: 'Express.JS', logo: '⚙️' },
            { name: 'Mongo DB', logo: '🌱' },
            { name: 'Python', logo: '' },
        ],
    },
    {
        title: 'IT Tools',
        skills: [
            { name: 'Git', logo: '🔧' },
            { name: 'Github', logo: '🐙' },
            { name: 'Responsive', logo: '📱' },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2 className="skills-title">My Skills</h2>
            <div className="skills-categories">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skills-category">
                        <h3 className="skills-category-title">{category.title}</h3>
                        <div className="skills-grid">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="skill-card">
                                    <span className="skill-icon">{skill.logo}</span>
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
