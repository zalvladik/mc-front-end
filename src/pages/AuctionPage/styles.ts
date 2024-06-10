import styled from 'styled-components'

import ReloadButtton from 'src/components/ReloadButton'

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin-top: 50px;

  border-radius: 8px;

  -webkit-box-shadow: 0px 0px 18px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 18px -5px rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 18px -5px rgba(255, 255, 255, 1);

  & > div {
    position: relative;
  }
`

export const BodyCenterContainer = styled.div`
  width: 850px;

  & > div {
    width: 100%;
    height: 100%;

    border-left: 2px solid gray;
    border-right: 2px solid gray;

    padding: 10px 20px 10px 20px;
  }
`

export const StyledReloadButtton = styled(ReloadButtton)`
  position: absolute;
  z-index: 999;
  left: 10px;
  bottom: 6px;

  transition: opacity 0.3s ease-in-out;
`

export const BodyContainer = styled.div`
  display: flex;
`

export const AuctionCategoryWrapper = styled.div`
  position: relative;
`

export const AuctionCategoryDisabled = styled.div`
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
`
