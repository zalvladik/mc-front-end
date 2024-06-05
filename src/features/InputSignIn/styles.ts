import styled from 'styled-components'

export const Input = styled.input`
  padding: 10px 15px;
  background-color: inherit;
  border: none;
  font-size: 25px;
  font-family: 'Minecraft', sans-serif;
  color: black;

  &[type='password' i] {
    -webkit-text-security: circle !important;
    padding-block: 1px;
    padding-inline: 12px;
  }
`
