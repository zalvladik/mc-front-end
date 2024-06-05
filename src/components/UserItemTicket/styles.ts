import styled from 'styled-components'

export const TicketIdWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  & > div {
    position: absolute;

    color: #4e4400;
    font-family: 'Minecraft', sans-serif;
    font-size: 40px;

    top: 20%;
    right: 50%;

    translate: 50% 0%;
  }
`

export const Container = styled.div`
  position: relative;

  background: radial-gradient(
    circle,
    rgba(30, 67, 89, 1) 0%,
    rgba(20, 47, 61, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 18px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 18px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 18px -5px rgba(255, 255, 255, 1);

  border-radius: 20px;

  height: 500px;
  width: 670px;

  & > h1 {
    position: absolute;
    bottom: 40px;
    left: 50%;

    font-family: 'Minecraft', sans-serif;
    font-size: 30px;
    translate: -50% 0%;
  }

  & > button {
    position: absolute;
    width: 142px;
    height: 271px;

    right: 50%;
    top: 50%;

    border: none;
    background-color: inherit;

    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('/assets/item_ticket_vertical.png');

    transform-origin: bottom center;

    transition: transform 0.3s ease;
    translate: 50% -70%;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }

  &.itemTicket1 {
    & > button {
      &:nth-child(1) {
        z-index: 10;
        rotate: 0deg;
        right: 50%;
        top: 47%;
      }
    }
  }

  &.itemTicket2 {
    & > button {
      &:nth-child(1) {
        z-index: 10;
        rotate: -20deg;
        right: 50%;
        top: 47%;
      }

      &:nth-child(2) {
        z-index: 11;
        rotate: 20deg;
        top: 47%;
        right: 50%;
      }
    }
  }

  &.itemTicket3 {
    & > button {
      &:nth-child(1) {
        z-index: 10;
        rotate: -40deg;
        right: 50%;
        top: 47%;
      }

      &:nth-child(2) {
        z-index: 11;
        rotate: 0deg;
        top: 47%;
        right: 50%;
      }

      &:nth-child(3) {
        z-index: 12;
        rotate: 40deg;
        top: 47%;
        right: 50%;
      }
    }
  }

  &.itemTicket4 {
    & > button {
      &:nth-child(1) {
        z-index: 10;
        rotate: -50deg;
        right: 53%;
        top: 47%;
      }

      &:nth-child(2) {
        z-index: 11;
        rotate: -14deg;
        top: 47%;
        right: 53%;
      }

      &:nth-child(3) {
        z-index: 12;
        rotate: 14deg;
        top: 47%;
        right: 47%;
      }

      &:nth-child(4) {
        z-index: 13;
        rotate: 50deg;
        right: 47%;
        top: 47%;
      }
    }
  }

  &.itemTicket5 {
    & > button {
      &:nth-child(1) {
        z-index: 10;
        rotate: -80deg;
        right: 53%;
      }

      &:nth-child(2) {
        z-index: 11;
        rotate: -40deg;
        top: 47%;
        right: 53%;
      }

      &:nth-child(3) {
        z-index: 12;
        rotate: 0deg;
        top: 45%;
      }

      &:nth-child(4) {
        z-index: 13;
        rotate: 40deg;
        right: 47%;
        top: 47%;
      }

      &:nth-child(5) {
        z-index: 14;
        rotate: 80deg;
        right: 47%;
      }
    }
  }
`
