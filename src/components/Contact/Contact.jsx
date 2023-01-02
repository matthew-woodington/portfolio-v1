import './contact.css'
import {FiGithub} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiCodepen} from 'react-icons/fi'

function Contact({myRef}) {
  return (
    <section ref={myRef} id="contact" className='main-section contact-section'>
      <h1 className="contact-title">// Contact Me //</h1>
      <div className="contact-content">
        <h3>Get In Touch</h3>
        <p>I am always looking to network and meet new people so feel free to reach out and connect with me via any platform. I look forward to talking with you!</p>
        <a className='highlight-button' href="mailto:smwoodington@gmail.com">Let's Talk!</a>
        <ul className="social-icons">
          <li className='social-item'><a className='contact-link' href="https://github.com/matthew-woodington" target='_blank' rel="noreferrer" ><FiGithub className='contact-icon' /></a></li>
          <li className='social-item'><a className='contact-link' href="https://www.linkedin.com/in/matthew-woodington" target='_blank' rel="noreferrer"><FiLinkedin className='contact-icon' /></a></li>
          <li className='social-item'><a className='contact-link' href="https://www.instagram.com/matt_w11/" target='_blank' rel="noreferrer"><FiInstagram className='contact-icon' /></a></li>
          <li className='social-item'><a className='contact-link' href="https://codepen.io/mattw_11" target='_blank' rel="noreferrer"><FiCodepen className='contact-icon' /></a></li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
