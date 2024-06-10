import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 3px;

  height: max-content;
`

export const CatogeryButton = styled.div`
  padding: 10px;

  /* height: max-content; */

  background-image: url('/assets/items_for_ui/slot.png');
  background-repeat: no-repeat;
  background-size: contain;

  & > div:first-child {
    background-color: inherit;
    background-repeat: no-repeat;
    background-size: contain;
  }

  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    border: none;
    cursor: pointer;
    transform: scale(1.05);

    & > div.HoverDescription {
      display: flex;
    }
  }
`
