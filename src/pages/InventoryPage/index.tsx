import { Container, UserInventoryWrapper } from 'src/pages/InventoryPage/styles'
import useInventoryPage from 'src/pages/InventoryPage/useInventoryPage'

import MoneyTable from 'src/components/MoneyTable'
import UserInventory from 'src/components/UserInventory'
import UserItemTicket from 'src/components/UserTickets'

const InventoryPage = (): JSX.Element => {
  const { money } = useInventoryPage()

  return (
    <Container>
      <UserInventoryWrapper>
        <div>
          <MoneyTable money={money} />
        </div>
        <UserInventory />
      </UserInventoryWrapper>
      <UserItemTicket />
    </Container>
  )
}

export default InventoryPage
