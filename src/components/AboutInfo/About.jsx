import './About.css'
import { Image } from '@chakra-ui/react'

function About() {
  return (
    <section className="about-section">
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://avatars.githubusercontent.com/u/25898309?v=4"
        alt="Me!"
      />
      <h1 className="title">Francisco Javier Martínez Talavera</h1>
      <p className="occupation">Frontend Developer</p>
      <p className="description">
        I am a software developer with almost 5 years in the software industry.
        <br />
        Specialized in frontend and always eager to learn and improve every day.
      </p>
    </section>
  )
}

export default About
