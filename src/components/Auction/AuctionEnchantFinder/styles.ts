import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  position: relative;
`

export const Container = styled.div`
  display: flex;
  position: relative;

  width: max-content;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  border-radius: 5px;

  background: radial-gradient(
    circle,
    rgba(100, 110, 120, 1) 0%,
    rgba(30, 35, 40, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.6),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.6),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.6),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
`

export const EnchantTypeCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`

export const EnchantItemContainer = styled.div`
  position: relative;

  border: none;
  height: 108px;
  width: 108px;

  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  background-size: contain;
  background-repeat: no-repeat;
  background-color: inherit;

  background-image: url('/assets/items_for_ui/slot.png');

  &:hover {
    z-index: 20;
    transform: scale(1.03);
    cursor: pointer;
  }

  &:hover > div.itemCard {
    display: flex;
  }
`

export const EnchantItemIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  translate: -50% -50%;

  background-size: contain;
  background-repeat: no-repeat;
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  border-radius: 8px;
  border: 1px solid black;

  padding: 6px 12px;

  background: radial-gradient(
    circle,
    rgba(30, 67, 89, 1) 0%,
    rgba(20, 47, 61, 1) 100%
  );

  -webkit-box-shadow: inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75);

  & > h1 {
    font-family: 'Minecraft', sans-serif;
    font-size: 20px;
    font-weight: 500;

    text-shadow: 2.5px 2.5px 1px rgb(200, 200, 200, 0.5);
  }

  & > div {
    display: flex;

    margin-top: 10px;
    gap: 10px;
  }
`

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 7px 13px;

  & > h1 {
    font-family: 'Minecraft', sans-serif;
    font-size: 20px;
    font-weight: 500;

    text-shadow: 2.5px 2.5px 1px rgb(200, 200, 200, 0.5);
  }
`

export const ButtonsContainer = styled.div`
  width: 410px;

  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`
