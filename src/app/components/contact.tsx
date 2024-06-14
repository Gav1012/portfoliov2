export default function Contact() {
    console.log("hello from contact");
    return (
        <section id="contact">
            <h1 className="text-6xl">Contact</h1>
            <p className="text-lg max-w-2xl break-words">
                If you want to reach out to me!
            </p>
            <div className="flex justify-start space-x-4">
                <a
                    href="https://www.linkedin.com/in/gavin-poley/"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/Gav1012"
                    className="text-gray-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
                <a
                    href="/Gavin_Poley_Resume.pdf"
                    className="text-green-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </a>
            </div>
        </section>
    )
}