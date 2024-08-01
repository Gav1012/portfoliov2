"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  // setting up redoing this part of the web, will manually update projects
  // want specific images for projects
  const projects = [
    {
      name: 'FlixForum',
      link: 'https://github.com/kyone138/flixforum',
      image: '/flixforum.png',
    },
    {
      name: 'Facebook Marketplace',
      link: 'https://github.com/Gav1012/Facebook-MarketPlace-Clone',
      image: '/marketplace.png',
    },
    {
      name: 'Three.js Final Project',
      link: 'https://github.com/Gav1012/Three.js-Assignment?tab=readme-ov-file',
      image: '/threejs.png',
    }
  ];

  // makes an API call to Github to grab projects
  // might change this and manually update it so I can have
  // more personalization
  // useEffect(() => {
  //   const fetchGitHubProjects = async () => {
  //       const username = 'Gav1012';
  //       const url = `https://api.github.com/users/${username}/repos`;
  //       const response = await fetch(url);
  //       const repos = await response.json();
  //       const selectedProjects = ['flixforum', 'Facebook-MarketPlace-Clone', 'Three.js-Assignment'];
  //       const filteredRepos = repos.filter((repo) => selectedProjects.includes(repo.name));
  //       setProjects(filteredRepos);
  //   };
  //   fetchGitHubProjects();
  // }, []);

  return (
    <section id="projects" className="py-16 px-10 scroll-mt-20">
      <h1 className="text-7xl md:text-9xl mb-8 text-center">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div key={project.id} className="bg-blue-900 p-6 rounded-xl border border-transparent rounded hover:border-blue-100 transition-all duration-300 transform hover:scale-105">
            <h2 className="text-center text-3xl font-bold mb-2">{project.name}</h2>
            <div className="flex justify-center">
              <img 
                src={project.image}
                className="w-3/4 h-3/4 rounded-2xl"
              />
            </div>
            
            <div className="flex justify-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl mt-2 hover:underline font-bold justify-center"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};