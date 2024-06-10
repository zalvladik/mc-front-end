import styled from 'styled-components'

export const PaginationContainer = styled.div`
  position: absolute;
  bottom: 0px;
  right: 45px;

  transition: opacity 0.2s ease;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 250px;
  height: 60px;

  translate: 0% 59px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

  border: 1px solid rgb(78, 81, 85);
  border-top: none;

  background: rgb(10, 22, 29);
  background: linear-gradient(
    180deg,
    rgba(10, 22, 29, 1) 0%,
    rgba(16, 36, 47, 1) 100%
  );

  padding: 8px 10px;

  & > div {
    font-size: 22px;
    font-family: 'Minecraft', sans-serif;
    font-weight: 500;
  }

  & > button {
    width: 44px;
    height: 44px;

    border: none;

    background-color: inherit;
    background-repeat: no-repeat;
    background-size: contain;

    transition:
      transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1),
      opacity 150ms ease;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      opacity: 0.6;
    }
  }
`

export const ButtonLeft = styled.button`
  background-image: url('/assets/items_for_ui/page_backward.png');
`

export const ButtonRight = styled.button`
  background-image: url('/assets/items_for_ui/page_forward_highlighted.png');
`
