import styled from 'styled-components'

export const Container = styled.div`
  padding: 175px 50px 0px 50px;
  display: flex;
  align-items: end;
  flex-wrap: wrap;

  justify-content: center;

  gap: 40px;
`

export const UserInventoryWrapper = styled.div`
  display: flex;
  width: max-content;
  flex-direction: column;
  gap: 25px;

  & > div:first-child {
    width: 270px;
    max-height: 160px;
  }
`
