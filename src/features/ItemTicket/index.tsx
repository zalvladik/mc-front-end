import { Container, ItemTicketIdWrapper } from 'src/features/ItemTicket/styles'
import type { ItemTicketProps } from 'src/features/ItemTicket/types'
import { useItemTicket } from 'src/features/ItemTicket/useItemTicket'

const ItemTicket = ({ ticketId }: ItemTicketProps): JSX.Element | null => {
  const { setIsVisible, isVisible } = useItemTicket(ticketId)

  return (
    <Container
      style={{ opacity: isVisible && ticketId ? 1 : 0 }}
      onClick={() => setIsVisible(false)}
    >
      <ItemTicketIdWrapper>
        <div>{ticketId}</div>
      </ItemTicketIdWrapper>
    </Container>
  )
}

export default ItemTicket
