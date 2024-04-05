import { ChakraProvider } from '@chakra-ui/react'
import Main from '../pages/Main/Main'
import './styles/App.scss'
function App() {

  return (
    <ChakraProvider>  
      <Main></Main>
    </ChakraProvider>
  )
}

export default App
