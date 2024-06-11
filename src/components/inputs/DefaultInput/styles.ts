import styled from 'styled-components'

export const Input = styled.input`
  padding: 10px 20px;
  font-size: 30px;
  font-family: 'Minecraft';
  border-radius: 5px;
  border: 2px solid white;
  background: #161616;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }

  @media screen and (max-width: 390px) {
    font-size: 12px;
  }
`
