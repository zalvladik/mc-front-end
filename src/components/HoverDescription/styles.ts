import styled from 'styled-components'

export const Container = styled.div`
  z-index: 120;
  position: absolute;
  display: none;
  flex-direction: column;
  border: 2px solid #555555;
  border-radius: 5px;
  overflow: hidden;
  left: 50%;
  translate: -50% -50%;
  background-color: #212121;
  pointer-events: none;
`

export const Description = styled.ul`
  padding: 8px 15px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 390px) {
    padding: 8px 3px 3px 3px;
  }

  & > li {
    text-align: center;
    white-space: nowrap;
    font-size: 25px;
    font-family: 'Minecraft', sans-serif;
  }
`
