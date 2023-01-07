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
  const [navView, setNavView] = useState(false)
  const [windowWidth, setWindowWidth] = useState()

  const getWindowWidth = () => {
    const { innerWidth: width } = window;
    return width
  }

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth)
    }

    window.addEventListener('resize', handleResize)
    return() => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  const changeNavView = () => {
    if (!navView) {
      setNavView(true)
    } else {
      setNavView(false)
    }
  }

  const closeNav = () => {
    setNavView(false)
  }

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
      <Header navView={navView} changeNavView={changeNavView} closeNav={closeNav} />
      <section className={navView ? "main-pages blur" : "main-pages"}>
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
