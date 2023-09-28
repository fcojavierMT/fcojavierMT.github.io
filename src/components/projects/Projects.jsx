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
  Code,
  SimpleGrid,
  Box,
} from '@chakra-ui/react'

import { FaVuejs, FaReact, FaAngular, FaDocker, FaCss3 } from 'react-icons/fa'
import { BsLinkedin, BsGithub, BsMailbox, BsFiletypeScss } from 'react-icons/bs'
import { SiAstro } from 'react-icons/si'
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

const listFronStack = [
  {
    text: 'Vue',
    icon: FaVuejs,
  },
  {
    text: 'React',
    icon: FaReact,
  },
  {
    text: 'Angular',
    icon: FaAngular,
  },
  {
    text: 'Astro',
    icon: SiAstro,
  },
  {
    text: 'PostCss',
    icon: FaCss3,
  },
  {
    text: 'Scss',
    icon: BsFiletypeScss,
  },
  {
    text: 'Django',
    icon: FaDocker,
  },
  {
    text: 'Github',
    icon: BsGithub,
  },
]

const listItems = links.map((link) => (
  <ListItem key={link.text}>
    <Link href={link.href} isExternal>
      <Icon as={link.icon} /> {link.text}
    </Link>
  </ListItem>
))

const frontStack = listFronStack.map((stack) => (
  <Box className="stack" key={stack.text}>
    <Icon as={stack.icon} />
    <span className="stack-name">{stack.text}</span>
  </Box>
))

function Projects() {
  return (
    <section className="projects-section">
      <Tabs>
        <TabList>
          <Tab>Contact</Tab>
          <Tab>Positions</Tab>
          <Tab>
            <Code>Tech Stack</Code>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <section className="find-me">
              <List spacing={3}>
                {listItems}
                <ListItem>
                  <Icon as={BsMailbox} />
                  <a href="mailto:fcojavierdev@gmail.com">
                    fcojavierdev@gmail.com
                  </a>
                </ListItem>
              </List>
            </section>
          </TabPanel>
          <TabPanel>
            <Positions />
          </TabPanel>
          <TabPanel>
            <section className="front-stack">
              <SimpleGrid minChildWidth="150px" spacing="40px">
                {frontStack}
              </SimpleGrid>
            </section>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  )
}

export default Projects
