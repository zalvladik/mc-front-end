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

export const VipDateInfoContainer = styled.div`
  position: relative;

  background-color: gray;

  padding: 20px 0px;
  border-radius: 6px;

  border: 2px solid rgba(50, 50, 50, 1);

  text-align: center;

  background: radial-gradient(
    circle,
    rgba(100, 110, 120, 1) 0%,
    rgba(30, 35, 40, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 10px 4px rgba(0, 0, 0, 1),
    0px 0px 8px 0px rgba(255, 255, 255, 0.4);
  -moz-box-shadow:
    inset 0px 0px 10px 4px rgba(0, 0, 0, 1),
    0px 0px 8px 0px rgba(255, 255, 255, 0.4);
  box-shadow:
    inset 0px 0px 10px 4px rgba(0, 0, 0, 1),
    0px 0px 8px 0px rgba(255, 255, 255, 0.4);

  & > h3 {
    font-family: 'Minecraft', sans-serif;
    font-weight: 500;
    font-size: 24px;

    text-shadow: 3px 3px 2px rgba(0, 0, 0, 1);
  }
`

export const VipImage = styled.div`
  position: absolute;
  top: 10%;

  translate: 40% -60%;

  right: 0px;
  width: 50px;
  height: 50px;

  background-repeat: no-repeat;
  background-size: contain;
`

export const VipDateInfo = styled.div`
  display: flex;
  gap: 6px;

  margin: 0px auto;
  margin-top: 10px;

  width: max-content;

  font-weight: 900;
  font-size: 14px;
  text-shadow: 3px 3px 2px rgba(0, 0, 0, 1);
  color: white;

  & > div {
    font-family: 'Minecraft', sans-serif;
    font-weight: 500;
    font-size: 16px;

    text-shadow: 3px 3px 2px rgba(0, 0, 0, 1);
  }
`
