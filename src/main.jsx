import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, Text } from '@chakra-ui/react'
import App from './App.jsx'
import theme from './theme/theme.js'
import Navbar from './components/Navbar/Navbar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Navbar />
      <App />
      <Text align="center" marginTop="10">
        © 2024 talavera
      </Text>
    </ChakraProvider>
  </React.StrictMode>,
)
