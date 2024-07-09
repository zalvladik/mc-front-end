import styled from 'styled-components'

export const Input = styled.input`
  padding: 10px 20px;
  font-size: 30px;
  font-family: 'Minecraft';
  border-radius: 5px;
  border: 2px solid white;
  background: #161616;

  transition:
    transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 0.2s ease;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }

  @media screen and (max-width: 390px) {
    font-size: 12px;
  }
`
