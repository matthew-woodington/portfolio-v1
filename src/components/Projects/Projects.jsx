import './projects.css'
import reps from '../../assets/images/reps.png'

function Projects() {

  return (
    <section id='projects' className='main-section'>
      <ul className="project-list">
        <li className="project">
          <div className="project-info">
            <h4>REPS Application</h4>
            <p>Full stack application built using React.js, React-Bootstrap, Python with Django, Django Rest Framework, and Google Maps Distance Matrix as a 3rd party API</p>
          </div>
          <div className="project-image">
            <a href=""><img src={reps} alt="" className="img" /></a>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Projects
