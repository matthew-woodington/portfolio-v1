import React from 'react'
import {FiGithub} from 'react-icons/fi'
import {FiExternalLink} from 'react-icons/fi'
import {FiFolder} from 'react-icons/fi'

function MoreProjects() {
  return (
    <section className='main-section more-projects'>
      
      <h1 className='other-title'>// Other Projects //</h1>

      <ul className="other-projects-list">

        {/* Calculator */}
        <li className="other-project">
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
              <p>Calculator based on the ios calculator app built to perform basic calculator functions using JavaScript.</p>
            </div>
            <div className="other-card-footer">
              <ul className="other-frameworks">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </li>

        {/* War Game */}
        <li className="other-project">
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
        </li>

        {/* GitHub */}
        <li className="other-project">
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
              <p>Recreation of the GitHub repository page using JavaScript fetch requests to update repository list with live data from GitHub.</p>
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
        </li>

        {/* Wordle */}
        <li className="other-project">
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
        </li>

        {/* Turn Based */}
        <li className="other-project">
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
        </li>

        {/* Rest App */}
        <li className="other-project">
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
        </li>

      </ul>

      <a href='https://github.com/matthew-woodington?tab=repositories' target='_blank' rel='noreferrer' className='highlight-button view-more'>View More Work</a>

    </section>
  )
}

export default MoreProjects
