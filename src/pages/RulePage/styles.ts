import styled from 'styled-components'

export const Container = styled.div`
  padding: 150px 60px 100px 60px;
  display: flex;
  flex-direction: column;

  gap: 10px;

  @media screen and (max-width: 767px) {
    padding: 150px 10px 100px 50px;
  }

  @media screen and (max-width: 390px) {
    padding: 150px 10px 100px 10px;
  }
`
