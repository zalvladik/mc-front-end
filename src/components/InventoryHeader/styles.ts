import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;

  & > button {
    all: none;
    color: white;
    width: 190px;
    height: 50px;
    border: none;
    font-size: 25px;
    font-family: 'Minecraft', sans-serif;
    font-weight: 500;
    margin-right: 20px;
    background-image: url(${'/assets/buttons/button_190.png'});
    background-color: inherit;
    background-repeat: no-repeat;
    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }

    &:disabled {
      opacity: 0.5;
    }
  }

  & > h1 {
    font-family: 'Minecraft', sans-serif;
    padding-left: 20px;
    font-weight: 500;
  }
`

export const TfiReloadWrapper = styled.button`
  background-image: url(${'/assets/slot.png'});
  background-color: inherit;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 12px;
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  border: none;
  margin-left: 10px;

  &:hover {
    border: none;
    cursor: pointer;
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.5;
  }
`
