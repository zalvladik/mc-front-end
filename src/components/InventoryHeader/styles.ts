import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;

  & > h1 {
    display: flex;

    gap: 12px;

    font-family: 'Minecraft', sans-serif;
    padding-left: 20px;
    font-weight: 500;
  }
`
