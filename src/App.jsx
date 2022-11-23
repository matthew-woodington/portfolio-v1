import "./App.css";
import { useState, createContext } from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> 
      <div className="App" id={theme}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <HomePage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
