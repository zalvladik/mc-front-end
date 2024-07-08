import styled from 'styled-components'

import ItemHoverDescription from 'src/components/ItemHoverDescription'
import MoneyTable from 'src/components/MoneyTable'

export const StyledItemHoverDescription = styled(ItemHoverDescription)`
  position: static;
  background-color: rgba(0, 0, 0, 0);
  padding: 0px 20px;
  border: none;
`

export const Container = styled.div`
  position: relative;
  display: flex;

  align-items: center;
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
`

export const StyledMoneyTable = styled(MoneyTable)`
  padding: 0px;
  flex-direction: row;
  gap: 80px;

  & > li {
    & > h1 {
      padding: 0px;
    }
  }
`

export const ItemSlotWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  gap: 20px;
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
