import styled from 'styled-components'

export const Container = styled.div`
  background: rgb(78, 78, 78);
  background: rgb(78, 78, 78);
  background: linear-gradient(
    137deg,
    rgba(78, 78, 78, 1) 0%,
    rgba(68, 68, 68, 1) 18%,
    rgba(60, 60, 60, 1) 30%,
    rgba(73, 73, 73, 1) 42%,
    rgba(66, 66, 66, 1) 55%,
    rgba(60, 60, 60, 1) 66%,
    rgba(59, 59, 59, 1) 82%,
    rgba(91, 91, 91, 1) 100%
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
  border: 2px solid rgba(50, 50, 50, 1);

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
