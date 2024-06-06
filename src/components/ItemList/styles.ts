import styled from 'styled-components'

export const Container = styled.div`
  background-color: gray;
  user-select: none;
  position: relative;
  border-radius: 5px;
  padding: 20px;

  width: 1056px;
  height: 376px;

  background: radial-gradient(
    circle,
    rgba(100, 110, 120, 1) 0%,
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

  & > button {
    background-color: inherit;
    background-size: contain;
    background-repeat: no-repeat;

    border: none;

    padding: 20px;
    margin: 4px;
    position: relative;
    z-index: 0;
    border-radius: 10px;
  }
`

export const InventoryEmpty = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 40px;
  transform: translate(-50%, -50%);
  font-family: 'Minecraft', sans-serif;
  font-weight: 500;
`

export const AreaSelect = styled.div`
  display: none;
  border-radius: 4px;
  position: absolute;
  z-index: 999;
`

export const ItemMiddleware = styled.div`
  display: none;
  top: 0px;
  left: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 998;
`

export const EmptySlot = styled.button`
  width: 104px;
  height: 104px;
  margin: 4px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/assets/slot.png');
  opacity: 0.4;
`

export const ItemButtom = styled.button`
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    z-index: 20;
    cursor: pointer;
    transform: scale(1.05);
  }

  &:hover > div {
    display: flex;
  }
`

export const ItemIcon = styled.div`
  width: 64px;
  height: 64px;
  background-size: contain;
  background-repeat: no-repeat;
`

export const ItemAmount = styled.p`
  position: absolute;
  right: 0px;
  bottom: 0px;
  padding: 5px;
  font-size: 25px;
  font-family: 'Minecraft', sans-serif;
  text-shadow:
    0px 0px 15px #000000,
    0px 0px 15px #000000;
`
