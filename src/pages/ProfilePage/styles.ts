import styled from 'styled-components'

export const Container = styled.div`
  padding: 150px 50px 150px 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 100px;
`

export const NickName = styled.h1`
  text-align: center;
  font-size: 40px;
  font-family: 'Minecraft', sans-serif;
  font-weight: 500;
`

export const LasLogin = styled.div`
  position: relative;
  background: radial-gradient(
    circle,
    rgba(100, 100, 100, 1) 0%,
    rgba(50, 50, 50, 0.8) 100%
  );

  -webkit-box-shadow: inset 0px 0px 50px 15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 0px 50px 15px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 0px 50px 15px rgba(0, 0, 0, 0.75);

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px 0px;

  & > div:nth-child(1) {
    margin-bottom: 20px;
  }

  & > div {
    font-size: 20px;
    font-family: 'Minecraft', sans-serif;
    font-weight: 500;
  }
`

export const PlayerInfo = styled.div``

export const ButtonList = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    all: none;
    margin: auto auto 0px auto;
    color: white;
    width: 280px;

    margin-top: 25px;
  }
`

export const UserContainer = styled.div`
  display: flex;
  gap: 40px;
`
