import { millisecondsToDate, millisecondsToTime } from 'src/helpers'
import {
  ButtonList,
  Container,
  LasLogin,
  NickName,
  PlayerInfo,
  UserContainer,
  UserInventoryWrapper,
} from 'src/pages/ProfilePage/styles'
import useProfilePage from 'src/pages/ProfilePage/useProfilePage'

import MoneyTable from 'src/components/MoneyTable'
import SimpleButton from 'src/components/SimpleButton'
import SkinComponent from 'src/components/SkinComponent'
import UserInventory from 'src/components/UserInventory'
import UserItemTicket from 'src/components/UserItemTicket'

const ProfilePage = (): JSX.Element => {
  const {
    user,
    isLoading,
    inventoryState,
    itemTicketState,
    logout,
    openAdvancementsModal,
    setInventoryState,
    setItemTicketState,
  } = useProfilePage()

  const renderComponents = (): JSX.Element => {
    if (inventoryState.count > itemTicketState.count) {
      return (
        <>
          {inventoryState.isVisible && (
            <UserInventoryWrapper>
              <MoneyTable />
              <UserInventory />
            </UserInventoryWrapper>
          )}
          {itemTicketState.isVisible && <UserItemTicket />}
        </>
      )
    }

    return (
      <>
        {itemTicketState.isVisible && <UserItemTicket />}
        {inventoryState.isVisible && (
          <UserInventoryWrapper>
            <MoneyTable />
            <UserInventory />
          </UserInventoryWrapper>
        )}
      </>
    )
  }

  return (
    <Container>
      <UserContainer>
        <SkinComponent />
        <PlayerInfo>
          <NickName>{user.realname}</NickName>
          <ButtonList>
            <SimpleButton onClick={openAdvancementsModal}>Досягнення</SimpleButton>

            <SimpleButton
              style={{ opacity: inventoryState.isVisible ? 0.6 : 1 }}
              onClick={() => {
                setInventoryState({
                  isVisible: !inventoryState.isVisible,
                  count: itemTicketState.count + 1,
                })
              }}
            >
              Інвентар
            </SimpleButton>

            <SimpleButton
              style={{ opacity: itemTicketState.isVisible ? 0.6 : 1 }}
              onClick={() => {
                setItemTicketState({
                  isVisible: !itemTicketState.isVisible,
                  count: inventoryState.count + 1,
                })
              }}
            >
              Квитки
            </SimpleButton>

            <SimpleButton disabled={isLoading} onClick={logout}>
              Вийти
            </SimpleButton>
          </ButtonList>

          <LasLogin>
            <div>Останній вхід </div>
            <div>{millisecondsToDate(user.lastlogin)}</div>
            <div>{millisecondsToTime(user.lastlogin)}</div>
          </LasLogin>
        </PlayerInfo>
      </UserContainer>

      {renderComponents()}
    </Container>
  )
}

export default ProfilePage
