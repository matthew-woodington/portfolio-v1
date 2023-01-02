import './about.css'
import meJPG from '../../assets/images/IMG_3904-1.JPG'

function About() {
  return (
    <section id="about" className='main-section about'>
      <h1 className="about-title">// About Me //</h1>
      <div className="about-content">
        <section className="text">
          <p>Hello, I'm <span className='highlight'>Matthew</span> or <span className='highlight'>Matt</span>! I am a recent Coding Bootcamp graduate that decided to switch careers from fitness to software development.</p>
          <p>Throughout my time in code school along with an informal background around graphic design, I developed a passion for front-end development as well as UI/UX design.</p>
          <p>I am currently working to expand and hone my front-end development and design skills.</p>
          <p>Technologies I have recently worked with:</p>
          <ul className='tech-list'>
            <li className='tech-item'>React</li>
            <li className='tech-item'>Django</li>
            <li className='tech-item'>JavaScript</li>
            <li className='tech-item'>Python</li>
            <li className='tech-item'>HTML</li>
            <li className='tech-item'>CSS</li>
            <li className='tech-item'>Git</li>
          </ul>
        </section>
        <section className="image-container">
          <img className='image' src={meJPG} alt="" />
        </section>
      </div>
    </section>
  )
}

export default About