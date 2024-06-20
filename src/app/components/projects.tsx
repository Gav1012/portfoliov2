"use client";
import { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  // makes an API call to Github to grab projects
  useEffect(() => {
    const fetchGitHubProjects = async () => {
        const username = 'Gav1012';
        const url = `https://api.github.com/users/${username}/repos`;
        const response = await fetch(url);
        const repos = await response.json();
        const selectedProjects = ['flixforum', 'Facebook-MarketPlace-Clone', 'Three.js-Assignment'];
        const filteredRepos = repos.filter((repo) => selectedProjects.includes(repo.name));
        setProjects(filteredRepos);
    };
    fetchGitHubProjects();
  }, []);

  return (
    <section id="projects" className="py-16 px-10">
      <h1 className="text-6xl mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 p-10 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-2">{project.name}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};