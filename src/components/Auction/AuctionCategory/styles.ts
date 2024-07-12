import styled from 'styled-components'

import type {
  ButtonCategoryProps,
  ButtonItemsProps,
} from 'src/components/Auction/AuctionCategory/types'

export const Container = styled.div`
  background-color: rgba(15, 25, 35, 1);
  padding: 15px 10px 10px 10px;

  width: 320px;

  border-top-left-radius: 8px;

  transition: opacity 0.3s ease-in-out;

  -webkit-box-shadow: inset 0px 0px 16px 12px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: inset 0px 0px 16px 12px rgba(0, 0, 0, 0.6);
  box-shadow: inset 0px 0px 16px 12px rgba(0, 0, 0, 0.6);
`

export const DescriptionCategory = styled.div`
  text-align: start;

  & > p {
    font-family: 'Minecraft', sans-serif;
    font-size: 16px;
    font-weight: 500;
  }
`

export const EnchantTypes = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  border: 1px solid black;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;

  padding: 6px 12px;

  background: radial-gradient(
    circle,
    rgba(30, 67, 89, 1) 0%,
    rgba(20, 47, 61, 1) 100%
  );

  -webkit-box-shadow: inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75);

  & > h1 {
    font-family: 'Minecraft', sans-serif;
    font-size: 24px;
    font-weight: 500;

    text-shadow: 2.5px 2.5px 1px rgb(200, 200, 200, 0.5);
  }

  & > div {
    display: flex;

    margin-top: 20px;
    gap: 10px;
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

  transition:
    transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
    background-color 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`

export const ButtonItems = styled.div<ButtonItemsProps>`
  z-index: 2;
  display: flex;
  gap: 12px;

  border-radius: 3px;

  text-shadow: 2px 2px 1px rgba(150, 150, 150, 0.7);

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
    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: inherit;
    background-repeat: no-repeat;
    background-size: contain;
  }
`

export const EnchantTypeCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`
