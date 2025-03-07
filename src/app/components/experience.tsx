import React from 'react';

// array holds objects with properties related to the experience
const experiences = [
  {
    title: "Frontend Developer",
    company: "Spacelab",
    date: "June 2023 - March 2024",
    description: "Developed new web pages and updated legacy front end components along side UX designers. Integrated new APIs, improved accessibility for user's with disabilities, and executed comprehensive testing and coverage",
    link: "https://github.com/spacelabdev/spacelab-react",
  },
  {
    title: "Grader / Reader",
    company: "University of California Santa Cruz",
    date: "Sept 2022 - Dec 2022",
    description: "Graded student homework and tests leaving detailed notes of mistakes. Held 1 on 1 discussions with students about problems, providing solutions and breakdowns of the solutions for incorrect answers",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-10 md:mx-20 scroll-mt-20">
      <h1 className="text-6xl md:text-9xl mb-10 text-center">Experience</h1>
      <div className="relative">
        <div className="border-l-4 border-gray-300 absolute h-full left-4 md:left-1/2 transform -translate-x-1/2"></div>
        <ul className="space-y-12">
          {experiences.map((experience, index) => (
            <li 
              key={index} 
              className={`relative flex flex-row items-start ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              <div className="bg-blue-900 rounded-lg border border-transparent rounded p-5 w-full md:w-5/12 ml-8 md:ml-0 hover:border-blue-100 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-3xl font-semibold">{experience.title}</h3>
                <p className="text-xl">{experience.company}</p>
                <p className="text-xl">{experience.date}</p>
                <p className="text-lg text-justify mb-4">{experience.description}</p>
                {experience.link ? (
                  <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl mt-2 border rounded-full py-2 px-6 transition-colors duration-300 hover:bg-gray-100 hover:text-blue-900"
                  >
                    Github
                  </a>
                ): null}
              </div>
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-4 w-4 bg-gray-300 rounded-full"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};