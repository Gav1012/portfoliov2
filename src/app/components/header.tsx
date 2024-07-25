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

  // toggles the burger menu to open to close when in mobile view
  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };
  // forces burger menu to close when user makes a selection
  const closeBurgerMenu = () => {
    setIsOpen(false);
  };
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
                onClick={closeBurgerMenu}
            >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
        ))}
      </>
    );
  };

  return (
    <section className="py-6 px-3 mb-20 md:flex flex-col items-center sticky top-0 bg-[#1c1c1c] z-10 border-b border-gray-100">
        <nav>
          <div className="hidden space-x-4 justify-between md:flex">
            <Navigation />
          </div>
          <div className="md:hidden flex justify-between items-center mx-5">
            <div className="text-2xl">Gavin Poley</div>
            <button onClick={toggleBurger}>
              {isOpen ? <FiX className="text-3xl"/> :  <FiAlignJustify className="text-3xl" />}
            </button>
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