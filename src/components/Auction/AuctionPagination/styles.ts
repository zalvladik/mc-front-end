import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  border-top: 1px solid gray;

  padding: 12px 0px;

  background: linear-gradient(
    90deg,
    rgba(5, 10, 15) 0%,
    rgba(25, 35, 45) 20%,
    rgba(25, 35, 45) 50%,
    rgba(25, 35, 45) 80%,
    rgba(5, 10, 15) 100%
  );
`

export const PaginationController = styled.div`
  display: flex;
  gap: 20px;

  align-items: center;

  margin: 0px auto;
`

export const Right = styled.div`
  display: flex;

  & > div:first-child {
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('/assets/items_for_ui/page_forward_highlighted.png');
  }

  & > div {
    width: 40px;
    height: 40px;

    transition:
      transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
      opacity 150ms ease;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      opacity: 0.6;
    }
  }
`

export const DoubleButttonRight = styled.div`
  position: relative;

  & > div {
    width: 40px;
    height: 40px;

    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('/assets/items_for_ui/page_forward_highlighted.png');

    &:first-child {
      opacity: 0.4;
    }

    &:last-child {
      position: absolute;
      top: 0px;
      right: -25%;
    }
  }
`

export const Left = styled.div`
  display: flex;

  & > div:last-child {
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('/assets/items_for_ui/page_backward.png');
  }

  & > div {
    width: 40px;
    height: 40px;

    transition:
      transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
      opacity 150ms ease;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      opacity: 0.6;
    }
  }
`

export const DoubleButttonLeft = styled.div`
  position: relative;

  & > div {
    width: 40px;
    height: 40px;

    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('/assets/items_for_ui/page_backward.png');

    &:last-child {
      opacity: 0.4;
    }

    &:first-child {
      z-index: 2;
      position: absolute;
      right: 25%;
    }
  }
`

export const Pages = styled.ul`
  display: flex;

  gap: 30px;

  & > li {
    font-family: 'Minecraft', sans-serif;
    font-size: 20px;
    font-weight: 500;

    opacity: 0.8;

    transition:
      transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
      opacity 150ms ease;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      opacity: 1;
    }
  }
`

export const CountItems = styled.div`
  position: absolute;

  right: 15px;
  top: 50%;

  translate: 0% -50%;

  font-family: 'Minecraft', sans-serif;
  font-size: 20px;
  font-weight: 500;
`
