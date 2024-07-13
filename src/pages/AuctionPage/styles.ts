import type { IsDisabeledByFragmentProps } from 'src/pages/AuctionPage/types'
import styled from 'styled-components'

export const DefaultInputWrapper = styled.div`
  position: absolute;
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding-right: 50px;

  top: -24px;
  left: 0px;

  translate: 0% -100%;

  & > div {
    display: flex;
    gap: 30px;

    & .defaultInput {
      font-size: 20px;
      width: 340px;
    }

    & > div:last-child {
      position: absolute;

      left: 0px;
    }
  }
`

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: 750px;

  margin-top: 80px;

  border-radius: 8px;

  -webkit-box-shadow: 0px 0px 18px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 18px -5px rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 18px -5px rgba(255, 255, 255, 1);

  & > div {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

export const BodyCenterContainer = styled.div<IsDisabeledByFragmentProps>`
  width: 850px;

  background: ${props =>
    props.disabled
      ? `linear-gradient(
    0deg,
    rgba(15, 50, 70, 1) 0%,
    rgba(15, 15, 15, 1) 40%,
    rgba(15, 15, 15, 1) 100%
  )`
      : 'rgba(0,0,0,0)'};

  & > div {
    width: 100%;
    height: 100%;

    border-left: 2px solid gray;
    border-right: 2px solid gray;

    padding: 10px 20px 10px 20px;
  }
`

export const BodyContainer = styled.div`
  display: flex;
  flex: 1;
`

export const AuctionCategoryWrapper = styled.div`
  position: relative;
`

export const AuctionCategoryDisabled = styled.div<IsDisabeledByFragmentProps>`
  position: absolute;

  top: 50%;
  left: 50%;

  translate: -50% -50%;

  width: 120px;
  height: 120px;

  -webkit-box-shadow: 0px 0px 50px 5px rgba(120, 120, 120, 1);
  -moz-box-shadow: 0px 0px 50px 5px rgba(120, 120, 120, 1);
  box-shadow: 0px 0px 50px 5px rgba(120, 120, 120, 1);

  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('/assets/items_for_ui/locked_button.png');

  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  opacity: ${props => (props.disabled ? 1 : 0)};
  transform: ${props => (props.disabled ? 'scale(1)' : 'scale(0)')};
`
