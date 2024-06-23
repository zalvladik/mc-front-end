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
