"use client"
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaFile, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    // states used for copying my email to the user
    const [copied, setCopied] = useState(false);
    const emailAdd = 'gavin.poley@gmail.com';
    // actually copies email to user clipboard
    const handleCopyEmail = () => {
        navigator.clipboard.writeText(emailAdd)
            .then(() => setCopied(true))
            .catch((err) => console.error("failed"));
    };

    return (
        <section id="contact" className="py-16 px-10">
            <h1 className="text-7xl md:text-9xl mb-8 text-center">Say Hello</h1>
            <p className="text-2xl break-words text-center">
                Here are my social links, resume, and email
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 py-5">
                <a
                    href="https://www.linkedin.com/in/gavin-poley/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                >
                    <FaLinkedin className="text-6xl border border-transparent rounded-xl p-1 hover:border-gray-100 transition-all duration-300 hover:scale-105" />
                    <span className="text-3xl">LinkedIn</span>
                </a>
                <a
                    href="https://github.com/Gav1012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                >
                    <FaGithub className="text-6xl border border-transparent rounded-xl p-1 hover:border-gray-100 transition-all duration-300 hover:scale-105" />
                    <span className="text-3xl">GitHub</span>
                </a>
                <a
                    href="/Gavin_Poley_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                >
                    <FaFile className="text-6xl border border-transparent rounded-xl p-1 hover:border-gray-100 transition-all duration-300 hover:scale-105" />
                    <span className="text-3xl">Resume</span>
                </a>
                <a
                    className="cursor-pointer flex items-center space-x-2"
                    onClick={handleCopyEmail}
                >
                    <FaEnvelope className="text-6xl border border-transparent rounded-xl p-1 hover:border-gray-100 transition-all duration-300 hover:scale-105" />
                    <span className="text-3xl">Email</span>
                </a>
            </div>
        </section>
    )
}