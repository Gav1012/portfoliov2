import Head from "next/head";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Tech from "./components/tech";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Header />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
