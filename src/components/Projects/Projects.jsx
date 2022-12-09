import './projects.css'
import reps from '../../assets/images/reps.png'
import newspaper from '../../assets/images/newspaper.png'
import pixel from '../../assets/images/pixel-perfect.png'
import {FiGithub} from 'react-icons/fi'
import {FiExternalLink} from 'react-icons/fi'

function Projects() {

  return (
    <section id='projects' className='main-section'>
      <ul className="project-list">
        <li className="project">
          <div className="project-info">
            <h4 className='project-title'>REPS Application</h4>
            <p>Full stack application built using React.js, React-Bootstrap, Python with Django, Django Rest Framework, and Google Maps Distance Matrix as a 3rd party API</p>
            <ul className="project-links">
              <li className="project-icon"><a href=""><FiGithub /></a></li>
              <li className="project-icon"><a href=""><FiExternalLink /></a></li>
            </ul>
          </div>
          <div className="project-image">
            <a href=""><img src={reps} alt="" className="img" /></a>
          </div>
        </li>
        <li className="project">
          <div className="project-info info-right">
            <h4 className='project-title title-right'>REPS Application</h4>
            <p>Full stack application built using React.js, React-Bootstrap, Python with Django, Django Rest Framework, and Google Maps Distance Matrix as a 3rd party API</p>
            <ul className="project-links">
              <li className="project-icon"><a href=""><FiGithub /></a></li>
              <li className="project-icon"><a href=""><FiExternalLink /></a></li>
            </ul>
          </div>
          <div className="project-image image-left">
            <a href=""><img src={newspaper} alt="" className="img" /></a>
          </div>
        </li>
        <li className="project">
          <div className="project-info">
            <h4 className='project-title'>REPS Application</h4>
            <p>Full stack application built using React.js, React-Bootstrap, Python with Django, Django Rest Framework, and Google Maps Distance Matrix as a 3rd party API</p>
            <ul className="project-links">
              <li className="project-icon"><a href=""><FiGithub /></a></li>
              <li className="project-icon"><a href=""><FiExternalLink /></a></li>
            </ul>
          </div>
          <div className="project-image">
            <a href=""><img src={pixel} alt="" className="img" /></a>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Projects