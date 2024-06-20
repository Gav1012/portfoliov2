export default function Header() {
    return (
        <section id="header" className="border-b border-gray-800 py-4 px-3 sticky top-0 bg-[#121212] z-10">
            <header>
                <div className="flex justify-center items-center max-w-screen-l">
                    <nav className="flex space-x-4">
                        <a href="#about" className="text-2xl hover:text-blue-400 transition=all duration-300">About</a>
                        <a href="#experience" className="text-2xl hover:text-blue-400 transition=all duration-300">Experience</a>
                        <a href="#projects" className="text-2xl hover:text-blue-400 transition=all duration-300">Projects</a>
                        <a href="#contact" className="text-2xl hover:text-blue-400 transition=all duration-300">Contact</a>
                    </nav>  
                </div>
            </header>
        </section>
    );
};