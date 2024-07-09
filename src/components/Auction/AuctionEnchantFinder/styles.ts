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

  padding: 10px;

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
  height: 100px;
  width: 100px;

  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  background-size: contain;
  background-repeat: no-repeat;
  background-color: inherit;

  background-image: url('/assets/items_for_ui/slot.png');

  &:hover {
    z-index: 20;
    transform: scale(1.05);
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

  gap: 30px;

  align-items: center;

  & > h1 {
    font-family: 'Minecraft', sans-serif;
    font-size: 28px;
    font-weight: 500;

    color: #ececec;
  }

  & > div {
    display: flex;

    gap: 10px;
  }
`

// export const ButtonsContainer = styled.div`
//   width: 320px;

//   padding: 10px;

//   display: flex;
//   flex-direction: column;
//   gap: 10px;

//   & > div {
//     margin: 0px auto;

//     & > div {
//       font-size: 22px;
//     }
//   }
// `
