import styled from 'styled-components'

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
    justify-content: space-around;
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

  & > span {
    color: purple;

    font-size: 30px;
    font-family: 'Minecraft', sans-serif;
    text-shadow:
      0px 0px 15px #000000,
      0px 0px 15px #000000;
  }
`
