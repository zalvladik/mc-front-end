import styled from 'styled-components'

import type { StyledDeleteItemTicketProps } from 'src/features/Modals/ModalItemsInTicket/types'

export const Container = styled.div`
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

  position: relative;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  & > h1 {
    font-family: 'Minecraft', sans-serif;
    padding-left: 20px;
    font-weight: 500;
  }
`

export const DeleteItemTicket = styled.button<StyledDeleteItemTicketProps>`
  position: absolute;
  border: none;
  padding: 0px;
  margin: 0px;
  background-color: inherit;

  left: 0px;
  top: 0px;

  translate: -50% -50%;

  rotate: 20deg;

  width: 64px;
  height: 64px;

  background-image: url('/assets/items_for_ui/barrier.png');
  background-size: contain;
  background-repeat: no-repeat;

  transition:
    transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
    rotate 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  opacity: ${props => (props.isLoading ? 0.2 : 1)};
  pointer-events: ${props => (props.isLoading ? 'none' : 'auto')};

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    rotate: 0deg;

    & > .HoverDescription {
      display: flex;
      translate: -50% -160%;

      font-size: 18px;
    }
  }
`
