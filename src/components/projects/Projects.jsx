import './Projects.css'
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Link,
  ListItem,
  Icon,
  List,

} from '@chakra-ui/react'

import { BsLinkedin, BsGithub, BsMailbox } from 'react-icons/bs'
import Positions from '../Positions/Positions'


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

const listItems = links.map((link) => (
  <ListItem key={link.text}>
    <Link href={link.href} isExternal>
      <Icon as={link.icon} /> {link.text}
    </Link>
  </ListItem>
))

function Projects() {
  return (
    <section className="projects-section">
      <Tabs>
        <TabList>
          <Tab>Contact</Tab>
          <Tab>Positions</Tab>
          <Tab isDisabled>Social (Soon)</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <section className="find-me">
              <List spacing={3}>
                {listItems}
                <ListItem>
                  <Icon as={BsMailbox} />{' '}
                  <a href="mailto:fcojavierdev@gmail.com">
                    fcojavierdev@gmail.com{' '}
                  </a>
                </ListItem>
              </List>
            </section>
          </TabPanel>
          <TabPanel>
            <Positions/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  )
}

export default Projects
