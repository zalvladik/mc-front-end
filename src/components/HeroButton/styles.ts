import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  padding: 12px 32px;
  border: none;
  font-size: 20px;
  align-items: center;
  color: white;
  gap: 10px;
  border-radius: 4px;
  transition:
    transform 0.1s ease-in-out,
    opacity 0.05s ease;

  @media screen and (max-width: 390px) {
    font-size: 15px;
  }

  &.active {
    opacity: 0.1;
  }

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`
