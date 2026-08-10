import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollTop from "@/components/ScrollTop";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="dots-grid" />
      <div className="ambient-1 top-[-10%] left-[10%] w-[60vw] h-[60vh] -z-10" />
      <div className="ambient-2 bottom-[-15%] right-[5%] w-[55vw] h-[55vh] -z-10" />
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Index;
