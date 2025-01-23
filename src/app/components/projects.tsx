"use client";
import React from 'react';
import Image from 'next/image';

export default function Projects() {
  // setting up redoing this part of the web, will manually update projects
  // want specific images for projects
  const projects = [
    {
      name: 'Youtube on Rails',
      link: 'https://github.com/Gav1012/ytonrails',
      image: '/placeholder-1.png'
    },
    {
      name: 'Chatty',
      link: 'https://github.com/Gav1012/pythonchatbot',
      image: '/placeholder-1.png'
    },
    {
      name: 'PokeWebDex',
      link: 'https://github.com/Gav1012/pokewebdex',
      image: '/pokewebdex.png'
    },
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
  ];

  return (
    <section id="projects" className="mb-32 mt-10 md:mx-20 px-10 scroll-mt-32">
      <h1 className="text-7xl md:text-9xl mb-8 text-center">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.name} className="bg-blue-900 p-6 mx-6 rounded-xl border border-transparent rounded hover:border-blue-100 transition-all duration-300 transform hover:scale-105">
            <div className="flex justify-center" style={{ aspectRatio: '1 / 1'}}>
              <div className="relative w-full pb-[100%]">
                <Image
                  src={project.image}
                  className="rounded-2xl"
                  layout="fill"
                  objectFit="cover"
                  alt="project image"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-center text-3xl font-bold mt-2 mb-2">{project.name}</h2>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl mt-2 border rounded-full py-2 px-6 transition-colors duration-300 hover:bg-gray-100 hover:text-blue-900"
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