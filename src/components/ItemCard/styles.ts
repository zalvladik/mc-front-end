import styled from 'styled-components'

export const Container = styled.div`
  z-index: 120;
  position: absolute;
  display: none;
  flex-direction: column;
  border: 2px solid #555555;
  border-radius: 5px;
  overflow: hidden;
  /* left: 50%; */
  /* translate: -50% -0%; */
  background-color: #212121;
  pointer-events: none;
`

export const Title = styled.div`
  padding: 4px 10px;

  p {
    white-space: nowrap;
    font-size: 20px;
    font-family: 'Minecraft', sans-serif;
  }
`

export const Description = styled.ul`
  padding: 3px 10px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 390px) {
    padding: 8px 3px 3px 3px;
  }

  & > li {
    & > p {
      white-space: nowrap;
      font-size: 20px;
      font-family: 'Minecraft', sans-serif;
    }
  }
`

export const Text = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  display: flex;
  line-height: normal;

  @media screen and (max-width: 390px) {
    font-size: 14px;
    font-weight: 300;
  }
`
