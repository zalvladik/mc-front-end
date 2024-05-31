import { animated } from '@react-spring/web'
import styled from 'styled-components'

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('/assets/background.gif');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: rgba(107, 220, 51, 0.02);

  @media screen and (max-width: 390px) {
    padding-top: 40px;
    background-attachment: scroll;
    background-image: url('/assets/bg_phone.gif');
    height: 100vh;
    background-size: cover;
  }
`

export const Container = styled(animated.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`

export const HeroText = styled.p`
  font-family: 'Minecraft', sans-serif;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  font-size: 25px;
  padding: 0px 20px;
  @media screen and (max-width: 390px) {
    font-size: 14px;
    font-weight: 300;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  & > button {
    font-family: 'Minecraft', sans-serif;
  }
`
