import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;

  & > h1 {
    font-family: 'Minecraft', sans-serif;
    padding-left: 20px;
    font-weight: 500;
  }
`

export const TfiReloadWrapper = styled.button`
  background-image: url(${'/assets/items_for_ui/slot.png'});
  background-color: inherit;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 12px;
  border: none;
  margin-left: 10px;

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
