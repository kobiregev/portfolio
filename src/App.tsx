import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import ProjectsCarousel from "./components/ProjectsCarousel/ProjectsCarousel";

function App() {
  return (
    <>
      <Hero />
      <ProjectsCarousel />
      <About/>
    </>
  );
}

export default App;
