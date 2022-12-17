import './header.css'
import { useState, useEffect } from 'react';
import resume from '../../assets/pdfs/cv-mwoodington.pdf'


function Header({ navView, changeNavView, closeNav }) {
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
        <section className="logo navlist-item" onClick={closeNav}>
          <a href="#home">// matthew</a>
        </section>
        <section className={navView ? "nav-links show" : 'nav-links hidden'}>
          <ul className="navlist">
            <li className='navlist-item' onClick={closeNav}><a href="#about">// about</a></li>
            <li className='navlist-item' onClick={closeNav}><a href="#projects">// projects</a></li>
            <li className='navlist-item' onClick={closeNav}><a href="#contact">// contact</a></li>
            <li className='navlist-item'>
              <a className="highlight-button" target='_blank' href={resume} >resume</a>
            </li>
          </ul>
        </section>
        <button className='ham-button' onClick={changeNavView}>
          <div className="ham-box">
            <div className="ham-inner"></div>
          </div>
        </button>
    </header>
  )
}

export default Header
