import styled from 'styled-components'

export const Title = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;
  & > h1 {
    font-family: 'Minecraft', sans-serif;
  }

  & > h1 {
    @media screen and (max-width: 390px) {
      font-size: 22px;
    }
  }
`
