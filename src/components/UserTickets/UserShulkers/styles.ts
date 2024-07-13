import styled from 'styled-components'

export const ShulkerIdWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  & > div {
    position: absolute;

    color: white;
    font-family: 'Minecraft', sans-serif;

    top: 50%;
    left: 50%;

    translate: -50% -50%;
  }
`

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px;

  height: 100%;
  overflow: hidden;

  transition: height 0.5s ease;

  background: radial-gradient(
    circle,
    rgba(100, 110, 120, 1) 0%,
    rgba(50, 55, 60, 1) 70%,
    rgba(50, 55, 60, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 12px -5px rgba(255, 255, 255, 1);

  width: 630px;

  border-radius: 10px;

  & > h1 {
    position: absolute;
    bottom: 10px;
    left: 50%;
    font-weight: 500;
    font-family: 'Minecraft', sans-serif;
    font-size: 25px;
    translate: -50% 0%;
  }

  & > button {
    border: none;
    background-color: inherit;

    background-size: contain;
    background-repeat: no-repeat;

    transform-origin: bottom center;

    transition:
      transform 0.3s ease,
      rotate 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);

      & > .hover_description {
        display: flex;
        font-size: 20px;
      }
    }
  }
`
