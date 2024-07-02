import styled from 'styled-components'

export const ItemSlotIconContainer = styled.div`
  position: relative;

  background-color: inherit;
  background-size: contain;
  background-repeat: no-repeat;

  border: none;
  height: 104px;
  width: 104px;

  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  background-size: contain;
  background-repeat: no-repeat;

  &:hover {
    z-index: 20;
    transform: scale(1.05);
  }

  &:hover > div.itemCard {
    display: flex;
  }
`

export const ItemIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  translate: -50% -50%;

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

  font-family: 'Minecraft', sans-serif;
  text-shadow:
    0px 0px 15px #000000,
    0px 0px 15px #000000;
`

export const Durability = styled.div`
  position: absolute;
  left: 17%;

  height: 4px;

  bottom: 18%;

  background-color: #62dd44;
`
