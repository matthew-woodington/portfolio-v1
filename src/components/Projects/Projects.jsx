import './projects.css'
import reps from '../../assets/images/reps.png'
import newspaper from '../../assets/images/newspaper.png'
import pixel from '../../assets/images/pixel-perfect.png'
import {FiGithub} from 'react-icons/fi'
import {FiExternalLink} from 'react-icons/fi'
import {FiVideo} from 'react-icons/fi'

function Projects() {

  return (
    <section id='projects' className='main-section'>
      <h1 className="projects-title">// My Work //</h1>

      <ul className="project-list">

        <li className="project">
          <div className="project-num">
            <span className='num'>01</span><span className='dot'>.</span>
          </div>
          <div className="project-card">
            <div class="card">
              <div class="card-img">
                <img className='img' src={reps} alt="" />
                <div class="overlay">
                  <div class="overlay-content">
                    <h2>REPS Application</h2>
                    <p>REPS is a full-stack application developed for trainers to customize a profile and market themselves to connect with local clientele. The application also functions as a managemant tool to allow trainers to manage those clients and their scheduled sessions in various ways.</p>
                    <ul className="frameworks">
                      <li>React.JS</li>
                      <li>Django</li>
                      <li>Django Rest Framework</li>
                      <li>Google Distance Matrix</li>
                    </ul>
                    <div className="overlay-links">
                      <a class="hover" href="https://github.com/matthew-woodington/ccs-final-project" target='_blank' rel="noreferrer"><FiGithub className='hover-icon' /></a>
                      <a class="hover" href="https://ccs-final-project-woodington.herokuapp.com/" target='_blank' rel="noreferrer"><FiExternalLink className='hover-icon' /></a>
                      <a class="hover" href="https://www.loom.com/share/13395b0c5ab14cf6a1347fd1c836559a" target='_blank' rel="noreferrer"><FiVideo className='hover-icon' /></a>
                    </div>
                  </div>
              </div>
            </div>
    
            <div class="card-content">
                  <h2>REPS Application</h2>
              </div>
            </div>
          </div>
        </li>

        <li className="project">
          <div className="project-card card-even">
            <div class="card">
              <div class="card-img">
                <img className='img' src={newspaper} alt="" />
                <div class="overlay">
                  <div class="overlay-content">
                    <h2>Newspaper Application</h2>
                    <p>This Newspaper Application is a full-stack news article management application. The application allows a user to view news articles as well as create an account and submit their articles for review by an admin that can then choose whether or not to publish those articles.</p>
                    <ul className="frameworks">
                      <li>React.JS</li>
                      <li>Django</li>
                      <li>Django Rest Framework</li>
                    </ul>
                    <div className="overlay-links">
                      <a class="hover" href="https://github.com/matthew-woodington/django-newspaper-app" target='_blank' rel="noreferrer"><FiGithub className='hover-icon' /></a>
                      <a class="hover" href="https://newspaper-app-mwoodington.herokuapp.com/" target='_blank' rel="noreferrer"><FiExternalLink className='hover-icon' /></a>
                    </div>
                  </div>
              </div>
            </div>
    
            <div class="card-content">
                  <h2>Newspaper Application</h2>
              </div>
            </div>
          </div>
          <div className="project-num num-even">
            <span className='num'>02</span><span className='dot'>.</span>
          </div>
        </li>

        <li className="project">
          <div className="project-num">
            <span className='num'>03</span><span className='dot'>.</span>
          </div>
          <div className="project-card">
            <div class="card">
              <div class="card-img">
                <img className='img' src={pixel} alt="" />
                <div class="overlay">
                  <div class="overlay-content">
                    <h2>Pixel Perfect</h2>
                    <p>Pixel Perfect is a website recreation based on a previously existing website. It is created using vanilla HTML and CSS to replicate images of both a desktop and mobile version of the example website.</p>
                    <ul className="frameworks">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                    </ul>
                    <div className="overlay-links">
                      <a class="hover" href="https://github.com/matthew-woodington/pixel-perfect" target='_blank' rel="noreferrer"><FiGithub className='hover-icon' /></a>
                      <a class="hover" href="https://matthew-woodington.github.io/pixel-perfect/" target='_blank' rel="noreferrer"><FiExternalLink className='hover-icon' /></a>
                    </div>
                  </div>
              </div>
            </div>
    
            <div class="card-content">
                  <h2>Pixel Perfect</h2>
              </div>
            </div>
          </div>
        </li>

      </ul>

    {/* mobile */}
      <ul className="project-list-mobile">

        <li className="mobile-project">
          <div className="mobile-num left-num">
            <span className='num-mob'>01</span><span className='dot-mob'>.</span>
          </div>
          <div className="mobile-card">
              <div class="mobile-img">
                <img className='img' src={reps} alt="" />
              </div>
              <div class="mobile-card-info">
                <h2>REPS Application</h2>
                <p>REPS is a full-stack application developed for trainers to customize a profile and market themselves to connect with local clientele. The application also functions as a managemant tool to allow trainers to manage those clients and their scheduled sessions in various ways.</p>
                <ul className="frameworks-mob">
                  <li>React.JS</li>
                  <li>Django</li>
                  <li>Django Rest Framework</li>
                  <li>Google Distance Matrix</li>
                </ul>
                <div className="overlay-links">
                  <a class="hover" href="https://github.com/matthew-woodington/ccs-final-project" target='_blank' rel="noreferrer"><FiGithub className='hover-icon' /></a>
                  <a class="hover" href="https://ccs-final-project-woodington.herokuapp.com/" target='_blank' rel="noreferrer"><FiExternalLink className='hover-icon' /></a>
                  <a class="hover" href="https://www.loom.com/share/13395b0c5ab14cf6a1347fd1c836559a" target='_blank' rel="noreferrer"><FiVideo className='hover-icon' /></a>
                </div>
            </div>
          </div>
        </li>

        <li className="mobile-project">
          <div className="mobile-num right-num">
            <span className='num-mob'>02</span><span className='dot-mob'>.</span>
          </div>
          <div className="mobile-card">
              <div class="mobile-img">
                <img className='img' src={newspaper} alt="" />
              </div>
              <div class="mobile-card-info">
                <h2>Newspaper Application</h2>
                <p>This Newspaper Application is a full-stack news article management application. The application allows a user to view news articles as well as create an account and submit their articles for review by an admin that can then choose whether or not to publish those articles.</p>
                <ul className="frameworks-mob">
                  <li>React.JS</li>
                  <li>Django</li>
                  <li>Django Rest Framework</li>
                </ul>
                <div className="overlay-links">
                  <a class="hover" href="https://github.com/matthew-woodington/django-newspaper-app" target='_blank' rel="noreferrer"><FiGithub className='hover-icon' /></a>
                  <a class="hover" href="https://newspaper-app-mwoodington.herokuapp.com/" target='_blank' rel="noreferrer"><FiExternalLink className='hover-icon' /></a>
                </div>
            </div>
          </div>
        </li>

        <li className="mobile-project">
          <div className="mobile-num left-num">
            <span className='num-mob'>03</span><span className='dot-mob'>.</span>
          </div>
          <div className="mobile-card">
              <div class="mobile-img">
                <img className='img' src={pixel} alt="" />
              </div>
              <div class="mobile-card-info">
                <h2>Pixel Perfect</h2>
                <p>Pixel Perfect is a website recreation based on a previously existing website. It is created using vanilla HTML and CSS to replicate images of both a desktop and mobile version of the example website.</p>
                <ul className="frameworks-mob">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <div className="overlay-links">
                      <a class="hover" href="https://github.com/matthew-woodington/pixel-perfect" target='_blank' rel="noreferrer"><FiGithub className='hover-icon' /></a>
                      <a class="hover" href="https://matthew-woodington.github.io/pixel-perfect/" target='_blank' rel="noreferrer"><FiExternalLink className='hover-icon' /></a>
                </div>
            </div>
          </div>
        </li>

      </ul>

    </section>
  )
}

export default Projects