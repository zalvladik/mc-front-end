import styled from 'styled-components'

export const FormBox = styled.div`
  display: flex;
  border-radius: 20px;
  max-width: 1000px;
  background: rgba(217, 217, 217, 0.05);
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`

export const PriceBox = styled.div`
  padding: 40px 40px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > span {
    align-items: center;
    display: flex;
    flex-direction: column;
    & > p {
      position: relative;
      bottom: 20px;
      font-size: 25px;
      opacity: 0.5;
    }
    & > h1 {
      font-family: 'Nunito Sans', sans-serif;
      font-size: 100px;
      font-weight: 800;
    }
  }
`

export const AboutBox = styled.div`
  padding: 40px 40px;
  gap: 20px;
  justify-content: center;
  flex-direction: column;
  display: flex;
  border-radius: 20px;
  background: rgba(217, 217, 217, 0.05);
  & p {
    opacity: 0.5;
    font-size: 20px;
    font-weight: 600;
    line-height: normal;
    @media screen and (max-width: 390px) {
      font-size: 14px;
      font-weight: 300;
    }
  }
`

export const ButtonsBox = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
