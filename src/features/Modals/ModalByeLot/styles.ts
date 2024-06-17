import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  padding: 30px;
  display: flex;
  flex-direction: column;

  gap: 40px;

  background: radial-gradient(
    circle,
    rgba(30, 67, 89, 1) 0%,
    rgba(20, 47, 61, 1) 100%
  );

  border: 1px solid gray;
  border-radius: 10px;

  -webkit-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 18px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 18px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 18px -5px rgba(255, 255, 255, 1);

  & > div:last-child {
    margin: 0px auto;
  }
`

export const ItemContainer = styled.div`
  position: absolute;

  width: 200px;
  height: 200px;

  top: 0px;
  left: 50%;

  translate: -50% -110%;

  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/assets/items_for_ui/slot.png');
`

export const ItemIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  translate: -50% -50%;

  background-size: contain;
  background-repeat: no-repeat;
`

export const ItemDescription = styled.div``

export const ItemIcon = styled.div`
  width: 128px;
  height: 128px;

  background-size: contain;
  background-repeat: no-repeat;
`

export const ItemAmount = styled.p`
  position: absolute;
  right: 0px;
  bottom: 0px;

  padding: 5px;
  font-size: 35px;
  font-family: 'Minecraft', sans-serif;
  text-shadow:
    0px 0px 15px #000000,
    0px 0px 15px #000000;
`

export const ItemOwner = styled.div`
  position: absolute;

  position: absolute;
  bottom: 0px;
  left: 50%;

  translate: -50% 150%;

  white-space: nowrap;

  font-size: 30px;
  font-family: 'Minecraft', sans-serif;
  text-shadow:
    0px 0px 15px #000000,
    0px 0px 15px #000000;
`
