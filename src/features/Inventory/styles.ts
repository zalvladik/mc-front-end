import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  display: flex;
  width: max-content;
  flex-direction: column;
  gap: 25px;
`

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
  position: relative;
  display: flex;
  gap: 30px;
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

export const OverheadInventory = styled.div`
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
