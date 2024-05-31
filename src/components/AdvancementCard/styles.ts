import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
