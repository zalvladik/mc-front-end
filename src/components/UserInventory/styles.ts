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
  padding: 20px;

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

export const DefaultInputWrapper = styled.div`
  right: 0px;
  top: -20px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: end;

  & > input {
    border: 1px solid gray;
  }
`
