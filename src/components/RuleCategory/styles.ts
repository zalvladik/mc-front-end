import styled from 'styled-components'

import type { RulesProps } from 'src/components/RuleCategory/types'

export const Container = styled.li<RulesProps>`
  display: inline;
`

export const CategoryTitle = styled.h1`
  font-family: 'Minecraft', sans-serif;
  cursor: pointer;
  position: relative;
  display: inline;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  @media screen and (max-width: 390px) {
    font-size: 15px;
    margin-left: 40px;
    font-weight: 300;
  }
`

export const Arrow = styled.span`
  left: -30px;
  position: absolute;
  font-family: 'Minecraft', sans-serif;
  transition: transform 0.3s ease;
  opacity: 0.6;

  &.rotate-90 {
    transform: rotate(90deg);
  }
`

export const RulesOverflow = styled.div`
  overflow: hidden;
  max-width: 800px;
`

export const Rules = styled.ul<RulesProps>`
  font-size: 20px;
  padding-left: 20px;
  right: 0px;
  margin-bottom: ${props => '-' + props.height + 'px'};
  opacity: 0;
  transform: translateY(-120%);
  transition:
    display 0.5s ease,
    opacity 0.5s ease,
    transform 0.5s ease,
    margin-bottom 0.5s ease;

  &.active {
    margin-bottom: 0px;
    padding: 20px;
    opacity: 0.8;
    transform: translateY(0%);
  }

  & > li + li {
    margin-top: 8px;
  }

  & > li {
    @media screen and (max-width: 390px) {
      font-size: 12px;
      font-weight: 300;
    }
  }
`
