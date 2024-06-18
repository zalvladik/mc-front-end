import InformationButton from 'src/components/InformationButton'
import Skeleton from 'src/components/Skeleton'
import {
  Container,
  ContainerWrapper,
  TicketIdWrapper,
} from 'src/components/UserItemTicket/styles'
import { useUserItemTicket } from 'src/components/UserItemTicket/useUserItemTicket'

const UserItemTicket = (): JSX.Element => {
  const { data, openItemsInTicketModal, showInfo, isLoading } = useUserItemTicket()

  return (
    <ContainerWrapper>
      <Container className={`itemTicket${data.length}`}>
        <Skeleton
          isDataExist={data.length}
          isLoading={isLoading}
          emptyText="Квитки відсутні"
        >
          {data.map(({ id }) => (
            <button key={id} onClick={() => openItemsInTicketModal(id)}>
              <TicketIdWrapper>
                <div>{id}</div>
              </TicketIdWrapper>
            </button>
          ))}

          <h1>Квитки {data.length}/5</h1>

          <InformationButton
            onClick={() => {
              showInfo()
            }}
            style={{ left: 0, bottom: 0 }}
          />
        </Skeleton>
      </Container>
    </ContainerWrapper>
  )
}

export default UserItemTicket
