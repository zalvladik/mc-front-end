import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  border: none;

  height: 50px;

  transition:
    transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  & > div {
    &.button_left {
      z-index: 2;

      position: absolute;
      left: 0px;
      top: 0px;

      width: 6px;
      height: 50px;

      background-repeat: no-repeat;
      background-image: url('/assets/items_for_ui/button_left.png');
    }

    &.button_center {
      z-index: 1;

      position: absolute;

      left: 4px;
      top: 0px;

      width: calc(100% - 8px);
      height: 50px;

      background-image: url('/assets/items_for_ui/button_center.png');
    }

    &.button_right {
      z-index: 2;

      position: absolute;

      right: 0px;
      top: 0px;

      width: 6px;
      height: 50px;

      background-repeat: no-repeat;
      background-image: url('/assets/items_for_ui/button_right.png');
    }
  }
`

export const ButtonText = styled.div`
  display: flex;
  gap: 10px;

  position: absolute;
  z-index: 3;

  top: 50%;
  left: 50%;

  translate: -50% -50%;

  white-space: nowrap;

  font-family: 'Minecraft', sans-serif;
  font-weight: 500;
  font-size: 25px;

  & > svg {
    animation: rotateAnimation 2s linear infinite;
    @keyframes rotateAnimation {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(240deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`