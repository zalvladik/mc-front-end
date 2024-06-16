import { RoutesPath } from 'src/router/routes'

import {
  ButtonBack,
  Header,
  HeaderContainer,
  NavList,
} from 'src/components/Navbar/styles'
import { useNavBar } from 'src/components/Navbar/useNavbar'

const Navbar = (): JSX.Element => {
  const { navigate, isScrollingUp, currentPath, isProfilePage, isSuccess } =
    useNavBar()

  return (
    <Header className={isScrollingUp ? '' : 'header hidden'}>
      <HeaderContainer>
        <ButtonBack
          onClick={() => {
            if (currentPath !== '/') navigate('/')
          }}
        >
          <img src="/assets/logo.svg" alt="header logo" />
        </ButtonBack>

        <div>
          <NavList>
            <button
              style={{
                opacity: isProfilePage ? 1 : 0.5,
              }}
              aria-disabled
              onClick={() =>
                !isSuccess
                  ? navigate(RoutesPath.SIGN_IN)
                  : isProfilePage
                    ? undefined
                    : navigate(RoutesPath.PROFILE)
              }
            >
              Кабінет
            </button>
            {isSuccess && (
              <button
                style={{ opacity: currentPath === RoutesPath.INVENTORY ? 1 : 0.5 }}
                aria-disabled
                onClick={() =>
                  currentPath === RoutesPath.INVENTORY
                    ? undefined
                    : navigate(RoutesPath.INVENTORY)
                }
              >
                Інвентар
              </button>
            )}
            {isSuccess && (
              <button
                style={{ opacity: currentPath === RoutesPath.AUCTION ? 1 : 0.5 }}
                aria-disabled
                onClick={() =>
                  currentPath === RoutesPath.AUCTION
                    ? undefined
                    : navigate(RoutesPath.AUCTION)
                }
              >
                Аукціон
              </button>
            )}
            <button
              style={{ opacity: currentPath === RoutesPath.RULES ? 1 : 0.5 }}
              aria-disabled
              onClick={() =>
                currentPath === RoutesPath.RULES
                  ? undefined
                  : navigate(RoutesPath.RULES)
              }
            >
              Правила
            </button>
            {isSuccess && (
              <button
                style={{ opacity: currentPath === RoutesPath.WIKI ? 1 : 0.5 }}
                onClick={() =>
                  currentPath === RoutesPath.WIKI
                    ? undefined
                    : navigate(RoutesPath.WIKI)
                }
              >
                Wiki
              </button>
            )}
          </NavList>
        </div>
      </HeaderContainer>
    </Header>
  )
}

export default Navbar
