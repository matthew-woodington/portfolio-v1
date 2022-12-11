import './projects.css'
import reps from '../../assets/images/reps.png'
import newspaper from '../../assets/images/newspaper.png'
import pixel from '../../assets/images/pixel-perfect.png'
import {FiGithub} from 'react-icons/fi'
import {FiExternalLink} from 'react-icons/fi'

function Projects() {

  return (
    <section id='projects' className='main-section'>
      <h1 className="projects-title">Highlighted Projects</h1>
      <ul className="project-list">
        <li className="project">
          <div className="project-info">
            <h4 className='project-title'>REPS Application</h4>
            <p>REPS is a full stack application developed with ReactJS, Django, Django Rest Framework, React Bootstrap, and Google Maps Distance Matrix third party API. It is created for trainers to customize a profile and market themselves to local clientele as well as manage those clients and their scheduled sessions.</p>
            <ul className="project-links">
              <li className="project-icon"><a href="https://github.com/matthew-woodington/ccs-final-project" target='_blank'><FiGithub /></a></li>
              <li className="project-icon"><a href="https://ccs-final-project-woodington.herokuapp.com/" target='_blank'><FiExternalLink /></a></li>
            </ul>
          </div>
          <div className="project-image">
            <a href="https://ccs-final-project-woodington.herokuapp.com/" target='_blank'><img src={reps} alt="" className="img" /></a>
          </div>
        </li>
        <li className="project">
          <div className="project-info info-right">
            <h4 className='project-title title-right'>Newspaper Application</h4>
            <p>This Newspaper Application is a full-stack news article management application developed with React JS, Django, and Django Rest Framework. The application allows a user to view news articles as well as create an account and submit their own articles for review by an admin that can then choose whether or not to publish those articles.</p>
            <ul className="project-links link-right">
              <li className="project-icon"><a href="https://github.com/matthew-woodington/django-newspaper-app" target='_blank'><FiGithub /></a></li>
              <li className="project-icon"><a href="https://newspaper-app-mwoodington.herokuapp.com/" target='_blank'><FiExternalLink /></a></li>
            </ul>
          </div>
          <div className="project-image image-left">
            <a href="https://newspaper-app-mwoodington.herokuapp.com/" target='_blank'><img src={newspaper} alt="" className="img" /></a>
          </div>
        </li>
        <li className="project">
          <div className="project-info">
            <h4 className='project-title'>Pixel Perfect</h4>
            <p>Pixel Perfect is a website recreation that uses base HTML and CSS to replicate an image of a pre-existing website in both desktop and mobile views.</p>
            <ul className="project-links">
              <li className="project-icon"><a href="https://github.com/matthew-woodington/pixel-perfect" target='_blank'><FiGithub /></a></li>
              <li className="project-icon"><a href="https://matthew-woodington.github.io/pixel-perfect/" target='_blank'><FiExternalLink /></a></li>
            </ul>
          </div>
          <div className="project-image">
            <a href="https://matthew-woodington.github.io/pixel-perfect/" target='_blank'><img src={pixel} alt="" className="img" /></a>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Projects