import Main from 'src/pages/HomePage/screens/Main'
import Advantages from 'src/pages/HomePage/screens/Advantages'
import Store from 'src/pages/HomePage/screens/Store'
import Social from 'src/pages/HomePage/screens/Social'

import { Container } from 'src/pages/HomePage/styles'

const HomePage = (): JSX.Element => {
  return (
    <Container>
      <Main />
      <Advantages />
      <Store />
      <Social />
    </Container>
  )
}

export default HomePage
