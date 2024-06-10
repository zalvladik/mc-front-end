import styled from 'styled-components'

export const Container = styled.div`
  padding: 12px;

  display: flex;

  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  background-image: url(${'/assets/items_for_ui/slot.png'});
  background-repeat: no-repeat;
  background-size: contain;

  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    border: none;
    cursor: pointer;
    transform: scale(1.05);

    & > .HoverDescription {
      display: flex;
    }
  }

  &:disabled {
    opacity: 0.5;
  }
`
