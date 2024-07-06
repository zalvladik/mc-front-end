import DefaultButton from 'src/components/DefaultButton'
import { ContainerWrapper, SwitcherWrapper } from 'src/components/UserTickets/styles'
import UserItemTickets from 'src/components/UserTickets/UserItemTickets'
import UserShulker from 'src/components/UserTickets/UserShulkers'
import { useUserTickets } from 'src/components/UserTickets/useUserTickets'

const UserItemTicket = (): JSX.Element => {
  const { isShulkerFragment, setIsShulkerFragment } = useUserTickets()

  return (
    <ContainerWrapper>
      {isShulkerFragment ? <UserShulker /> : <UserItemTickets />}

      <SwitcherWrapper>
        <DefaultButton
          disabled={!isShulkerFragment}
          onClick={() => setIsShulkerFragment(false)}
        >
          Квитки
        </DefaultButton>
        <DefaultButton
          disabled={isShulkerFragment}
          onClick={() => setIsShulkerFragment(true)}
        >
          Шалкери
        </DefaultButton>
      </SwitcherWrapper>
    </ContainerWrapper>
  )
}

export default UserItemTicket
