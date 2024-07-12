import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  position: relative;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  align-items: center;

  width: max-content;
  justify-content: start;

  width: 100%;
  height: 100%;

  border-radius: 12px;

  background: radial-gradient(
    circle,
    rgba(80, 80, 80, 1) 0%,
    rgba(40, 40, 40, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 50px 10px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 50px 10px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 50px 10px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);

  & > h1 {
    position: absolute;
    top: 15px;

    font-family: 'Minecraft', sans-serif;
    font-size: 24px;
    font-weight: 500;

    text-shadow: 2.5px 2.5px 1px rgb(200, 200, 200, 0.5);
  }
`

export const ButtonsContainer = styled.div`
  width: 460px;

  padding: 10px;

  margin-top: 50px;

  display: flex;
  flex-direction: column;
  gap: 9px;
`

export const DefaultButtonWrapper = styled.div`
  display: flex;

  justify-content: space-between;
`
