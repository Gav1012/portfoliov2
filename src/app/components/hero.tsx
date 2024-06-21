export default function Hero() {
    return (
        <section id="hero" className="text-white py-16 flex items-center justify-center">
          <div className="text-center">
            <h1>Image will go here</h1>
            <h1 className="text-6xl font-bold mb-4">Hello, I'm Gavin!</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              I'm a passionate developer skilled in React, Next.js, and Tailwind CSS.
            </p>
            <a href="#contact" className="bg-blue-900 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-500 transition duration-300">
              Contact Me
            </a>
          </div>
        </section>
    );
}