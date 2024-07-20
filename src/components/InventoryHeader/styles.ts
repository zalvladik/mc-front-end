import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InventoryHeaderTitle = styled.div`
  display: flex;
  align-items: end;

  gap: 12px;

  & > p:first-child {
    font-family: 'Minecraft', sans-serif;
    padding-left: 20px;
    font-weight: 500;
    font-size: 30px;
  }

  & > p:last-child {
    font-family: 'Minecraft', sans-serif;
    padding-left: 22px;
    font-weight: 500;
    font-size: 26px;
  }
`
