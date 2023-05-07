import { Button, Icon, useColorMode } from '@chakra-ui/react'
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs'
import './Navbar.css'

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const icon = colorMode === 'light' ? BsFillMoonStarsFill : BsSun

  return (
    <header className="header">
      <Button onClick={toggleColorMode} aria-label="Color Mode">
        <Icon as={icon} />
      </Button>
    </header>
  )
}

export default Navbar
