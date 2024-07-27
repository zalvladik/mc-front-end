import copy from 'src/assets/cards/copy'
import play from 'src/assets/cards/play'
import { copyText } from 'src/helpers'
import {
  ButtonsContainer,
  Container,
  HeroSection,
  HeroText,
} from 'src/pages/HomePage/screens/Main/styles'
import { useMain } from 'src/pages/HomePage/screens/Main/useMain'

import HeroButton from 'src/components/HeroButton'

import { Modals } from 'src/features/Modals/constants'

const Main = (): JSX.Element => {
  const { props, onOpen } = useMain()

  return (
    <HeroSection>
      <Container style={props}>
        <img src="/assets/logo.svg" alt="main logo" />
        <ButtonsContainer>
          <HeroButton
            icon={play()}
            onClick={() => {
              onOpen({ name: Modals.PAY })
            }}
            text="Почати грати"
            styles={{ background: '#7F00FF' }}
          />
          <HeroButton
            icon={copy()}
            onClick={() => {
              copyText('ukland.pp.ua')
            }}
            text="Скопіювати IP"
            styles={{ background: 'none', border: '1px solid white' }}
          />
        </ButtonsContainer>
        <HeroText>Приватний україномовний сервер на версії Minecraft 1.21</HeroText>
      </Container>
    </HeroSection>
  )
}

export default Main
