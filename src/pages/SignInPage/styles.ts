import styled from 'styled-components'

export const Container = styled.div`
  padding: 150px 50px 50px 50px;
  display: flex;
`

export const FormImage = styled.div`
  position: relative;
  margin: 0px auto;
  background-image: url(${'src/assets/authBG.png'});
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
    border-bottom: 2px solid black;

    &:focus-visible {
      outline: none;
    }
  }

  & + & {
    margin-top: 30px;
  }
`

export const ButtonSubmit = styled.button`
  margin: auto auto 0px auto;
  color: white;
  background-image: url(${'button.png'});
  background-repeat: no-repeat;
  width: 280px;
  height: 50px;
  border: none;
  font-size: 25px;
  font-family: 'Minecraft', sans-serif;
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
  background-color: inherit;
  border: none;

  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`
export const CrossWrapper = styled.div`
  position: relative;
  width: 90px;
  height: 90px;

  & > div {
    right: 0px;
    position: absolute;
    width: 90px;
    height: 90px;
    background-image: url(${'src/assets/minecraftItems/redstone_torch.png'});
    background-size: contain;
    background-repeat: no-repeat;

    &:nth-child(1) {
      transform: rotate(45deg) translate(18%, -18%);
    }

    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
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
