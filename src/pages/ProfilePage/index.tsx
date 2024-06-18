import { millisecondsToDate, millisecondsToTime } from 'src/helpers'
import {
  ButtonList,
  Container,
  LasLogin,
  NickName,
  PlayerInfo,
  UserContainer,
} from 'src/pages/ProfilePage/styles'
import useProfilePage from 'src/pages/ProfilePage/useProfilePage'

import DefaultButton from 'src/components/DefaultButton'
import SkinComponent from 'src/components/SkinComponent'

const ProfilePage = (): JSX.Element => {
  const { user, isLoading, logout, openAdvancementsModal } = useProfilePage()

  return (
    <Container>
      <UserContainer>
        <SkinComponent />
        <PlayerInfo>
          <NickName>{user.realname}</NickName>
          <ButtonList>
            <DefaultButton onClick={openAdvancementsModal}>Досягнення</DefaultButton>

            <DefaultButton disabled={isLoading} onClick={logout}>
              Вийти
            </DefaultButton>
          </ButtonList>

          <LasLogin>
            <div>Останній вхід </div>
            <div>{millisecondsToDate(user.lastlogin)}</div>
            <div>{millisecondsToTime(user.lastlogin)}</div>
          </LasLogin>
        </PlayerInfo>
      </UserContainer>
    </Container>
  )
}

export default ProfilePage
