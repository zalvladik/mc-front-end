import styled from 'styled-components'

export const Container = styled.div`
  background: radial-gradient(
    circle,
    rgba(80, 80, 80, 1) 0%,
    rgba(40, 40, 40, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 32px 8px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 32px 8px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 32px 8px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);

  position: relative;
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px;

  height: 400px;
  width: 600px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  & > h1 {
    font-family: 'Minecraft', sans-serif;
    padding-left: 20px;
    font-weight: 500;
  }
`

export const VipListContainer = styled.div`
  display: flex;
  gap: 10px;
  width: max-content;
  margin: 0px auto;

  & > div {
    position: relative;

    width: 80px;
    height: 80px;

    transition:
      transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1),
      opacity 0.2s ease;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }

    & > div:first-child {
      width: 100%;
      height: 100%;

      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`

export const DisabledVipType = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  translate: -50% -50%;

  width: 80%;
  height: 80%;

  background-image: url('/assets/items_for_ui/barrier.png');
  background-size: contain;
  background-repeat: no-repeat;
`
