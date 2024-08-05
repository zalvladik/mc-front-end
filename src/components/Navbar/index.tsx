// import { RoutesPath } from 'src/router/routes'

import {
  ButtonBack,
  Header,
  HeaderContainer,
  NavList,
} from 'src/components/Navbar/styles'
import { useNavBar } from 'src/components/Navbar/useNavbar'

const Navbar = (): JSX.Element => {
  const { navigate, isScrollingUp, currentPath } = useNavBar()

  const handleClick = (): void => {
    window.location.href = 'https://mc-site-trade-integration.vercel.app/'
  }

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

        <NavList>
          <button aria-disabled onClick={handleClick} style={{ opacity: 0.5 }}>
            Кабінет
          </button>
          {/* <button
            style={{ opacity: currentPath === RoutesPath.RULES ? 1 : 0.5 }}
            aria-disabled
            onClick={() =>
              currentPath === RoutesPath.RULES
                ? undefined
                : navigate(RoutesPath.RULES)
            }
          >
            Правила
          </button> */}
        </NavList>
      </HeaderContainer>
    </Header>
  )
}

export default Navbar
