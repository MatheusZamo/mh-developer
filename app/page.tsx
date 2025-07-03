import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
