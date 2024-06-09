import InformationButton from 'src/components/InformationButton'
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
        style={{ height: data.length ? 500 : 170 }}
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
          <h1>Квитки {data.length}/5</h1>
        ) : (
          <Empty>
            <h1>У вас наразі</h1>
            <h1>відсутні квитки</h1>
            <h1>0/5</h1>
          </Empty>
        )}

        <InformationButton style={{ left: 0, bottom: 0 }} />
      </Container>
    </ContainerWrapper>
  )
}

export default UserItemTicket
