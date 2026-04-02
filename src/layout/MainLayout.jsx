import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-blue-100 to-indigo-100">
      
      <Navbar />
      
      <main className="pt-20 md:pt-24">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;