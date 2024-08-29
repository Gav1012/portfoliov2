import React from 'react';
import StackIcon from 'tech-stack-icons';

export default function Tech() {
    // array holds all the technologies I'm skilled with
    const techSkills = ["js", "typescript", "python", "c++", "reactjs", "html5", "css3", "tailwindcss", "nodejs", "nextjs", "postgresql", "mongodb", "git", "docker"];
    return (
        <section id="tech" className="py-16 px-10">
            <h1 className="text-7xl md:text-9xl mb-8 text-center">Tech</h1>
            <ul className="flex flex-wrap justify-center text-center text-xl gap-3 max-w-6xl mx-auto">
                {techSkills.map((skill, index) => (
                    <li 
                        className="flex flex-col items-center md:px-5 py-3 border border-transparent rounded-xl transform hover:border-gray-100 transition duration-300 hover:scale-105" 
                        key={index}
                    >
                        <StackIcon name={skill} />
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    )
}       