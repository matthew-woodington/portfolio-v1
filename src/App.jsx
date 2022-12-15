import "./App.css";
import { useRef, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Socials from "./components/Socials/Socials";
import MoreProjects from "./components/Projects/MoreProjects";
import Footer from "./components/Footer/Footer";

function App() {
  const [contactVisible, setContactVisible] = useState()

  const myRef = useRef();

  useEffect(() => {
    // console.log('myRef', myRef.current);
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      // console.log('entry', entry);
      setContactVisible(entry.isIntersecting);
    })
    observer.observe(myRef.current);
  }, [])

  return (
    <div className="App">
      <Header />
      <section className="main-pages">
        <Socials contactVisible={contactVisible} />
        <HomePage />
        <About />
        <Projects />
        <MoreProjects />
        <Contact myRef={myRef} />
      </section>
      <Footer />
    </div>
  );
}

export default App;
