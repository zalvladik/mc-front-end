import { Container, TicketIdWrapper } from 'src/components/UserItemTicket/styles'
import { useUserItemTicket } from 'src/components/UserItemTicket/useUserItemTicket'

const UserItemTicket = (): JSX.Element => {
  const { data, openItemsInTicketModal } = useUserItemTicket()

  return (
    <Container className={`itemTicket${data.length}`}>
      {data.map(({ id }) => (
        <button key={id} onClick={() => openItemsInTicketModal(id)}>
          <TicketIdWrapper>
            <div>{id}</div>
          </TicketIdWrapper>
        </button>
      ))}
      <h1>Квитки</h1>
    </Container>
  )
}

export default UserItemTicket
