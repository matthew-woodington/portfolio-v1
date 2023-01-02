import './header.css'
import { useState, useEffect } from 'react';
import resume from '../../assets/pdfs/cv-mwoodington.pdf'


function Header({ navView, changeNavView, closeNav }) {
  const [navbar, setNavbar] = useState(false)
  const [open, setOpen] = useState(false)

  const navigate = () => {
    setOpen(false)
    closeNav()
  }

  const setActive = (e) => {
    if (!open) {
      setOpen(true)
      changeNavView()
    } else {
      setOpen(false)
      changeNavView()
    }
  }


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
  }, [])

  return (
    <header className={navbar ? 'header header-scrolled' : 'header'}>
        <section className="logo navlist-item" onClick={navigate}>
          {/* eslint-disable-next-line */}
          <a href="#home">// matthew</a>
        </section>
        <section className={navView ? "nav-links show" : 'nav-links hidden'}>
          <ul className="navlist">
            {/* eslint-disable-next-line */}
            <li className='navlist-item' onClick={navigate}><a href="#about">// about</a></li> 
            {/* eslint-disable-next-line */}
            <li className='navlist-item' onClick={navigate}><a href="#projects">// projects</a></li> 
            {/* eslint-disable-next-line */}
            <li className='navlist-item' onClick={navigate}><a href="#contact">// contact</a></li>
            <li className='navlist-item'>
              <a className="highlight-button" target='_blank' rel="noreferrer" href={resume} >resume</a>
            </li>
          </ul>
        </section>
        <button className={open ? 'ham-button is-active' : 'ham-button'} onClick={(e) => setActive(e)}>
          <div className="ham-box">
            <div className="ham-inner"></div>
          </div>
        </button>
    </header>
  )
}

export default Header
