export default function Header() {
    return (
        <nav id="header" className="border-b border-gray-800 py-3 px-3 sticky top-0 bg-[#121212] z-10">
            <header>
                <div className="flex justify-start items-center max-w-screen-xl">
                    <nav className="flex space-x-4">
                        <a href="#about" className="hover:text-blue-400 text-2xl">About</a>
                        <a href="#experience" className="hover:text-blue-400 text-2xl">Experience</a>
                        <a href="#projects" className="hover:text-blue-400 text-2xl">Projects</a>
                        <a href="#contact" className="hover:text-blue-400 text-2xl">Contact</a>
                    </nav>  
                </div>
            </header>
        </nav>
    );
};