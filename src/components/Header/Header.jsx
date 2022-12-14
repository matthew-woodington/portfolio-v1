import './header.css'
import { useState, useEffect } from 'react';
import resume from '../../assets/pdfs/cv-mwoodington.pdf'


function Header({theme, toggleTheme}) {
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
        <section className="logo navlist-item">
          <a href="#home">// matthew</a>
        </section>
        <section className="nav-links">
          <ul className="navlist">
            <li className='navlist-item'><a href="#about">// about</a></li>
            <li className='navlist-item'><a href="#projects">// projects</a></li>
            <li className='navlist-item'><a href="#contact">// contact</a></li>
            <li>
              <a className="highlight-button" target='_blank' href={resume} >resume</a>
            </li>
          </ul>
        </section>
    </header>
  )
}

export default Header
