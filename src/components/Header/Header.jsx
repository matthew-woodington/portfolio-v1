import './header.css'
import { useState, useEffect } from 'react';

function Header() {
  const [navbar, setNavbar] = useState(false)

  const changeNavbar = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);
    return () => {
      window.removeEventListener('scroll', changeNavbar)
    }
  }, [window.scrollY])


  return (
    <header className={navbar ? 'header header-scrolled' : 'header'}>
        <section className="logo">
          <a href="#home">MW</a>
        </section>
        <section className="nav-links">
          <ul className="navlist">
            <li className='navlist-item'><a href="#about">about</a></li>
            <li className='navlist-item'><a href="#projects">projects</a></li>
            <li className='navlist-item'><a href="#contact">contact</a></li>
            <li className='navlist-item'>
              <button className="resume highlight-button">resume</button>
            </li>
          </ul>
        </section>
    </header>
  )
}

export default Header
