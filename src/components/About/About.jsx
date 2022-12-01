import './about.css'
import mePNG from '../../assets/images/portfolio-pic.png'

function About() {
  return (
    <section id="about" className='main-section about'>
      <h1 className="about-title">I love building things.</h1>
      <div className="about-content">
        <section className="text">
          <h5 className='intro'>About Me</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <section className="image-container">
          <img className='image' src={mePNG} alt="" />
        </section>
      </div>
    </section>
  )
}

export default About
