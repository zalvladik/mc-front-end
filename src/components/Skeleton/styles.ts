import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  & > .loadingContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    border-radius: 10px;

    animation: pulsar 2s linear infinite;
    @keyframes pulsar {
      0% {
        background: rgba(60, 60, 60, 0.05);
      }
      50% {
        background: rgba(100, 100, 100, 0.2);
      }
      100% {
        background: rgba(60, 60, 60, 0.05);
      }
    }

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
  }
`

export const NoDataInfo = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  & > div {
    position: absolute;

    top: 50%;
    left: 50%;

    translate: -50% -50%;

    white-space: nowrap;
    font-size: 30px;
    font-family: 'Minecraft', sans-serif;
    text-shadow:
      0px 0px 15px #000000,
      0px 0px 15px #000000;
  }
`
