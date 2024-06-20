import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px;

  border: 4px solid #1e0245;
  background-color: #120312;

  border-radius: 12px;

  -webkit-box-shadow:
    inset 0px 0px 60px 18px rgba(0, 0, 0, 0.75),
    0px 0px 16px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 60px 18px rgba(0, 0, 0, 0.75),
    0px 0px 16px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 60px 18px rgba(0, 0, 0, 0.75),
    0px 0px 16px -5px rgba(255, 255, 255, 1);

  & > .itemCard {
    position: static;
    display: flex;

    border: none;
    border-radius: 0px;

    background-color: rgba(0, 0, 0, 0);

    translate: 0% 0%;
  }

  & > div:first-child {
    display: flex;
    align-items: center;

    gap: 20px;
  }
`

export const IconSlot = styled.div`
  position: relative;

  width: 200px;
  height: 200px;

  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/assets/items_for_ui/slot.png');
`

const pulseAnimation = keyframes`
  0% {
    background-color: rgba(128, 0, 128, 0.1);
  }
  50% {
    background-color: rgba(200, 50, 200, 0.4);
  }
  100% {
    background-color: rgba(128, 0, 128, 0.1);
  }
`

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  `

export const ItemIcon = styled.div`
  position: absolute;

  width: 128px;
  height: 128px;

  top: 50%;
  left: 50%;

  translate: -50% -50%;
  background-size: contain;
  background-repeat: no-repeat;
`

export const GlowContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`

export const ItemGlowBorder = styled.div`
  width: 216px;
  height: 216px;

  position: absolute;
  translate: -50% -50%;

  top: 50%;
  left: 50%;

  mask-image: url('/assets/items_for_ui/glow_border.png');
  mask-size: contain;
  mask-repeat: no-repeat;

  -webkit-mask-image: url('/assets/items_for_ui/glow_border.png');
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;

  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(116, 9, 121, 1) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  animation: ${rotateAnimation} 3s infinite linear;
`

export const ItemGlow = styled.div`
  width: 128px;
  height: 128px;

  position: absolute;
  translate: -50% -50%;

  top: 50%;
  left: 50%;

  mask-image: url(${props => props.maskImage});
  mask-size: contain;
  mask-repeat: no-repeat;

  -webkit-mask-image: url(${props => props.maskImage});
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;

  animation: ${pulseAnimation} 3s infinite;
`

export const ItemAmount = styled.p`
  position: absolute;
  right: 0px;
  bottom: 0px;

  padding: 5px;
  font-size: 35px;
  font-family: 'Minecraft', sans-serif;
  text-shadow:
    0px 0px 15px #000000,
    0px 0px 15px #000000;
`

export const ItemOwner = styled.div`
  position: absolute;

  top: 0px;
  left: 50%;

  translate: -50% -160%;

  white-space: nowrap;

  color: lightgray;

  font-size: 25px;
  font-family: 'Minecraft', sans-serif;
  text-shadow:
    0px 0px 15px #000000,
    0px 0px 15px #000000;
`
