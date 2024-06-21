import styled from 'styled-components'

export const Container = styled.div``

export const TheadContainer = styled.div`
  font-family: 'Minecraft', sans-serif;
  font-size: 20px;
  font-weight: 500;

  display: flex;

  position: relative;

  padding: 5px 5px;
  margin-bottom: 10px;

  & > div {
    border: 0.5px solid white;
    border-radius: 4px;

    height: 40px;

    align-items: center;

    text-align: center;

    background-color: rgba(25, 35, 45, 1);

    -webkit-box-shadow: inset 0px 0px 15px 5px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: inset 0px 0px 15px 5px rgba(0, 0, 0, 0.6);
    box-shadow: inset 0px 0px 15px 5px rgba(0, 0, 0, 0.6);

    display: flex;
    margin: 0px auto;
    gap: 5px;

    justify-content: center;

    & > p {
      font-family: 'Minecraft', sans-serif;
      font-size: 20px;
      font-weight: 500;
    }

    & > div {
      width: 32px;
      height: 32px;
      background-repeat: no-repeat;
      background-size: contain;
    }

    &:nth-child(1) {
      width: 58%;

      & > div {
        background-image: url('/assets/items_for_auction_ui/name_tag.png');
      }
    }

    &:nth-child(2) {
      width: 38%;

      & > div {
        background-image: url('/assets/items_for_auction_ui/diamond.png');
      }
    }
  }
`

export const DeleteLotButton = styled.div`
  position: absolute;
  opacity: 0;

  right: 0%;
  top: 0%;

  translate: 50% -50%;

  width: 40px;
  height: 40px;

  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/assets/items_for_ui/barrier.png');

  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    cursor: pointer;
    transform: scale(1.5);

    & > .HoverDescription {
      display: flex;
      top: 50%;
      left: 50%;
      translate: -115% -50%;

      font-size: 15px;
    }
  }
`

export const TbodyContainer = styled.div`
  width: 100%;
  height: calc(90% - 3px);

  display: flex;
  flex-direction: column;

  padding: 10px;

  gap: 7px;

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

  & > div {
    position: relative;

    display: flex;
    justify-content: space-around;

    align-items: center;

    padding: 4px 0px;

    border-radius: 5px;
    background-color: rgba(200, 200, 200, 0.1);

    transition:
      background-color 0.3s ease,
      transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      cursor: pointer;
      background-color: rgba(200, 200, 200, 0.2);
      transform: scale(1.01);

      div:last-child {
        opacity: 1;
      }
    }

    & > div {
      &:nth-child(1) {
        display: flex;
        gap: 20px;

        width: 58%;
      }

      &:nth-child(2) {
        width: 1%;
        height: 90%;
        width: 2px;
        background-color: lightgray;
      }

      &:nth-child(3) {
        width: 38%;
      }
    }
  }
`

export const ItemDesriptionContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 0px auto;

  & > div {
    & > div {
      text-align: center;

      font-family: 'Minecraft', sans-serif;
      font-size: 20px;
      font-weight: 500;

      text-shadow:
        0px 0px 25px #000000,
        0px 0px 25px #000000;
    }
  }
`

export const ItemPriceContainer = styled.div`
  display: flex;
  justify-content: center;

  gap: 10px;

  & > div {
    font-family: 'Minecraft', sans-serif;
    font-size: 25px;
    font-weight: 500;

    text-shadow:
      0px 0px 25px #000000,
      0px 0px 25px #000000;
  }

  & > div:last-child {
    width: 40px;
    height: 40px;

    background-image: url('/assets/items_for_ui/deepslate_diamond_ore.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
`
