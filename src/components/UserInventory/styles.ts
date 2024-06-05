import styled from 'styled-components'

export const Container = styled.div`
  background: radial-gradient(
    circle,
    rgba(30, 67, 89, 1) 0%,
    rgba(20, 47, 61, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 18px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 18px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 18px -5px rgba(255, 255, 255, 1);

  position: relative;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  width: 1020px;
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  & > h1 {
    font-family: 'Minecraft', sans-serif;
    padding-left: 20px;
    font-weight: 500;
  }
`

export const InventoryWrapper = styled.div`
  display: flex;
  position: relative;
  width: max-content;
  flex-direction: column;
  gap: 25px;
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

export const HeaderInventory = styled.div`
  right: 0px;
  top: -20px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: end;
`

export const SearchInputWrapper = styled.div`
  position: relative;

  & > input {
    border: 1px solid gray;
  }
`

export const ItemList = styled.div`
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
