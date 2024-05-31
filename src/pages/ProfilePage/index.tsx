import {
  Container,
  SkinIcon,
  NickName,
  PlayerInfo,
  ButtonList,
  LasLogin,
  UserContainer,
} from 'src/pages/ProfilePage/styles'
import useProfilePage from 'src/pages/ProfilePage/useProfilePage'

import UserInventory from 'src/components/UserInventory'
import { millisecondsToDate, millisecondsToTime } from 'src/helpers'

const ProfilePage = (): JSX.Element => {
  const {
    user,
    isLoading,
    canvasRef,
    inventoryIsVisible,
    logout,
    openAdvancementsModal,
    useInventoryIsVisible,
  } = useProfilePage()

  return (
    <Container>
      <UserContainer>
        <SkinIcon ref={canvasRef} id="canvas"></SkinIcon>
        <PlayerInfo>
          <NickName>{user.realname}</NickName>
          <ButtonList>
            <button onClick={openAdvancementsModal}>Досягнення</button>
            <button
              onClick={() => {
                useInventoryIsVisible(!inventoryIsVisible)
              }}
            >
              Інвентар
            </button>
            <button disabled={isLoading} onClick={logout}>
              Вийти
            </button>
            <LasLogin>
              <div>Останній вхід </div>
              <div>{millisecondsToDate(user.lastlogin)}</div>
              <div>{millisecondsToTime(user.lastlogin)}</div>
            </LasLogin>
          </ButtonList>
        </PlayerInfo>
      </UserContainer>

      {inventoryIsVisible && <UserInventory />}
    </Container>
  )
}

export default ProfilePage
