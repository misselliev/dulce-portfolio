import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import ProjectSection from "./components/ProjectSection";
import { Footer } from "./components/Footer";
import ExtraAbout from "./components/ExtraAbout";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <ExtraAbout />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
