import { Heading, Icon, Container, Link, ScaleFade } from '@chakra-ui/react'

import './About.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const links = [
  {
    text: 'Linkedin',
    icon: BsLinkedin,
    href: 'https://es.linkedin.com/in/francisco-javier-mart%C3%ADnez-talavera-ba3a00180',
  },
  {
    text: 'Github',
    icon: BsGithub,
    href: 'https://github.com/fcojavierMT',
  },
]

const socials = links.map(link => (
  <Link key={link} href={link.href} isExternal>
    <Icon as={link.icon} boxSize={10} marginRight="4" />
  </Link>
))

function About() {
  return (
    <section className="about-section">
      <Heading as="h3" size="lg" margin="5">
        Hello! <span className="wave">👋</span>
      </Heading>

      <p>My name is Francisco Javier Martínez Talavera, but everybody just calls me Talavera.</p>
      <p className="description">
        I am currently working as a Frontend Developer, specializing in Vue.js. Additionally, I have
        experience with other frontend frameworks and libraries, including Angular and React.
      </p>

      <ScaleFade initialScale={0.9} in={true}>
        <Container className="socials" margin="10">
          {socials}
        </Container>
      </ScaleFade>
    </section>
  )
}

export default About
