import { Outlet } from 'react-router-dom'
import ProvideItemHoverDescription from 'src/contexts/ItemHoverDescriptionProvider'
import ProvideModals from 'src/contexts/ModalProvider'
import { Container } from 'src/layouts/NavLayouts/styles'

import Navbar from 'src/components/Navbar'

const NavLayout = (): JSX.Element => {
  return (
    <Container>
      <ProvideItemHoverDescription>
        <ProvideModals>
          <Navbar />
          <Outlet />
        </ProvideModals>
      </ProvideItemHoverDescription>
    </Container>
  )
}

export default NavLayout
