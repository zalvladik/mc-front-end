import styled from 'styled-components'

import type {
  IsDisabledProps,
  StyledPageProps,
} from 'src/components/Auction/AuctionPagination/types'

export const Container = styled.div`
  position: relative;
  display: flex;

  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  border-top: 1px solid gray;
  height: 62px;

  background: linear-gradient(
    90deg,
    rgba(5, 10, 15) 0%,
    rgba(25, 35, 45) 20%,
    rgba(25, 35, 45) 50%,
    rgba(25, 35, 45) 80%,
    rgba(5, 10, 15) 100%
  );
`

export const PaginationController = styled.div<IsDisabledProps>`
  display: flex;
  width: 820px;
  gap: 20px;

  justify-content: space-between;

  align-items: center;

  margin: 0px auto;

  transition: opacity 200ms ease;

  opacity: ${props => (props.disabled ? 0 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`

export const SingleButttonRight = styled.div<IsDisabledProps>`
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('/assets/items_for_ui/page_forward_highlighted.png');

  opacity: ${props => (props.disabled ? 0 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`

export const Right = styled.div`
  display: flex;

  & > div {
    width: 40px;
    height: 40px;

    transition:
      transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
      opacity 200ms ease;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      opacity: 0.6;
    }
  }
`

export const DoubleButttonRight = styled.div<IsDisabledProps>`
  position: relative;

  opacity: ${props => (props.disabled ? 0.2 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};

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

export const SingleButttonLeft = styled.div<IsDisabledProps>`
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('/assets/items_for_ui/page_backward.png');

  opacity: ${props => (props.disabled ? 0.2 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`

export const DoubleButttonLeft = styled.div<IsDisabledProps>`
  position: relative;

  opacity: ${props => (props.disabled ? 0.2 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};

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
  width: 100%;
  display: flex;
  gap: 30px;

  justify-content: center;
`

export const Page = styled.li<StyledPageProps>`
  font-family: 'Minecraft', sans-serif;
  font-size: 24px;
  font-weight: 500;

  width: 40px;

  text-shadow:
    0px 0px 25px ${props => (props.isCurrentPage ? '#FFF' : '#000000')},
    0px 0px 25px ${props => (props.isCurrentPage ? '#FFF' : '#000000')};

  opacity: ${props => (props.isCurrentPage ? 1 : 0.7)};

  transition:
    transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 150ms ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    opacity: 1;
  }
`

export const CountItems = styled.div<IsDisabledProps>`
  position: absolute;

  right: 15px;
  top: 50%;

  translate: 0% -50%;

  font-family: 'Minecraft', sans-serif;
  font-size: 24px;
  font-weight: 500;

  transition: opacity 200ms ease;

  opacity: ${props => (props.disabled ? 0 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`

export const CountLots = styled.div<IsDisabledProps>`
  position: absolute;

  left: 15px;
  top: 50%;

  translate: 0% -50%;

  font-family: 'Minecraft', sans-serif;
  font-size: 20px;
  font-weight: 500;

  transition: opacity 200ms ease;

  opacity: ${props => (props.disabled ? 0.2 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`
