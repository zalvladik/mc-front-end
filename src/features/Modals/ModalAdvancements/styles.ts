import styled from 'styled-components'

export const AdvancementsMapWrapper = styled.div`
  background-color: rgba(20, 20, 20, 0.9);
  width: 100vw;
`

export const ButtonClose = styled.button`
  z-index: 1000;
  position: absolute;
  top: 20px;
  right: 50px;
  background-color: inherit;
  border: none;

  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`

export const CrossWrapper = styled.div`
  position: relative;
  width: 90px;
  height: 90px;

  & > div {
    right: 0px;
    position: absolute;
    width: 90px;
    height: 90px;
    background-image: url(${'src/assets/minecraftItems/redstone_torch.png'});
    background-size: contain;

    background-repeat: no-repeat;

    &:nth-child(1) {
      transform: rotate(45deg) translate(18%, -18%);
    }

    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`
