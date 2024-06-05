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

export const Container = styled.div`
  position: relative;
`

export const ChildrenContainer = styled.div`
  padding: 0px 20px;
  width: 100vw;
  height: 100vh;
`
