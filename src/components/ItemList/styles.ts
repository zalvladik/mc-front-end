import styled from 'styled-components'

export const InventoryEmpty = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 40px;
  transform: translate(-50%, -50%);
  font-family: 'Minecraft', sans-serif;
  font-weight: 500;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 10px 0px 300px 0px;

  & > button {
    background-color: inherit;
    background-size: contain;
    border: none;

    padding: 20px;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      z-index: 20;
      cursor: pointer;
      transform: scale(1.05);
    }

    &:hover > div {
      display: flex;
    }
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
