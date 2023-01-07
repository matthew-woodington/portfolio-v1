import './contact.css'
import {FiGithub} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiCodepen} from 'react-icons/fi'
import { motion } from 'framer-motion'

function Contact({myRef}) {
  return (
    <section ref={myRef} id="contact" className='main-section contact-section'>
      {/* eslint-disable-next-line */}
      <motion.h1 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1 }}
        className="contact-title"
      >
        // Contact Me //
      </motion.h1>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>
    </section>
  )
}

export default Contact
