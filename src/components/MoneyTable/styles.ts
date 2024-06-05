import styled from 'styled-components'

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
      background-repeat: no-repeat;
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
