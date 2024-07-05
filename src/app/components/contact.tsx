import { FaLinkedin, FaGithub, FaFile } from 'react-icons/fa';
export default function Contact() {
    return (
        <section id="contact" className="py-16 px-10">
            <h1 className="text-8xl mb-8">Contact</h1>
            <p className="text-2xl max-w-2xl break-words">
                Feel free to reach out to me or view my resume!
            </p>
            <div className="flex justify-start space-x-5 py-5">
                <a
                    href="https://www.linkedin.com/in/gavin-poley/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className="text-8xl border border-transparent rounded p-1 hover:border-blue-400 transition-all duration-300 hover:scale-105" />
                </a>
                <a
                    href="https://github.com/Gav1012"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="text-8xl border border-transparent rounded p-1 hover:border-blue-400 transition-all duration-300 hover:scale-105" />
                </a>
                <a
                    href="/Gavin_Poley_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFile className="text-8xl border border-transparent rounded p-1 hover:border-blue-400 transition-all duration-300 hover:scale-105" />
                </a>
            </div>
        </section>
    )
}