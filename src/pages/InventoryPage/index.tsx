import { Container, UserInventoryWrapper } from 'src/pages/InventoryPage/styles'

import MoneyTable from 'src/components/MoneyTable'
import UserInventory from 'src/components/UserInventory'
import UserItemTicket from 'src/components/UserItemTicket'

const InventoryPage = (): JSX.Element => {
  return (
    <Container>
      <UserInventoryWrapper>
        <MoneyTable />
        <UserInventory />
      </UserInventoryWrapper>
      <UserItemTicket />
    </Container>
  )
}

export default InventoryPage
