import styled from 'styled-components'

export const ItemCardContainer = styled.div`
  z-index: 120;
  position: absolute;
  display: none;

  padding: 14px;
  gap: 16px;

  flex-direction: column;
  border: 3px solid #1e0245;

  border-radius: 6px;

  background-color: #120312;

  translate: 20% 20%;
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
