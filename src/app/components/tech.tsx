export default function Tech() {
    // array holds all the technologies I'm skilled with
    const techSkills = ["JavaScript", "TypeScript", "Python", "C", "C++", "React", "HTML", "CSS", "PostgreSQL", "MySQL", "Next.js", "Node.js", "Express", "Git", "Docker"];
    return (
        <section id="tech" className="py-16 px-10 scroll-mt-20">
            <h1 className="text-7xl md:text-9xl mb-8 text-center">Tech</h1>
            <ul className="flex flex-wrap justify-center text-center text-xl gap-4 max-w-6xl mx-auto">
                {techSkills.map((skill, index) => (
                    <li 
                        className="transform hover:scale-105 hover:bg-blue-900 transition duration-300 border border-white rounded-xl px-5 py-3" 
                        key={index}
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    )
}       