"use client"
import { useState, useEffect } from 'react';

export default function Header() {
    const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
    const [activeSection, setActiveSection] = useState('');
    
    // handles the tracking of what section the user is currently at, adjusting the header to underline
    // the current section of the website
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY + window.innerHeight / 2;
    
          sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
              const offsetTop = element.offsetTop;
              const offsetHeight = element.offsetHeight;
    
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section);
              }
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return (
        <section className="py-4 px-3 flex flex-col items-center sticky top-0 bg-[#121212] z-10 border-b border-gray-100">
            <header>
                    <nav className="space-x-4">
                    {sections.map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className={`text-3xl hover:text-blue-500 transition-all duration-300 ${
                                activeSection === section ? 'border-b-4 border-blue-500' : ''
                            }`}
                        >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}
                    </nav>  
            </header>
        </section>
    );
};