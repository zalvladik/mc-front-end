import styled from 'styled-components'

import DefaultButton from 'src/components/DefaultButton'

export const Container = styled.div`
  padding: 150px 50px 50px 50px;
  display: flex;
`

export const FormImage = styled.div`
  position: relative;
  margin: 0px auto;
  background-image: url(${'/assets/authBG.png'});
  width: 584px;
  height: 720px;
`

export const FormContainer = styled.div`
  margin-top: 150px;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InputWrapper = styled.div`
  position: relative;

  & > input {
    width: 300px;
    border-bottom: 3px solid black;

    &:focus-visible {
      outline: none;
    }
  }

  & + & {
    margin-top: 30px;
  }
`

export const StyledDefaultButton = styled(DefaultButton)`
  margin: auto auto 0px auto;
  width: 280px;
`

export const ErrorMessage = styled.p`
  color: #b81414;
  font-family: 'Minecraft', sans-serif;
  position: absolute;
  transform: translate(0%, 120%);
  bottom: 0px;
  right: 0px;
`

export const Description = styled.p`
  text-align: center;
  width: 70%;
  color: black;
  font-size: 18px;
  margin-top: 30px;

  & + & {
    margin-top: 0px;
  }
`
