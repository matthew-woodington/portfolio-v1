import "./App.css";
import { useState, createContext } from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Socials from "./components/Socials/Socials";

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> 
      <div className="App" id={theme}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <section className="main-pages">
          <Socials />
          <HomePage />
          <About />
          <Projects />
          <Contact />
        </section>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
