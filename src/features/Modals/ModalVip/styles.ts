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
  width: 700px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  & > h1 {
    font-family: 'Minecraft', sans-serif;
    font-size: 30px;
    font-weight: 500;

    text-shadow: 2.5px 2.5px 2px rgba(0, 0, 0, 1);

    margin-bottom: 20px;

    text-align: center;
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

export const VipInfoListContainer = styled.div`
  position: relative;
  display: flex;

  gap: 20px;
`

export const VipInfoTitle = styled.div`
  position: absolute;

  left: 0px;
  top: 0px;

  translate: -100%;

  & > div {
    font-family: 'Minecraft', sans-serif;
    font-size: 20px;
    font-weight: 500;

    text-shadow: 2.5px 2.5px 2px rgba(0, 0, 0, 1);
  }
`

export const VipInfo = styled.div`
  & > div {
    font-family: 'Minecraft', sans-serif;
    font-size: 20px;
    font-weight: 500;

    text-shadow: 2.5px 2.5px 2px rgba(0, 0, 0, 1);
  }

  & > div:last-child {
    position: relative;

    width: 80px;
    height: 80px;

    margin-top: 20px;

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
