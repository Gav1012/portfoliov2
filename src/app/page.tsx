import Head from "next/head";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Gavin Poley's Portfolio Website" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Header />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
