import styled from 'styled-components'

export const Modal = styled.div`
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  position: relative;
`

export const ChildrenContainer = styled.div`
  padding: 0px 20px;
`
