import styled from 'styled-components'

import RuleCategory from 'src/components/RuleCategory'

export const StyledRuleCategory = styled(RuleCategory)`
  & > div {
    & > ul {
      border: 1px solid white;
      border-radius: 12px;
    }
  }
`

export const ByeButton = styled.a`
  padding: 10px 0px;
  width: 230px;

  width: 100%;

  border-radius: 6px;
  border: 1px solid white;
  background: #161616;

  transition:
    transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }

  & > div {
    width: 100%;

    font-family: 'Minecraft', sans-serif;
    font-size: 18px;
    font-weight: 400;

    text-shadow: 3px 3px 2px rgba(0, 0, 0, 1);

    text-align: center;
  }
`

export const ContainerWrapper = styled.div`
  max-width: 800px;
  position: relative;
  margin: 0px 50px;

  @media screen and (max-width: 390px) {
    height: 70%;
    margin: 0px 20px;
  }
`

export const CreateOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  gap: 12px;

  margin: 10px auto 0px auto;

  & > p {
    font-family: 'Minecraft', sans-serif;
    font-size: 18px;
    font-weight: 600;

    transition:
      transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
      opacity 0.2s ease;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  position: relative;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  border: 2px solid white;
  padding: 40px 60px 30px 60px;

  @media screen and (max-width: 390px) {
    height: 100%;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const Breeze = styled.img`
  position: absolute;
  z-index: 9;
  top: -20px;
  left: -20px;
  translate: -50% -50%;

  @media screen and (max-width: 390px) {
    display: none;
  }

  animation: animation_Breeze 8s infinite ease-in-out;

  @keyframes animation_Breeze {
    0% {
      transform: rotate(20deg) translateY(0px);
    }
    50% {
      transform: rotate(30deg) translateY(-10px);
    }
    100% {
      transform: rotate(20deg) translateY(0px);
    }
  }
`

export const Cloud1 = styled.img`
  position: absolute;
  z-index: 9;
  right: 0px;
  top: 0px;
  transform: rotate(-25deg);
  translate: 30% -50%;
  @media screen and (max-width: 390px) {
    display: none;
  }

  animation: animationCloud1 6s infinite ease-in-out;
  @keyframes animationCloud1 {
    0% {
      transform: rotate(-10deg) translateY(0px) translateX(0px);
    }
    50% {
      transform: rotate(20deg) translateY(-20px) translateX(20px);
    }
    100% {
      transform: rotate(-10deg) translateY(0px) translateX(0px);
    }
  }
`

export const Cloud2 = styled.img`
  position: absolute;
  z-index: 9;
  right: 0px;
  bottom: 0px;
  transform: rotate(-50deg);
  translate: 40% 40%;
  @media screen and (max-width: 390px) {
    display: none;
  }

  animation: animationCloud2 10s infinite ease-in-out;
  @keyframes animationCloud2 {
    0% {
      transform: rotate(10deg) translateY(0px) translateX(0px);
    }
    50% {
      transform: rotate(-30deg) translateY(-20px) translateX(20px);
    }
    100% {
      transform: rotate(10deg) translateY(0px) translateX(0px);
    }
  }
`

export const Cloud3 = styled.img`
  position: absolute;
  z-index: 9;
  left: 0px;
  bottom: 0px;
  transform: rotate(25deg);
  translate: -40% 40%;

  @media screen and (max-width: 390px) {
    display: none;
  }

  animation: animationCloud3 10s infinite ease-in-out;
  @keyframes animationCloud3 {
    0% {
      transform: rotate(-10deg) translateY(0px) translateX(0px);
    }
    50% {
      transform: rotate(20deg) translateY(-20px) translateX(20px);
    }
    100% {
      transform: rotate(-10deg) translateY(0px) translateX(0px);
    }
  }
`

export const Info = styled.div`
  color: white;
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-top: 20px;

  h1 {
    font-family: 'Minecraft', sans-serif;
    font-size: 25px;
    font-weight: 600;
    color: white;

    @media screen and (max-width: 390px) {
      font-size: 20px;
      font-weight: 300;
    }
  }

  p {
    color: white;
    opacity: 0.9;

    font-family: 'Minecraft', sans-serif;
    font-size: 18px;
    font-weight: 500;

    & {
      @media screen and (max-width: 390px) {
        font-size: 14px;
        font-weight: 300;
      }
    }
  }
`
