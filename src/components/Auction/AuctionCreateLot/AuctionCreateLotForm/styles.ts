import styled from 'styled-components'

export const AuctionCreateLotFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  height: max-content;

  margin: auto 0px;

  padding: 20px;
  background-color: gray;

  background: radial-gradient(
    circle,
    rgba(100, 110, 120, 1) 0%,
    rgba(30, 35, 40, 1) 100%
  );

  border-radius: 10px;
  border: 1px solid gray;

  -webkit-box-shadow:
    inset 0px 0px 40px 10px rgba(0, 0, 0, 0.6),
    0px 0px 10px -5px rgba(255, 255, 255, 1);
  -moz-box-shadow:
    inset 0px 0px 40px 10px rgba(0, 0, 0, 0.6),
    0px 0px 10px -5px rgba(255, 255, 255, 1);
  box-shadow:
    inset 0px 0px 40px 10px rgba(0, 0, 0, 0.6),
    0px 0px 10px -5px rgba(255, 255, 255, 1);
`
