"use client"
import { useState, useEffect } from 'react';
import { FiX, FiAlignJustify } from "react-icons/fi";

export default function Header() {
    const sections = ['about', 'experience', 'tech', 'projects', 'contact'];
    const [activeSection, setActiveSection] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    
  
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

    // used to create the header links for both hamburger and standard view
    const Navigation = () => {
      return (
        <>
          {sections.map((section) => (
              <a
                  key={section}
                  href={`#${section}`}
                  className={`text-2xl md:text-3xl py-1 hover:text-blue-500 transition-all duration-300 ${
                      activeSection === section ? 'border-b-4 border-blue-500' : ''
                  }`}
              >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
          ))}
        </>
      );
    };
  
    const toggleBurger = () => {
      setIsOpen(!isOpen);
    };

    return (
        <section className="py-2 px-3 md:flex flex-col items-center sticky top-0 bg-[#121212] z-10 border-b border-gray-100">
            <nav>
              <div className="hidden space-x-4 justify-between md:flex">
                <Navigation />
              </div>
              <div className="md:hidden">
                <button onClick={toggleBurger}>{isOpen ? <FiX className="text-3xl"/> :  <FiAlignJustify className="text-3xl" />}</button>
              </div>
            </nav>
            {isOpen && (
              <div className="flex basis-full flex-col items-center z-10">
                <Navigation />
              </div>
            )}
        </section>
    );
};