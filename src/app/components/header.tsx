export default function Header() {
    console.log("hello from  header");
    return (
        <header>
            <div className="flex justify-start items-center max-w-screen-xl">
                <nav className="flex space-x-4">
                    <a href="#about" className="hover:text-blue-400">About</a>
                    <a href="#projects" className="hover:text-blue-400">Projects</a>
                    <a href="#contact" className="hover:text-blue-400">Contact</a>
                </nav>  
            </div>
        </header>
    );
};