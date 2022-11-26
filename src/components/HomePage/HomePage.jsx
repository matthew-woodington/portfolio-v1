import './homepage.css'
import arrow from '../../assets/images/down-arrow-arrows-svgrepo-com.svg'
import { useState, useEffect } from 'react'

function HomePage() {
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => {
    console.log(window.scrollY)
    setOffsetY(window.scrollY)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [window.scrollY])


  return (
    <section id='home' className='main-section'>
      <h5 className="intro-text">hello, my name is</h5>
      <h1 className="my-name lg-head">Matthew Woodington.</h1>
      <h5 className='title lg-head'>I am a Developer.</h5>
      <p className="description">I am a recent Coding Bootcamp graduate who developed a passion for front-end software development. I enjoy creating clean and intuitive UI using a design oriented outlook. I am currently focused on expanding my front-end toolset and refining my abilities.</p>
    </section>
  )
}

export default HomePage
