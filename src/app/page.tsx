import Head from "next/head";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Header from "./components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Gavin Poley's Portfolio Website"></meta>
      </Head>

      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
