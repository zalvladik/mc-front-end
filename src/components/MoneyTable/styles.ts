import styled from 'styled-components'

export const MoneyAmountContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 0px auto;
  width: max-content;

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
      background-image: url('/assets/items_for_ui/deepslate_diamond_ore.png');
      background-size: contain;
      background-repeat: no-repeat;
      right: -52px;
      top: 0px;
    }

    &:nth-child(3) {
      & > div {
        background-image: url('/assets/items_for_ui/shulker_box.png');
      }
    }
  }
`
