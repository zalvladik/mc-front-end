import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: rgba(15, 25, 35, 1);
  padding: 10px 10px 10px 10px;

  border-top-right-radius: 8px;

  -webkit-box-shadow: inset 0px 0px 16px 12px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: inset 0px 0px 16px 12px rgba(0, 0, 0, 0.6);
  box-shadow: inset 0px 0px 16px 12px rgba(0, 0, 0, 0.6);
`

export const ButtonsContainer = styled.div`
  width: 320px;

  padding: 10px 0px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div {
    margin: 0px auto;

    & > div {
      font-size: 22px;
    }
  }
`

export const EnchantSearchInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto auto 10px auto;

  gap: 10px;

  width: 75%;

  border-radius: 6px;
  padding: 10px 0px;

  -webkit-box-shadow:
    inset 0px 0px 30px 10px rgba(0, 0, 0, 0.75),
    0px 0px 5px 0px rgba(255, 255, 255, 0.8);
  -moz-box-shadow:
    inset 0px 0px 30px 10px rgba(0, 0, 0, 0.75),
    0px 0px 5px 0px rgba(255, 255, 255, 0.8);
  box-shadow:
    inset 0px 0px 30px 10px rgba(0, 0, 0, 0.75),
    0px 0px 5px 0px rgba(255, 255, 255, 0.8);
`
