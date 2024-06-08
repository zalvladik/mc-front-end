import {
  Container,
  ContainerWrapper,
  Empty,
  TicketIdWrapper,
} from 'src/components/UserItemTicket/styles'
import { useUserItemTicket } from 'src/components/UserItemTicket/useUserItemTicket'

const UserItemTicket = (): JSX.Element => {
  const { data, openItemsInTicketModal } = useUserItemTicket()

  return (
    <ContainerWrapper>
      <Container
        style={{ height: data.length ? 500 : 150 }}
        className={`itemTicket${data.length}`}
      >
        {data.map(({ id }) => (
          <button key={id} onClick={() => openItemsInTicketModal(id)}>
            <TicketIdWrapper>
              <div>{id}</div>
            </TicketIdWrapper>
          </button>
        ))}

        {data.length ? (
          <h1>Квитки</h1>
        ) : (
          <Empty>
            <h1>У вас наразі</h1>
            <h1>відсутні квитки</h1>
          </Empty>
        )}
      </Container>
    </ContainerWrapper>
  )
}

export default UserItemTicket
