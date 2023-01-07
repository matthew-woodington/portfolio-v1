import React from 'react'
import {FiGithub} from 'react-icons/fi'
import {FiExternalLink} from 'react-icons/fi'
import {FiFolder} from 'react-icons/fi'
import { motion } from 'framer-motion'

function MoreProjects() {
  const projList = {
    hidden: {
      opacity: 0, 
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      }
    }
  }

  const projListItem = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
    }
  }

  return (
    <section className='main-section more-projects'>
      {/* eslint-disable-next-line */}
      <motion.h1 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1 }}
        className='other-title'
      >
        // Other Projects //
      </motion.h1>

      <motion.ul
        variants={projList}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        className="other-projects-list"
      >

        {/* Calculator */}
        <motion.li variants={projListItem} className="other-project">
          <div className="other-card-content">
            <div className="other-card-main">
              <div className="other-card-head">
                <FiFolder className='folder-icon'/>
                <div className="head-links">
                  <a class="other-hover" href="https://github.com/matthew-woodington/js-calculator" target='_blank' rel="noreferrer"><FiGithub className='other-icon' /></a>
                  <a class="other-hover" href="https://matthew-woodington.github.io/js-calculator/" target='_blank' rel="noreferrer"><FiExternalLink className='other-icon' /></a>
                </div>
              </div>
              <h2>JS Calculator</h2>
              <p>Calculator based on the ios calculator app that is built to perform basic calculator functions using JavaScript.</p>
            </div>
            <div className="other-card-footer">
              <ul className="other-frameworks">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </motion.li>

        {/* War Game */}
        <motion.li variants={projListItem} className="other-project">
          <div className="other-card-content">
            <div className="other-card-main">
              <div className="other-card-head">
                <FiFolder className='folder-icon'/>
                <div className="head-links">
                  <a class="other-hover" href="https://github.com/matthew-woodington/js-war-game" target='_blank' rel="noreferrer"><FiGithub className='other-icon' /></a>
                  <a class="other-hover" href="https://matthew-woodington.github.io/js-war-game/" target='_blank' rel="noreferrer"><FiExternalLink className='other-icon' /></a>
                </div>
              </div>
              <h2>JS War Game</h2>
              <p>Classic card game War recreated using JavaScript.</p>
            </div>
            <div className="other-card-footer">
              <ul className="other-frameworks">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </motion.li>

        {/* GitHub */}
        <motion.li variants={projListItem} className="other-project">
          <div className="other-card-content">
            <div className="other-card-main">
              <div className="other-card-head">
                <FiFolder className='folder-icon'/>
                <div className="head-links">
                  <a class="other-hover" href="https://github.com/matthew-woodington/github-recreation" target='_blank' rel="noreferrer"><FiGithub className='other-icon' /></a>
                  <a class="other-hover" href="https://matthew-woodington.github.io/github-recreation/" target='_blank' rel="noreferrer"><FiExternalLink className='other-icon' /></a>
                </div>
              </div>
              <h2>GitHub Recreation</h2>
              <p>Recreation of the GitHub repository page. Uses JavaScript fetch requests to update repository list with live data from GitHub.</p>
            </div>
            <div className="other-card-footer">
              <ul className="other-frameworks">
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </motion.li>

        {/* Wordle */}
        <motion.li variants={projListItem} className="other-project">
          <div className="other-card-content">
            <div className="other-card-main">
              <div className="other-card-head">
                <FiFolder className='folder-icon'/>
                <div className="head-links">
                  <a class="other-hover" href="https://github.com/matthew-woodington/python_wordle" target='_blank' rel="noreferrer"><FiGithub className='other-icon' /></a>
                </div>
              </div>
              <h2>Python Wordle</h2>
              <p>Recreation of the popular game Wordle to be played in the terminal.</p>
            </div>
            <div className="other-card-footer">
              <ul className="other-frameworks">
                <li>Python</li>
              </ul>
            </div>
          </div>
        </motion.li>

        {/* Turn Based */}
        <motion.li variants={projListItem} className="other-project">
          <div className="other-card-content">
            <div className="other-card-main">
              <div className="other-card-head">
                <FiFolder className='folder-icon'/>
                <div className="head-links">
                  <a class="other-hover" href="https://github.com/matthew-woodington/js-turn-based-game" target='_blank' rel="noreferrer"><FiGithub className='other-icon' /></a>
                  <a class="other-hover" href="https://matthew-woodington.github.io/js-turn-based-game/" target='_blank' rel="noreferrer"><FiExternalLink className='other-icon' /></a>
                </div>
              </div>
              <h2>Turn Based Game</h2>
              <p>Classic arcade style turn based fighting game. Choose a character and take turns dealing damage to a computer opponent.</p>
              <span className='italic'>&#40;Group Project&#41;</span>
            </div>
            <div className="other-card-footer">
              <ul className="other-frameworks">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </motion.li>

        {/* Rest App */}
        <motion.li variants={projListItem} className="other-project">
          <div className="other-card-content">
            <div className="other-card-main">
              <div className="other-card-head">
                <FiFolder className='folder-icon'/>
                <div className="head-links">
                  <a class="other-hover" href="https://github.com/matthew-woodington/react-restaurant-app" target='_blank' rel="noreferrer"><FiGithub className='other-icon' /></a>
                  <a class="other-hover" href="https://matthew-woodington.github.io/react-restaurant-app/" target='_blank' rel="noreferrer"><FiExternalLink className='other-icon' /></a>
                </div>
              </div>
              <h2>Restaurant Application</h2>
              <p>Restaurant menu and ordering application created for a fake pizza restaurant using React.JS.</p>
            </div>
            <div className="other-card-footer">
              <ul className="other-frameworks">
                <li>React.JS</li>
                <li>Bootstrap</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </motion.li>

      </motion.ul>

      <a href='https://github.com/matthew-woodington?tab=repositories' target='_blank' rel='noreferrer' className='highlight-button view-more'>View More Work</a>

    </section>
  )
}

export default MoreProjects
