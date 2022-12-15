import './homepage.css'
import arrow from '../../assets/images/down-arrow-arrows-svgrepo-com.svg'
import { useState, useEffect } from 'react'

function HomePage() {

  return (
    <section id='home' className='main-section'>
      <p className="intro-text">hello, my name is</p>
      <h1 className="my-name lg-head">Matthew Woodington.</h1>
      <h5 className='title lg-head'>I am a Developer.</h5>
      <p className="description">I am a software developer based out of the Carolinas with a passion for front end development and design.</p>
    </section>
  )
}

export default HomePage
