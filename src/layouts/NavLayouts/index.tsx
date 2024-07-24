import { Outlet } from 'react-router-dom'
import { Container } from 'src/layouts/NavLayouts/styles'

import Navbar from 'src/components/Navbar'

const NavLayout = (): JSX.Element => {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  )
}

export default NavLayout
