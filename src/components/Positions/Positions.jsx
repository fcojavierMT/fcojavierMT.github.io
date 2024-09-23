import './Positions.css'

import { Heading, Text, Tag, TagLabel, TagLeftIcon, Image } from '@chakra-ui/react'

import { FaVuejs, FaReact, FaAngular, FaCss3, FaPython, FaGithub, FaDocker } from 'react-icons/fa'
import { BsFiletypeScss } from 'react-icons/bs'

import Deka from '../../assets/deka.jpg'
import Sopra from '../../assets/sopra.jpg'
import { DiDjango, DiIonic } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa6'
import { RiJavascriptFill } from 'react-icons/ri'

const cards = [
  {
    company: 'Dekalabs',
    img: Deka,
    description:
      'Building responsive and interactive user interfaces using Vue 3 and related technologies (Vuex, Router, etc..)',
    years: '2021 - (Now)',
    tags: [
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
        text: 'PostCss',
        icon: FaCss3,
      },
      {
        text: 'Scss',
        icon: BsFiletypeScss,
      },
      {
        text: 'Python',
        icon: FaPython,
      },
      {
        text: 'Django',
        icon: DiDjango,
      },
      {
        text: 'Docker',
        icon: FaDocker,
      },
    ],
  },
  {
    company: 'Sopra Steria',
    img: Sopra,
    description:
      'Building web and mobile applications with Ionic and Angular. Collaborating with cross-functional teams',
    years: '2018 - 2021',
    tags: [
      {
        text: 'Angular',
        icon: FaAngular,
      },
      {
        text: 'Ionic',
        icon: DiIonic,
      },
      {
        text: 'Vue',
        icon: FaVuejs,
      },
      {
        text: 'Github',
        icon: FaGithub,
      },
      {
        text: 'Node',
        icon: FaNodeJs,
      },
      {
        text: 'Javacript',
        icon: RiJavascriptFill,
      },
    ],
  },
]

const positionsList = cards.map(card => (
  <section key={card.company} className="timeline-item">
    <section className="timeline-content">
      <Heading size="md">{card.company}</Heading>

      <Text py="2">{card.description}</Text>

      <p>{card.years}</p>

      <Image maxW={{ base: '65px' }} src={card.img} rounded="10" marginTop="5" marginBottom="5" />

      <section className="tags">
        {card.tags.map(tag => (
          <Tag className="tag" key={tag.text} variant="subtle">
            <TagLeftIcon boxSize="12px" as={tag.icon} />
            <TagLabel>{tag.text}</TagLabel>
          </Tag>
        ))}
      </section>
    </section>
  </section>
))

function Positions() {
  return <section className="positions">{positionsList}</section>
}

export default Positions
