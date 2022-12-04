import './projects.css'
import reps from '../../assets/images/reps.png'

function Projects() {
  return (
    <section id='projects' className='main-section'>
      <ul className="project-list">
        <li className="project-container">
          <div className="ex-image-container">
            <a className='image-link' href="https://ccs-final-project-woodington.herokuapp.com/">
              <img src={reps} alt="" className="ex-image" />
            </a>
          </div>
          <div className="project-info">
            <a href="https://ccs-final-project-woodington.herokuapp.com/"><h2>REPS Personal Training Tool</h2></a>
            <p>Reps is a full stack application developed for personal trainers to market themselves to potential clients in their area, and manage those clients and their sessions.</p>
            <ul>
              <li>React</li>
              <li>Django</li>
              <li>Django Rest Framework</li>
              <li>Google Distance Matrix API</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Projects
