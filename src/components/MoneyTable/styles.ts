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

    align-items: center;

    & > h1 {
      font-family: 'Minecraft', sans-serif;
      padding-left: 10px;
      font-size: 30px;
      font-weight: 500;
      color: #e2e2e2;

      text-shadow: 3px 3px 1px rgba(100, 100, 100, 1);
    }

    & > div {
      height: 42px;
      width: 42px;

      position: absolute;
      background-image: url('/assets/items_for_ui/deepslate_diamond_ore.png');
      background-size: contain;
      background-repeat: no-repeat;
      right: -50px;
      top: 50%;

      translate: 0% -45%;
    }

    &:nth-child(3) {
      & > div {
        background-image: url('/assets/items_for_ui/shulker_box.png');
      }
    }
  }
`
