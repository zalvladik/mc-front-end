import { animated } from '@react-spring/web'
import styled from 'styled-components'

export const AdvantagesSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 40px;
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 50px;
`

export const CustomAnimated = styled(animated.div)`
  max-width: 300px;
  width: 100%;
  padding: 50px 30px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.02);

  transition:
    background-color 0.2s ease-in-out,
    scale 0.2s ease-in-out;
  &:hover {
    scale: 1.05;
    background-color: rgba(255, 255, 255, 0.05);
  }
`
