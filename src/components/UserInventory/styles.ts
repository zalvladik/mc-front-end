import styled from 'styled-components'

export const Cotnainer = styled.div`
  background: radial-gradient(
    circle,
    rgba(30, 67, 89, 1) 0%,
    rgba(20, 47, 61, 1) 100%
  );

  -webkit-box-shadow: inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75);

  position: relative;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  max-width: 1000px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 15px;

  & > h1 {
    font-family: 'Minecraft', sans-serif;
    padding-left: 20px;
    font-weight: 500;
  }
`

export const TfiReloadWrapper = styled.button`
  background-image: url(${'src/assets/slot.png'});
  background-color: inherit;
  background-size: contain;
  width: 100px;
  height: 100px;
  border-radius: 5px;
  border: none;
  position: absolute;
  right: 0px;
  top: -120px;
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    border: none;
    cursor: pointer;
    transform: scale(1.05);
  }
`

export const MoneyAmountContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > li {
    position: relative;
    width: max-content;

    & > h1 {
      font-family: 'Minecraft', sans-serif;
      padding-left: 10px;
      font-weight: 500;
      color: #e2e2e2;
    }

    & > div {
      position: absolute;
      width: 48px;
      height: 48px;
      background-image: url('http://localhost:8080/public/de/deepslate_diamond_ore.png');
      background-size: contain;
      right: -52px;
      top: 0px;
    }

    &:nth-child(3) {
      & > div {
        background-image: url('http://localhost:8080/public/sh/shulker_box.png');
      }
    }
  }
`

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ItemList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;

  & > li {
    background-image: url(${'src/assets/slot.png'});
    background-color: inherit;
    background-size: contain;
    padding: 20px;
    position: relative;
    z-index: 0;
    border: none;
    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      border: none;
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
