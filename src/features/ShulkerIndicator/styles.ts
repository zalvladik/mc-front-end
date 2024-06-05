import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: -30px;
  transform: translate(100%, 0%);
  height: 100%;

  & > div {
    position: relative;
    background-color: gray;
    width: 120px;
    border: 1px solid black;
    border-radius: 5px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const ShulkerIndicatorWrapper = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 20px;
  right: 20px;

  & > div {
    position: relative;
    width: 100px;
    height: 100px;

    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('http://localhost:8080/public/sh/shulker_box.png');
  }
`

export const Indicator = styled.div`
  position: absolute;

  font-size: 30px;
  font-family: 'Minecraft', sans-serif;
  font-weight: 500;

  bottom: 70%;
  left: 70%;
`
