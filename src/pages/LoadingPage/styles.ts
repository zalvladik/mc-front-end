import styled from 'styled-components'

export const Container = styled.svg`
  width: 16em;
  height: 8em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .ip__track {
    stroke: hsl(var(--hue), 90%, 90%);
    transition: stroke var(--trans-dur);
  }
  .ip__worm1,
  .ip__worm2 {
    animation: worm1 2s linear infinite;
  }
  .ip__worm2 {
    animation-name: worm2;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg: hsl(var(--hue), 90%, 5%);
      --fg: hsl(var(--hue), 90%, 95%);
    }
    .ip__track {
      stroke: hsl(var(--hue), 90%, 15%);
    }
  }

  @keyframes worm1 {
    from {
      stroke-dashoffset: 0;
    }
    50% {
      animation-timing-function: steps(1);
      stroke-dashoffset: -358;
    }
    50.01% {
      animation-timing-function: linear;
      stroke-dashoffset: 358;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes worm2 {
    from {
      stroke-dashoffset: 358;
    }
    50% {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: -358;
    }
  }
`
