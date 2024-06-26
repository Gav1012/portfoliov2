import React from 'react';

// might add image to card
const experiences = [
  {
    title: "Frontend Developer",
    company: "Spacelab",
    date: "June 2023 - Present",
    description: "Developed web applications using React and Node.js.",
  },
  {
    title: "Grader / Reader",
    company: "UCSC",
    date: "Sept. 2022 - Dec. 2022",
    description: "Graded student homework and tests leaving detailed notes of mistakes. Occasionally had 1 on 1 discussions with students about problems",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-10">
      <h1 className="text-6xl mb-8">Experience</h1>
      <div className="relative">
        <div className="border-l-4 border-gray-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
        <ul className="space-y-12">
          {experiences.map((experience, index) => (
            <li key={index} className="relative flex items-start">
              <div className="bg-blue-900 rounded-lg p-4 w-5/12">
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <p>{experience.company}</p>
                <p>{experience.date}</p>
                <p className="mt-2">{experience.description}</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 h-4 w-4 bg-gray-300 rounded-full"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};