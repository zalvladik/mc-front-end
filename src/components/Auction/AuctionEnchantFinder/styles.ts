import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  position: relative;
`

export const Container = styled.div`
  display: flex;
  position: relative;

  width: max-content;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  border-radius: 12px;

  background: radial-gradient(
    circle,
    rgba(100, 110, 120, 1) 0%,
    rgba(30, 35, 40, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.6),
    0px 0px 8px 0px rgba(200, 200, 200, 1);
  -moz-box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.6),
    0px 0px 8px 0px rgba(200, 200, 200, 1);
  box-shadow:
    inset 0px 0px 96px 28px rgba(0, 0, 0, 0.6),
    0px 0px 8px 0px rgba(200, 200, 200, 1);
`

export const EnchantTypeCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  border: 1px solid black;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;

  padding: 6px 12px;

  background: radial-gradient(
    circle,
    rgba(30, 67, 89, 1) 0%,
    rgba(20, 47, 61, 1) 100%
  );

  -webkit-box-shadow: inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 0px 96px 28px rgba(0, 0, 0, 0.75);

  & > h1 {
    font-family: 'Minecraft', sans-serif;
    font-size: 24px;
    font-weight: 500;

    text-shadow: 2.5px 2.5px 1px rgb(200, 200, 200, 0.5);
  }

  & > div {
    display: flex;

    margin-top: 10px;
    gap: 10px;
  }
`

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 7px 13px;

  flex-grow: 1;

  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  background: radial-gradient(
    circle,
    rgba(80, 80, 80, 1) 0%,
    rgba(40, 40, 40, 1) 100%
  );

  -webkit-box-shadow:
    inset 0px 0px 50px 10px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 50px 10px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 50px 10px rgba(0, 0, 0, 1),
    0px 0px 12px -5px rgba(255, 255, 255, 1);

  & > h1 {
    font-family: 'Minecraft', sans-serif;
    font-size: 24px;
    font-weight: 500;

    text-shadow: 2.5px 2.5px 1px rgb(200, 200, 200, 0.5);
  }
`

export const ButtonsContainer = styled.div`
  width: 410px;

  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 9px;
`
