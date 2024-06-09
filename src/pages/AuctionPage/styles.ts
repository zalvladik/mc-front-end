import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin-top: 50px;

  -webkit-box-shadow: 0px 0px 18px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 18px -5px rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 18px -5px rgba(255, 255, 255, 1);

  border-radius: 8px;
  overflow: hidden;

  & > div {
    display: flex;
  }
`

export const BodyContainer = styled.div`
  display: flex;
`
