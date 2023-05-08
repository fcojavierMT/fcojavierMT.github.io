import {   Stack,
  CardBody,
  Heading,
  CardFooter,
  Text,
  Image,
  Card } from '@chakra-ui/react'

import Deka from '../../assets/deka.jpg'
import Sopra from '../../assets/sopra.jpg'

const cards = [
  {
    company: 'Dekalabs',
    img: Deka,
    description: 'Building responsive and interactive user interfaces using Vue 3 and related technologies (Vuex, Router, etc..)',
    years: '2021 - (Current)'
  },
  {
    company: 'Sopra Steria',
    img: Sopra,
    description: 'Building web and mobile applications with Ionic and Angular. Collaborating with cross-functional teams',
    years: '2018 - 2021'
  },
]

const listCards = cards.map((card) => (
  <Card
    key={card.company}
    direction={{ base: 'column', sm: 'row' }}
    overflow="hidden"
    variant="outline"
    className='card-position'
    style={{ marginTop: 20 }}
  >
    <Image
      objectFit="cover"
      maxW={{ base: '100%', sm: '200px' }}
      src={card.img}
      alt="Dekalabs"
    />

    <Stack>
      <CardBody>
        <Heading size="md">{card.company}</Heading>

        <Text py="2">
          {card.description}
        </Text>
      </CardBody>

      <CardFooter>
        <p>{card.years}</p>
      </CardFooter>
    </Stack>
  </Card>
))

function Positions() {
  return (
    <section className="positions">
      {listCards}
    </section>
  )
}

export default Positions
