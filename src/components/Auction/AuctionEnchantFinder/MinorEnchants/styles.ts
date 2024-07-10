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
  border: 2px solid gray;
  border-top: none;

  background: radial-gradient(
    circle,
    rgba(100, 110, 120, 1) 0%,
    rgba(30, 35, 40, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);

  transition: transform 0.2s ease-in-out;
`
