import styled from 'styled-components'

export const ItemHoverDescriptionContainer = styled.div`
  z-index: 1200;

  transition: opacity 200ms ease-in-out;

  padding: 0px;
  gap: 16px;

  flex-direction: column;
  border: 3px solid #1e0245;

  display: flex;
  flex-direction: column;

  gap: 20px;

  border-radius: 6px;
  pointer-events: none;

  background-color: #120312;
`

export const Title = styled.div`
  p {
    white-space: nowrap;
    font-size: 24px;
    font-family: 'Minecraft', sans-serif;
  }
`

export const Description = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 390px) {
    padding: 8px 3px 3px 3px;
  }

  & > li {
    & > p {
      white-space: nowrap;

      font-size: 24px;
      font-family: 'Minecraft', sans-serif;
      text-shadow: '3px 3px #292929';
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
