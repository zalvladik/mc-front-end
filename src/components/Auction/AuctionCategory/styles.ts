import styled from 'styled-components'

import type {
  ButtonCategoryProps,
  ButtonItemsProps,
} from 'src/components/Auction/AuctionCategory/types'

export const Container = styled.div`
  background-color: rgba(15, 25, 35, 1);
  padding: 15px 10px 10px 10px;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  -webkit-box-shadow: inset 0px 0px 16px 12px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: inset 0px 0px 16px 12px rgba(0, 0, 0, 0.6);
  box-shadow: inset 0px 0px 16px 12px rgba(0, 0, 0, 0.6);
`

export const CategoryContainer = styled.div`
  width: 320px;
`

export const CategoryTitleContainer = styled.div`
  background-color: rgba(25, 35, 45, 1);

  border: 1px solid gray;
  text-align: center;

  width: 80%;

  padding: 5px 10px;
  margin: 0px auto;
  margin-bottom: 8px;

  border-radius: 4px;

  & > p {
    font-family: 'Minecraft', sans-serif;
    font-size: 20px;
    font-weight: 500;
  }
`

export const DescriptionCategory = styled.div`
  text-align: start;

  & > p {
    font-family: 'Minecraft', sans-serif;
    font-size: 16px;
    font-weight: 500;
  }
`

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 10px;
  border-radius: 8px;
`

export const ButtonCategory = styled.button<ButtonCategoryProps>`
  position: relative;

  display: flex;
  padding: 2px;

  gap: 20px;

  border: none;
  border-radius: 4px;

  align-items: center;

  background-color: rgba(40, 60, 80, 0.15);

  background: ${({ isSelected }) =>
    isSelected
      ? `linear-gradient(
        90deg,
        rgba(212, 175, 55, 1) 0%,
        rgba(212, 175, 55, 0.7) 40%,
        rgba(212, 175, 55, 0.6) 50%,
        rgba(212, 175, 55, 0.3) 60%,
        rgba(212, 175, 55, 0.1) 70%,
        rgba(212, 175, 55, 0.05) 80%,
        rgba(212, 175, 55, 0) 90%,
        rgba(212, 175, 55, 0) 100%
                    )`
      : ''};

  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`

export const ButtonItems = styled.div<ButtonItemsProps>`
  z-index: 2;
  display: flex;
  gap: 20px;

  border-radius: 3px;

  background: ${({ isSelected }) =>
    isSelected
      ? `linear-gradient(
    90deg,
    rgba(25, 45, 55, 1) 0%,
    rgba(25, 45, 55, 1) 50%,
    rgba(25, 45, 55, 1) 60%,
    rgba(25, 45, 55, 0.9) 70%,
    rgba(25, 45, 55, 0.5) 80%,
    rgba(25, 45, 55, 0.1) 90%,
    rgba(25, 45, 55, 0) 100%
  )`
      : ''};

  padding: 6px;

  width: 100%;
  height: 100%;

  align-items: center;

  & > div:first-child {
    width: 36px;
    height: 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: inherit;
    background-repeat: no-repeat;
    background-size: contain;
  }
`
