import './header.css'
import React from 'react'
import ReactSwitch from "react-switch";
import { IoSunny } from 'react-icons/io5'
import { IoMoon } from 'react-icons/io5'

function Header({ theme, toggleTheme }) {
  return (
    <header className='header'>
        <nav className="nav-bar">
            <label>
            <ReactSwitch 
                onChange={toggleTheme} 
                checked={theme === "dark"}
                uncheckedIcon={
                    <div className='un-checked'>
                        <IoSunny />
                    </div>
                }
                checkedIcon={
                    <div className='checked'>
                        <IoMoon />
                    </div>
                }
            />
            </label>
        </nav>
        <h5 className="intro-text">Hello I'm</h5>
        <h1 className="my-name">Matthew Woodington</h1>
        <h5 className="title">Software Developer</h5>
    </header>
  )
}

export default Header
