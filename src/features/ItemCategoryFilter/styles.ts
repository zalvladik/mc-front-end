import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  /* flex-direction: column; */

  gap: 3px;
  & > button {
    border: none;
    background-image: url('/assets/slot.png');
    background-color: inherit;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 10px;

    & > div {
      width: 30px;
      height: 30px;
      background-color: inherit;
      background-repeat: no-repeat;
      background-size: contain;
    }

    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      border: none;
      cursor: pointer;
      transform: scale(1.05);
    }
  }
`
