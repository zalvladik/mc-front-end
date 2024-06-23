import styled from 'styled-components'

export const WikiPageContainer = styled.div`
  padding: 160px 60px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    padding: 160px 30px;
  }

  @media screen and (max-width: 390px) {
    padding: 160px 5px;
  }
`

export const PasportUl = styled.ul`
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;

  @media screen and (max-width: 767px) {
    gap: 20px;
  }

  @media screen and (max-width: 390px) {
    gap: 15px;
  }
`

export const PasportLi = styled.li`
  list-style: none;
  overflow: hidden;
  text-align: start;
  width: 220px;
  border: 2px solid white;
  border-radius: 10px;
  transition: scale 0.3s ease;
  background: linear-gradient(
    35deg,
    rgba(71, 74, 78, 0.4) 0%,
    rgba(55, 55, 66, 0.4) 20%,
    rgba(65, 141, 148, 0.2) 50%,
    rgba(45, 64, 82, 0.4) 80%,
    rgba(32, 154, 196, 0.4) 100%
  );

  &:hover {
    scale: 1.05;
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    width: 120px;
  }

  @media screen and (max-width: 390px) {
    width: 100px;
  }
`

export const FormContainer = styled.div`
  margin: 0px auto 60px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 390px) {
    display: flex;
    flex-direction: column;
  }
`

export const UserNameContainer = styled.div`
  position: relative;
  padding: 10px 40px 10px 10px;

  @media screen and (max-width: 767px) {
    padding-right: 30px;
  }

  @media screen and (max-width: 390px) {
    padding-right: 25px;
  }

  & > p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 25px;
    font-family: 'Minecraft';

    @media screen and (max-width: 767px) {
      font-size: 16px;
      font-weight: 500;
    }

    @media screen and (max-width: 390px) {
      font-size: 12px;
      font-weight: 500;
    }
  }

  & > div {
    position: absolute;
    color: #fcfc03;
    right: 5px;
    top: 50%;
    translate: 0% -50%;
    font-size: 20px;
    font-family: 'Minecraft';

    @media screen and (max-width: 767px) {
      font-size: 16px;
    }

    @media screen and (max-width: 390px) {
      font-size: 12px;
    }
  }
`

export const SelectContainer = styled.div`
  display: flex;
`

export const OptionFilter = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  border: 2px solid white;
  background: #161616;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-family: 'Minecraft';
  transition: scale 0.2s ease;

  @media screen and (max-width: 767px) {
    width: 50px;
    height: 50px;
    font-size: 16px;
  }

  @media screen and (max-width: 390px) {
    width: 40px;
    height: 40px;
    font-size: 12px;
  }

  & > svg {
    @media screen and (max-width: 767px) {
      scale: 0.7;
    }

    @media screen and (max-width: 390px) {
      scale: 0.5;
    }
  }

  & + & {
    margin-left: 15px;
  }

  &:hover {
    scale: 1.05;
  }
`
