import styled from 'styled-components'

import DefaultInput from 'src/components/inputs/DefaultInput'
import InventoryHeader from 'src/components/InventoryHeader'
import { InventoryHeaderTitle } from 'src/components/InventoryHeader/styles'
import ItemList from 'src/components/ItemList'
import {
  EmptySlot,
  ItemAmount,
  ItemButtom,
  ItemIcon,
} from 'src/components/ItemList/styles'

import PaginationTab from 'src/features/PaginationTab'

export const Container = styled.div`
  position: relative;
`

export const InventoryWrapper = styled.div`
  display: flex;
  position: relative;
  width: max-content;
  flex-direction: column;

  width: 100%;

  background-color: gray;
  padding: 5px 10px;

  background: radial-gradient(
    circle,
    rgba(30, 57, 65, 1) 0%,
    rgba(20, 46, 65, 1) 100%
  );

  border-radius: 10px;

  -webkit-box-shadow:
    inset 0px 0px 40px 10px rgba(0, 0, 0, 0.75),
    0px 0px 18px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 40px 10px rgba(0, 0, 0, 0.75),
    0px 0px 18px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 40px 10px rgba(0, 0, 0, 0.75),
    0px 0px 18px -5px rgba(255, 255, 255, 1);
`

export const StyledItemList = styled(ItemList)`
  width: 100%;
  height: 270px;

  padding: 5px 5px;

  & > ${ItemButtom} {
    width: 78.2px;
    height: 78.2px;

    & > ${ItemIcon} {
      width: 50px;
      height: 50px;
    }

    & > ${ItemAmount} {
      font-size: 20px;
    }
  }

  & > ${EmptySlot} {
    width: 78.2px;
    height: 78.2px;
  }
`

export const StyledInventoryHeader = styled(InventoryHeader)`
  margin-bottom: 10px;

  & > ${InventoryHeaderTitle} {
    font-size: 25px;
  }
`

export const InventoryFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;

  & > div:first-child {
    padding: 10px 0px;
  }
`

export const StyledPaginationTab = styled(PaginationTab)`
  position: static;
  background: rgba(0, 0, 0, 0);
  translate: 0% 0%;
  border: none;
`

export const StyledDefaultInput = styled(DefaultInput)`
  padding: 5px 10px;
  font-size: 25px;
  border: 1px solid gray;
  width: 355px;
`

export const CreateLotContainer = styled.div`
  margin-top: auto;

  height: 40%;

  display: flex;
  justify-content: space-between;
  align-items: end;
`

export const ShowItemContainer = styled.div`
  position: relative;

  width: 293px;
  height: 130px;

  /* margin-top: 120px; */
  margin-left: 20px;

  align-items: end;

  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('/assets/items_for_ui/create_lot.png');

  translate: 0% 15%;

  & > div {
    position: absolute;

    top: 0px;
    left: 50%;

    translate: -50% -110%;

    width: 120px;
    height: 120px;

    background-repeat: no-repeat;
    background-size: contain;

    animation: ShowItemContainer_Item 4s infinite ease-in-out;

    @keyframes ShowItemContainer_Item {
      0% {
        transform: rotate(-2deg) translateY(5px);
      }
      50% {
        transform: rotate(4deg) translateY(20px);
      }
      100% {
        transform: rotate(-2deg) translateY(5px);
      }
    }
  }
`
