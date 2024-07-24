import styled from 'styled-components'

export const Modal = styled.div`
  overflow: hidden;
  z-index: 999;
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChildrenContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
