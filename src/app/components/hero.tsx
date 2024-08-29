import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="hero" className="text-white mt-24 md:mt-32 mb-20 flex items-center justify-center">
          <div className="text-center">
            <div className="flex justify-center items-center mb-5">
                <Image 
                  src="/gprofile.jpg"
                  width={192}
                  height={192}
                  priority={true}
                  alt="Gavin Poley Picture"
                  className="h-80 w-80 rounded-full object-cover"
                />
            </div>
            <p className="text-4xl">Hello, I&apos;m</p>
            <h1 className="text-6xl">Gavin Poley</h1>
            <p className="text-4xl mb-6">Software Developer</p>
            <a href="#contact" className="bg-blue-900 text-white py-2 px-6 rounded-full text-xl transition-colors duration-300 hover:bg-gray-100 hover:text-blue-900">
              Contact Me
            </a>
          </div>
        </section>
    );
}