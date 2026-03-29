import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <div style={{ padding: '40px' }}>
        <ProjectCard />
      </div>
      <Footer />
    </div>
  )
}

export default App