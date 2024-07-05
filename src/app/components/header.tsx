export default function Header() {
    return (
        <section className="py-4 px-3 flex flex-col items-center sticky top-0 bg-[#121212] z-10 border-b border-gray-100">
            <header>
                    <nav className="space-x-4">
                        <a href="#hero" className="text-3xl transform hover:scale-105 hover:text-blue-500 transition-all duration-300">Home</a>
                        <a href="#about" className="text-3xl hover:text-blue-500 transition-all duration-300">About</a>
                        <a href="#experience" className="text-3xl hover:text-blue-500 transition-all duration-300">Experience</a>
                        <a href="#projects" className="text-3xl hover:text-blue-500 transition-all duration-300">Projects</a>
                        <a href="#contact" className="text-3xl hover:text-blue-500 transition-all duration-300">Contact</a>
                    </nav>  
            </header>
        </section>
    );
};