"use client";
import React from 'react';
import Image from 'next/image';

export default function Projects() {
  // setting up redoing this part of the web, will manually update projects
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
      name: 'HTTP Server',
      link: 'https://github.com/Gav1012/CSE130',
      image: '/placeholder-1.png',
    },
    {
      name: 'Facebook Marketplace',
      link: 'https://github.com/Gav1012/Facebook-MarketPlace-Clone',
      image: '/marketplace.png',
    },
  ];

  return (
    <section id="projects" className="mb-20 md:mb-32 mt-10 md:mx-20 px-4 sm:px-6 md:px-10 scroll-mt-32">
      <h1 className="text-7xl md:text-9xl mb-6 md:mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
        {projects.map((project) => (
          <div key={project.name} className="min-w-0 bg-blue-900 p-2 sm:p-3 md:p-4 rounded-xl border border-transparent hover:border-blue-100 transition-all duration-300 transform hover:scale-105">
              <div className="relative w-full aspect-square max-h-48 sm:max-h-48 lg:max-h-52">
                <Image
                  src={project.image}
                  alt={`${project.name} project screenshot`}
                  className="rounded-2xl"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-center text-md md:text-2xl font-bold mt-2 mb-1 break-words">{project.name}</h2>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm md:text-base mt-2 border rounded-full py-2 px-3 md:px-4 transition-colors duration-300 hover:bg-gray-100 hover:text-blue-900"
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