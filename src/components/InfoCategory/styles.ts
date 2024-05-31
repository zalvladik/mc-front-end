import styled from 'styled-components'

export const Container = styled.div`
  display: inline;
`

export const CategoryTitle = styled.h1`
  font-family: 'Minecraft', sans-serif;
  cursor: pointer;
  position: relative;
  display: inline;
  user-select: none;
  margin-left: 35px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  & {
    @media screen and (max-width: 390px) {
      font-size: 15px;
      font-weight: 300;
    }
  }
`

export const Arrow = styled.span`
  left: -35px;
  position: absolute;
  font-family: 'Minecraft', sans-serif;
  transition: transform 0.3s ease;
  opacity: 0.6;

  &.rotate-90 {
    transform: rotate(90deg);
  }
`

export const RulesWrapper = styled.div`
  margin-top: 20px;
  position: absolute;
  border: 2px solid white;
  transform: translateY(-140%);
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;

  transition:
    opacity 0.5s ease,
    transform 0.5s ease,
    height 0.5s ease;

  &.active {
    position: static;
    transform: translateY(0%);
    opacity: 1;
  }
`

export const Rules = styled.ul`
  padding: 30px;
  font-size: 24px;

  & > li + li {
    margin-top: 8px;
  }

  & > li {
    @media screen and (max-width: 390px) {
      font-size: 12px;
    }
  }
`
