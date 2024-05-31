import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const Container = styled(animated.span)`
  padding: 50px 0px;
  justify-content: center;
  align-items: center;
  display: flex;

  & > h1 {
    font-family: 'Minecraft', sans-serif;
    text-align: center;
    font-size: 50px;
    @media screen and (max-width: 767px) {
      font-size: 25px;
    }
  }

  & > img {
    position: relative;
    bottom: 4px;
    width: 100px;
    margin-left: 20px;
    @media screen and (max-width: 767px) {
      width: 70px;
      margin-left: 10px;
    }
  }
`
