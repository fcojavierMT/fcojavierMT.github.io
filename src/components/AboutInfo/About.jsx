import './About.css'
import { Image } from '@chakra-ui/react'

function About() {
  return (
    <>
      <div className='about-page'>
        <Image
          borderRadius='full'
          boxSize='150px'
          src='https://avatars.githubusercontent.com/u/25898309?v=4'
          alt='Me!'
        />
        <h1 className='title'>Francisco Javier Martínez Talavera</h1>
        <p className='occupation'>Frontend Developer</p>
      </div>
    </>
  )
}

export default About
