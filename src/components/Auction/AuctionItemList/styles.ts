import styled from 'styled-components'

export const Container = styled.div`
  width: 700px;
  border-left: 2px solid gray;

  padding: 10px 20px 10px 20px;
`

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
        background-image: url('assets/items_for_auction_ui/name_tag.png');
      }
    }

    &:nth-child(2) {
      width: 38%;

      & > div {
        background-image: url('assets/items_for_auction_ui/diamond.png');
      }
    }
  }
`

export const TbodyContainer = styled.div`
  width: 100%;
  height: 90%;

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
    display: flex;
    justify-content: space-around;

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
    }

    & > div {
      &:nth-child(1) {
        display: flex;
        gap: 20px;

        width: 58%;
      }

      &:nth-child(2) {
        width: 1%;
        height: 100%;
        width: 2px;
        background-color: whitesmoke;
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
    }
  }
`

export const ItemPriceContainer = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin: 0px auto;

    font-family: 'Minecraft', sans-serif;
    font-size: 25px;
    font-weight: 500;
  }
`

export const ItemSlotIcon = styled.div`
  position: relative;

  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/assets/items_for_ui/slot.png');

  width: 58px;
  height: 58px;

  display: flex;

  align-items: center;

  & > div {
    margin: 0px auto;

    width: 38px;
    height: 38px;
    background-size: contain;
    background-repeat: no-repeat;
  }
`

export const ItemAmount = styled.p`
  position: absolute;
  right: -5px;
  bottom: -5px;
  padding: 5px;
  font-size: 16px;
  font-family: 'Minecraft', sans-serif;
  text-shadow:
    0px 0px 15px #000000,
    0px 0px 15px #000000;
`
