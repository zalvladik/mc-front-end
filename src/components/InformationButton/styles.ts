import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;

  display: flex;

  align-items: center;
  justify-content: center;

  background-color: #222222;

  border: 0.5px solid white;
  border-radius: 5px;

  opacity: 0.3;

  translate: 20% -20%;
  padding: 4px;

  transition:
    transform 500ms ease,
    opacity 300ms ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    opacity: 1;
  }
`
