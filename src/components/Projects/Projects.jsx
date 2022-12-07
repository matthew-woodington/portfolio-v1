import './projects.css'
import reps from '../../assets/images/reps.png'

function Projects() {

  return (
    <section id='projects' className='main-section'>
      <ul className="cards" id='cards'>
        <li className="card">
          <div className="card-content">
            <div className="card-image">
              <img src="" alt="" />
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3><a href="https://ccs-final-project-woodington.herokuapp.com/">REPS Training Tool</a></h3>
                  <h4>Full stack application developed for personal trainers to market themselves to potential clients in their area, and manage those clients and their sessions.</h4>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Projects
