import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;

  right: 0px;
  top: 100px;

  width: 120px;
  height: 167px;

  transform: translate(100%, 0%);

  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/assets/item_ticket_crop.png');

  transform-origin: left center;
  transition:
    transform 0.3s ease,
    opacity 1s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: translate(100%, 0%) scale(1.05);
  }
`

export const ItemTicketIdWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  & > div {
    color: #4e4400;

    position: absolute;

    font-size: 35px;
    font-family: 'Minecraft', sans-serif;
    font-weight: 500;

    top: 45%;
    left: 35%;

    transform: translate(-50%, -50%) rotate(-34deg);
  }
`
