import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  position: relative;

  margin-top: 100px;

  background: radial-gradient(
    circle,
    rgba(30, 67, 89, 1) 0%,
    rgba(20, 47, 61, 1) 100%
  );

  height: 493px;

  -webkit-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 18px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 18px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75),
    0px 0px 18px -5px rgba(255, 255, 255, 1);

  border-radius: 10px;

  padding: 20px;
`

export const SwitcherWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 0px;
  top: 0px;

  justify-content: space-around;

  width: 100%;

  translate: 0% -145%;

  & > div {
    width: 45%;
  }
`
