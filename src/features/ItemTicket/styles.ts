import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  user-select: none;

  left: 350px;
  top: 0px;

  width: 167px;
  height: 120px;

  transform: translate(0%, -100%);

  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/assets/item_ticket_crop.png');

  transform-origin: bottom center;
  transition:
    transform 0.3s ease,
    opacity 1s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: translate(0%, -100%) scale(1.05);

    & > .hover_description {
      display: flex;
      translate: -50% -150%;
    }
  }
`

export const ItemTicketIdWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
