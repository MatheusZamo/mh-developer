import About from "@/components/about";
import Hero from "@/components/hero";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
