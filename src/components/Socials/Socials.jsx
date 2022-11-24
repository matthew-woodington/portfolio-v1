import './socials.css'
import {FiGithub} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiCodepen} from 'react-icons/fi'

function Socials() {
  return (
    <>
      <div className='left-tile'>
        <ul className="social-links">
          <li className='link-item'><a className='li-link so-a' href="https://github.com/matthew-woodington"><FiGithub /></a></li>
          <li className='link-item'><a className='li-link so-a' href="https://www.linkedin.com/in/matthew-woodington"><FiLinkedin /></a></li>
          <li className='link-item'><a className='li-link so-a' href="https://www.instagram.com/matt_w11/"><FiInstagram /></a></li>
          <li className='link-item'><a className='li-link so-a' href="https://codepen.io/mattw_11"><FiCodepen /></a></li>
        </ul>
      </div>
      <div className='right-tile'>
        <div className='social-email' >
          <a className='email so-a' href="mailto:smwoodington@gmail.com">smwoodington@gmail.com</a>
        </div>
      </div>
    </>
  )
}

export default Socials
