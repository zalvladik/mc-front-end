import {
  ButtonList,
  Container,
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
          <NickName>{user.username}</NickName>
          <ButtonList>
            <DefaultButton onClick={openAdvancementsModal}>Досягнення</DefaultButton>

            <DefaultButton disabled={isLoading} onClick={() => {}}>
              VIP
            </DefaultButton>

            <DefaultButton disabled={isLoading} onClick={logout}>
              Вийти
            </DefaultButton>
          </ButtonList>
        </PlayerInfo>
      </UserContainer>
    </Container>
  )
}

export default ProfilePage
