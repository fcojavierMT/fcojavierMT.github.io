import './About.css'
import { Image } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { BsLinkedin, BsGithub, BsMailbox } from 'react-icons/bs'
import { Link } from '@chakra-ui/react'

import {
  List,
  ListItem,
} from '@chakra-ui/react'

const links = [
  {
    text: 'Linkedin',
    icon: BsLinkedin,
    href: 'https://es.linkedin.com/in/francisco-javier-mart%C3%ADnez-talavera-ba3a00180'
  },
  {
    text: 'Github',
    icon: BsGithub,
    href: 'https://github.com/fcojavierMT'
  }
]

const listItems = links.map((link) =>
  <ListItem key={link}>
    <Link href={link.href} isExternal>
      <Icon as={link.icon} /> {link.text} 
    </Link>
  </ListItem>
);

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
        <p className='description'>
          I am a software developer with almost 5 years in the software industry.
          <br />
          Specialized in frontend and always eager to learn and improve every day.
        </p>

        <div className='find-me'>
          <List spacing={3}>
            {listItems}
            <ListItem>
              <Icon as={BsMailbox} /> <a href="mailto:fcojavierdev@gmail.com">fcojavierdev@gmail.com </a>
            </ListItem>
          </List>
        </div>
      </div>
    </>
  )
}

export default About
