import { RoutesPath } from 'src/router/routes'

import {
  ButtonBack,
  Header,
  HeaderContainer,
  NavList,
} from 'src/components/Navbar/styles'
import { useNavBar } from 'src/components/Navbar/useNavbar'

const Navbar = (): JSX.Element => {
  const {
    navigate,
    isScrollingUp,
    currentPath,
    isProfilePage,
    isSuccess,
    isLoading,
  } = useNavBar()

  const handleClick = (): void => {
    window.location.href = 'https://mc-front-end.vercel.app/'
  }

  return (
    <Header className={isScrollingUp ? '' : 'header hidden'}>
      <HeaderContainer>
        <ButtonBack onClick={handleClick}>
          <img src="/assets/logo.svg" alt="header logo" />
        </ButtonBack>

        {!isLoading && isSuccess && (
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

            <button
              style={{
                opacity: currentPath.includes(RoutesPath.AUCTION) ? 1 : 0.5,
              }}
              aria-disabled
              onClick={() =>
                currentPath.includes(RoutesPath.AUCTION)
                  ? undefined
                  : navigate(RoutesPath.AUCTION)
              }
            >
              Торгівля
            </button>

            {/* {isSuccess && (
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
              )} */}
          </NavList>
        )}
      </HeaderContainer>
    </Header>
  )
}

export default Navbar
