import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;

  top: 120px;
  right: 0px;

  transition:
    transform 500ms ease,
    opacity 300ms ease-in-out;

  &.visible {
    transform: translate(-10%, 0%);
    opacity: 1;

    &:hover {
      cursor: pointer;
      transform: scale(1.04) translate(-10%, 0%);
    }
  }

  &.vanish {
    transform: translate(100%, 0%);
    opacity: 0;
  }
`

export const ContentWrapper = styled.div`
  display: flex;

  min-width: 430px;
  min-height: 110px;

  padding: 20px 20px 20px 0px;

  background-color: #212121;
`

export const ToastImageContainer = styled.div`
  padding-left: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 60px;
    height: 60px;

    background-size: contain;
    background-repeat: no-repeat;
  }
`

export const ToastText = styled.div`
  position: relative;
  padding-left: 15px;

  align-self: center;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    & > div {
      text-align: center;

      white-space: nowrap;
      font-family: 'Minecraft', sans-serif;
      font-weight: 500;
    }
  }
`

export const Border = styled.div`
  position: relative;

  margin-top: 10px;
  padding: 10px;

  border-radius: 30px;

  & > .border {
    z-index: 1;

    position: absolute;
    width: 12px;
    height: 12px;

    background-image: url('/assets/toast_parts/border.svg');

    &.border_bottom {
      bottom: 0px;
      left: 20px;
      width: calc(100% - 40px);
    }

    &.border_top {
      top: 0px;
      left: 20px;

      rotate: 180deg;
      width: calc(100% - 40px);
    }

    &.border_left {
      left: 0px;
      top: 20px;

      background-image: url('/assets/toast_parts/border_left.svg');
      height: calc(100% - 40px);
    }

    &.border_right {
      right: 0px;
      top: 20px;

      background-image: url('/assets/toast_parts/border_right.svg');
      height: calc(100% - 40px);
    }
  }

  & > .angle {
    z-index: 2;

    position: absolute;
    width: 30px;
    height: 30px;

    background-repeat: no-repeat;
    background-image: url('/assets/toast_parts/angle.svg');

    &.angle_right_top {
      right: 0px;
      top: 0px;

      rotate: 180deg;
    }

    &.angle_right_bottom {
      right: 0px;
      bottom: 0px;

      rotate: -90deg;
    }

    &.angle_left_top {
      left: 0px;
      top: 0px;

      rotate: 90deg;
    }

    &.angle_left_bottom {
      left: 0px;
      bottom: 0px;
    }
  }
`
