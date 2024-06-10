import styled from 'styled-components'

export const Container = styled.div``

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
  position: relative;

  transition: height 0.5s ease-in-out;

  max-width: 800px;
`

export const Rules = styled.ul`
  position: absolute;

  top: 0px;
  left: 0px;

  font-size: 20px;
  padding: 20px;

  transition: transform 0.5s ease-in-out;

  :hover {
    cursor: cursor;
  }

  & > li + li {
    margin-top: 8px;
  }

  & > li {
    user-select: text;

    @media screen and (max-width: 390px) {
      font-size: 12px;
      font-weight: 300;
    }
  }
`
