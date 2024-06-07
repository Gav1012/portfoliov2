export default function Header() {
    console.log("hello from  header");
    return (
        <header>
            <div className="flex justify-start items-center max-w-screen-xl">
                <nav className="flex space-x-4">
                    <a href="#about" className="hover:text-blue-400 text-2xl">About</a>
                    <a href="#projects" className="hover:text-blue-400 text-2xl">Projects</a>
                    <a href="#contact" className="hover:text-blue-400 text-2xl">Contact</a>
                </nav>  
            </div>
        </header>
    );
};