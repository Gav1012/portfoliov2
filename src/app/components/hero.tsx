import Image from 'next/image';

export default function Hero() {
    return (
        <section id="hero" className="text-white mt-32 mb-20 flex items-center justify-center">
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
            <p className="text-4xl">Hello, I'm</p>
            <h1 className="text-6xl">Gavin Poley</h1>
            <p className="text-4xl mb-6">B.S. Computer Science</p>
            <a href="#contact" className="bg-blue-900 text-white py-2 px-6 rounded-lg text-xl hover:bg-blue-500 transition duration-300">
              Contact Me
            </a>
          </div>
        </section>
    );
}