import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  gap: 8px;
  margin: auto 0px 0px 0px;

  justify-content: center;

  padding: 16px;
  border-radius: 8px;

  background: radial-gradient(
    circle,
    rgba(80, 80, 80, 1) 0%,
    rgba(40, 40, 40, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 16px 6px rgba(0, 0, 0, 0.8),
    0px 0px 12px -5px rgba(255, 255, 255, 0.8);
  -moz-box-shadow:
    inset 0px 0px 16px 6px rgba(0, 0, 0, 0.8),
    0px 0px 12px -5px rgba(255, 255, 255, 0.8);
  box-shadow:
    inset 0px 0px 16px 6px rgba(0, 0, 0, 0.8),
    0px 0px 12px -5px rgba(255, 255, 255, 0.8);

  transition:
    transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 0.2s ease;

  & > div {
    position: relative;

    width: 64px;
    height: 64px;

    transition:
      transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
      opacity 0.2s ease;

    &:hover {
      cursor: pointer;
      transform: scale(1.03);
    }
  }
`

export const MoneyFilterParam = styled.div`
  & > div {
    position: absolute;

    top: 50%;
    left: 50%;

    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    &:nth-child(1) {
      width: 64px;
      height: 64px;

      translate: -50% -50%;
    }

    &:nth-child(2) {
      width: 40px;
      height: 40px;

      translate: -30% -10%;
      rotate: 90deg;

      opacity: 1;

      font-family: 'Minecraft', sans-serif;
      font-size: 40px;
      font-weight: 900;

      text-shadow:
        0px 0px 5px #000000,
        0px 0px 5px #000000,
        0px 0px 5px rgba(0, 0, 0, 1);

      color: #00b800;
    }
  }

  &:hover {
    z-index: 10;

    & > .hover_description {
      display: flex;
      width: max-content;
      translate: -50% -200%;
      opacity: 1;
    }
  }
`

export const FilterParam = styled.div`
  & > div {
    position: absolute;

    top: 50%;
    left: 50%;

    translate: -50% -50%;

    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    &:first-child {
      width: 64px;
      height: 64px;
    }

    &:nth-child(2) {
      width: 40px;
      height: 40px;

      translate: -50% -40%;

      opacity: 1;
    }
  }

  &:hover {
    z-index: 10;

    & > .hover_description {
      display: flex;
      width: max-content;
      translate: -50% -200%;
      opacity: 1;
    }
  }
`
