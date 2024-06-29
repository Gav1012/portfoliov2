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
          <div key={project.id} className="bg-blue-900 p-8 rounded-xl border border-transparent rounded hover:border-blue-100 transition-all duration-300 transform hover:scale-105">
            <h2 className="text-xl font-bold mb-2">{project.name}</h2>
            <p className="py-2">{project.description}</p>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 hover:underline font-bold"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};