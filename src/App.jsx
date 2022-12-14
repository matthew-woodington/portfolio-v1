import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Socials from "./components/Socials/Socials";
import MoreProjects from "./components/Projects/MoreProjects";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main-pages">
        <Socials />
        <HomePage />
        <About />
        <Projects />
        <MoreProjects />
        <Contact />
      </section>
    </div>
  );
}

export default App;
