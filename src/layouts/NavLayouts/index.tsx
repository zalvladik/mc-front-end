import { Outlet } from 'react-router-dom'

import ProvideModals from 'src/contexts/ModalProvider'

import { Container } from 'src/layouts/NavLayouts/styles'
import Navbar from 'src/components/Navbar'

const NavLayout = (): JSX.Element => {
  return (
    <Container>
      <ProvideModals>
        <Navbar />
        <Outlet />
      </ProvideModals>
    </Container>
  )
}

export default NavLayout
