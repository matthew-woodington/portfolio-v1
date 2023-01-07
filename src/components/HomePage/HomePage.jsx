import './homepage.css'
import { motion } from 'framer-motion';

function HomePage() {

  return (
    <section id='home' className='main-section'>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        className="intro-text"
        >
        hello, my name is
      </motion.p>
      <motion.h1
        initial={{ y: 50 ,opacity: 0 }}
        animate={{ y: 0 ,opacity: 1 }}
        transition={{ duration: 1, ease: 'easeIn', delay: 1 }}
        className="my-name lg-head"
        >
        Matthew Woodington.
      </motion.h1>
      <motion.h5
        initial={{ y: 50 ,opacity: 0 }}
        animate={{ y: 0 ,opacity: 1 }}
        transition={{ duration: 1, ease: 'easeIn', delay: 1.2 }} 
        className='title lg-head'
        >
        I am a Developer.
      </motion.h5>
      <motion.p 
        initial={{ y: 50 ,opacity: 0 }}
        animate={{ y: 0 ,opacity: 1 }}
        transition={{ duration: 1, ease: 'easeIn', delay: 1.4 }}
        className="description"
        >
        I am a software developer based out of the Carolinas with a passion for front-end development and design.
      </motion.p>
    </section>
  )
}

export default HomePage
