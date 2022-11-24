import './header.css'
import React from 'react'

function Header() {
  return (
    <header className='header'>
        <section className="logo">MW</section>
        <section className="nav-links">
          <ul className="navlist">
            <li className='navlist-item'>About</li>
            <li className='navlist-item'>Projects</li>
            <li className='navlist-item'>Contact</li>
            <li className='navlist-item'>
              <button className="resume">Resume</button>
            </li>
          </ul>
        </section>
    </header>
  )
}

export default Header
