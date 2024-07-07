import InformationButton from 'src/components/InformationButton'
import Skeleton from 'src/components/Skeleton'
import {
  Container,
  ShulkerIdWrapper,
} from 'src/components/UserTickets/UserShulkers/styles'
import { useShulkers } from 'src/components/UserTickets/UserShulkers/useShulkers'

const UserShulker = (): JSX.Element => {
  const { data, isLoading, showInfo, shulkerIconRefs, openModal } = useShulkers()

  const size = 80 + 160 / data.length
  const fontSize = 30 + 30 / data.length

  return (
    <Container className={`itemTicket${data.length}`}>
      <Skeleton
        isDataExist={data.length}
        isLoading={isLoading}
        emptyText="Шалкери відсутні"
      >
        {data.map(({ id, type, display_name }, index) => {
          return (
            <button
              ref={el => {
                shulkerIconRefs.current[index] = el
              }}
              key={id}
              onClick={() => openModal(id)}
              style={{
                backgroundImage: `url(/assets/shulkers/${type}.webp)`,
                width: size,
                height: size,
                whiteSpace: 'nowrap',
              }}
              data-display-name={display_name}
            >
              <ShulkerIdWrapper>
                <div style={{ fontSize }}>{id}</div>
              </ShulkerIdWrapper>
            </button>
          )
        })}
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

export default UserShulker
