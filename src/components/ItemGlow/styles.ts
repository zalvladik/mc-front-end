import styled, { keyframes } from 'styled-components'

import type { StyledItemGlowerProps } from 'src/components/ItemGlow/types'

const pulseAnimation = keyframes`
  0% {
    background-color: rgba(180,50, 180, 0.2);
    opacity:0;
  }
  50% {
    background-color: rgba(220, 100, 220, 0.3);
    opacity:1;
  }
  100% {
    background-color: rgba(180,50, 180, 0.3);
    opacity:0;
  }
`

export const Container = styled.div`
  position: absolute;
  translate: -50% -50%;

  top: 50%;
  left: 50%;
`

export const GlowContainer = styled.div`
  position: relative;
`

export const ItemGlowBorder = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  translate: -50% -50%;

  top: 50%;
  left: 50%;

  mask-image: url('/assets/items_for_ui/glow_border.png');
  mask-size: contain;
  mask-repeat: no-repeat;

  -webkit-mask-image: url('/assets/items_for_ui/glow_border.png');
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;

  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(116, 9, 121, 1) 50%,
    rgba(0, 0, 0, 0) 100%
  );

  animation: ${pulseAnimation} 2s infinite ease-in-out;
`

export const ItemGlower = styled.div<StyledItemGlowerProps>`
  z-index: 50;

  position: absolute;
  translate: -50% -50%;

  top: 50%;
  left: 50%;

  mask-image: url(${props => props.maskImageUrl});
  mask-size: contain;
  mask-repeat: no-repeat;

  -webkit-mask-image: url(${props => props.maskImageUrl});
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;

  animation: ${pulseAnimation} 2s infinite ease-in-out;
`
