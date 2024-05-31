import { useNavBar } from 'src/components/Navbar/useNavbar'
import { RoutesPath } from 'src/router/routes'

import {
  Header,
  HeaderContainer,
  NavList,
  ButtonBack,
} from 'src/components/Navbar/styles'

const Navbar = (): JSX.Element => {
  const { navigate, isScrollingUp, currentPath, isProfilePage } = useNavBar()

  return (
    <Header className={isScrollingUp ? '' : 'header hidden'}>
      <HeaderContainer>
        {currentPath === '/' ? (
          <img src="/assets/logo.svg" alt="header logo" />
        ) : (
          <ButtonBack onClick={() => navigate('/')}>
            <img src="/assets/logo.svg" alt="header logo" />
          </ButtonBack>
        )}

        <div>
          <NavList>
            <p
              style={{
                opacity: isProfilePage ? 1 : 0.5,
              }}
              aria-disabled
              onClick={() =>
                isProfilePage ? undefined : navigate(RoutesPath.PROFILE)
              }
            >
              Кабінет
            </p>
            <p
              style={{ opacity: currentPath === RoutesPath.RULES ? 1 : 0.5 }}
              aria-disabled
              onClick={() =>
                currentPath === RoutesPath.RULES
                  ? undefined
                  : navigate(RoutesPath.RULES)
              }
            >
              Правила
            </p>
            <p
              style={{ opacity: currentPath === RoutesPath.WIKI ? 1 : 0.5 }}
              onClick={() =>
                currentPath === RoutesPath.WIKI
                  ? undefined
                  : navigate(RoutesPath.WIKI)
              }
            >
              Wiki
            </p>
          </NavList>
        </div>
      </HeaderContainer>
    </Header>
  )
}

export default Navbar
