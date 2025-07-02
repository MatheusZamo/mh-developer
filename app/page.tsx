import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
