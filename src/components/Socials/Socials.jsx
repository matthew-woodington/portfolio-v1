import './socials.css'
import {FiGithub} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import {FiChevronsRight} from 'react-icons/fi'
import { motion } from 'framer-motion'


function Socials({ contactVisible }) {
  return (
    <>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className={contactVisible ? 'left-tile hide' : 'left-tile'}
        >
        <ul className="social-links">
          <li className='link-item'><a className='li-link so-a' href="https://github.com/matthew-woodington" target='_blank' rel="noreferrer"><FiGithub /></a></li>
          <li className='link-item'><a className='li-link so-a' href="https://www.linkedin.com/in/matthew-woodington" target='_blank' rel="noreferrer"><FiLinkedin /></a></li>
          <li className='link-item'><a className='li-link so-a' href="mailto:smwoodington@gmail.com"><FiMail /></a></li>
        </ul>
      </motion.div>
      <motion.div 
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className={contactVisible ? 'right-tile hide' : 'right-tile'}>
        <div className='scroll-el' >
            <p className='scroll'>scroll down</p><FiChevronsRight className='icon' />
        </div>
      </motion.div>
    </>
  )
}

export default Socials
