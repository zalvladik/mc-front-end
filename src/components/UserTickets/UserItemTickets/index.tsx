import InformationButton from 'src/components/InformationButton'
import Skeleton from 'src/components/Skeleton'
import {
  Container,
  TicketIdWrapper,
} from 'src/components/UserTickets/UserItemTickets/styles'
import { useUserItemTickets } from 'src/components/UserTickets/UserItemTickets/useUserItemTickets'

const UserItemTickets = (): JSX.Element => {
  const { data, isLoading, showInfo, openModal } = useUserItemTickets()

  return (
    <Container className={`itemTicket${data.length}`}>
      <Skeleton
        isDataExist={data.length}
        isLoading={isLoading}
        emptyText="Квитки відсутні"
      >
        {data.map(({ id }) => {
          return (
            <button
              key={id}
              onClick={() => openModal(id)}
              style={{
                backgroundImage: `url('/assets/item_ticket_vertical.png')`,
              }}
            >
              <TicketIdWrapper>
                <div>{id}</div>
              </TicketIdWrapper>
            </button>
          )
        })}

        <h1>Квитки {data.length}/5</h1>
      </Skeleton>
      <InformationButton
        onClick={() => {
          showInfo()
        }}
        style={{ left: 0, bottom: 0 }}
      />
    </Container>
  )
}

export default UserItemTickets
