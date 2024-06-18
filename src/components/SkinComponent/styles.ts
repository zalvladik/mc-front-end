import styled from 'styled-components'

export const Container = styled.div`
  background: radial-gradient(
    circle,
    rgba(11, 31, 50, 1) 0%,
    rgba(10, 28, 38, 1) 25%,
    rgba(15, 39, 52, 1) 50%,
    rgba(10, 28, 38, 1) 75%,
    rgba(11, 31, 50, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 15px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 15px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 15px -5px rgba(255, 255, 255, 1);

  border: 2px solid gray;
`

export const PlayerRoleImageWrapper = styled.div`
  z-index: 1;

  width: 100px;
  height: 100px;

  position: absolute;
  top: 0px;
  left: 0px;

  translate: -50% -50%;

  &:hover {
    z-index: 999;
  }

  & > div {
    position: relative;

    &:hover > div.HoverDescription {
      display: flex;
    }
  }
`

export const SkinContainer = styled.div`
  position: relative;
`

export const PlayerRoleImage = styled.div`
  width: 100px;
  height: 100px;

  background-size: contain;
  background-repeat: no-repeat;

  &:hover {
    cursor: help;
  }

  animation: animation_PlayerRoleImage 8s infinite ease-in-out;

  @keyframes animation_PlayerRoleImage {
    0% {
      transform: rotate(-4deg) translateY(0px);
    }
    50% {
      transform: rotate(4deg) translateY(10px);
    }
    100% {
      transform: rotate(-4deg) translateY(0px);
    }
  }
`

export const SkinIcon = styled.canvas`
  background: radial-gradient(
    circle,
    rgba(11, 31, 50, 1) 0%,
    rgba(10, 28, 38, 1) 25%,
    rgba(15, 39, 52, 1) 50%,
    rgba(10, 28, 38, 1) 75%,
    rgba(11, 31, 50, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 15px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 15px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 15px -5px rgba(255, 255, 255, 1);

  border: 2px solid gray;
  border-radius: 10px;
`
