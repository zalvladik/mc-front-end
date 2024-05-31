import { animated } from '@react-spring/web'
import styled from 'styled-components'

export const CardContainer = styled(animated.a)`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 30px 30px;
  max-width: 250px;
  gap: 20px;
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  justify-content: center;
  background: rgba(255, 255, 255, 0.02);
  transition:
    background-color 0.1s ease-in-out,
    scale 0.2s ease-in-out;

  &:hover {
    scale: 1.05;
    background-color: rgba(255, 255, 255, 0.05);
  }
`
