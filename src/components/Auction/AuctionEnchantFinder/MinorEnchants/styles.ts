import { FaArrowDownShortWide } from 'react-icons/fa6'
import styled from 'styled-components'

export const ButtonsContainer = styled.div`
  width: 410px;

  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const OverflowMinorEnchants = styled.div`
  position: absolute;

  overflow: hidden;

  width: 390px;

  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 8px;

  transition: height 0.2s ease-in-out;
`

export const MinorEnchantsContainer = styled.div`
  position: relative;

  flex-direction: column;
  display: flex;
  gap: 8px;

  padding: 10px;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 4px solid black;
  border-top: none;

  background: radial-gradient(
    circle,
    rgba(70, 100, 120, 1) 0%,
    rgba(60, 90, 100, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 10px 3px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 10px 3px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 10px 3px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);

  transition: transform 0.2s ease-in-out;
`

export const StyledFaArrowDownShortWide = styled(FaArrowDownShortWide)`
  filter: drop-shadow(3px 3px 1px rgba(0, 0, 0, 0.8));
`
