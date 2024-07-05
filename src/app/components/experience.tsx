import React from 'react';

// might add image to card
// also need to add tech involved for Spacelab
const experiences = [
  {
    title: "Frontend Developer",
    company: "Spacelab",
    date: "June 2023 - Present",
    description: "Developed new web pages and updated pre-existing components in React, including incorporating APIs and adhearing to ADA standards",
    link: "https://github.com/spacelabdev/spacelab-react",
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
      <h1 className="text-8xl mb-8">Experience</h1>
      <div className="relative">
        <div className="border-l-4 border-gray-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
        <ul className="space-y-12">
          {experiences.map((experience, index) => (
            <li 
              key={index} 
              className={`relative flex items-start ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
            >
              <div className="bg-blue-900 rounded-lg border border-transparent rounded p-8 w-5/12 hover:border-blue-100 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-3xl font-semibold">{experience.title}</h3>
                <p className="text-xl">{experience.company}</p>
                <p className="text-xl">{experience.date}</p>
                <p className="text-xl py-2">{experience.description}</p>
                {experience.link ? (
                  <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:underline font-bold"
                  >
                    View on Github
                  </a>
                ): null}
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 h-4 w-4 bg-gray-300 rounded-full"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};