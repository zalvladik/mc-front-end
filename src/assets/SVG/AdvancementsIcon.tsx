import type { AchIconDoneSquareProps } from 'src/assets/SVG/types'

import { ADVANCEMENTS_ICONS } from 'src/constants'

const AchIconDoneSquare = ({
  isDone = false,
  figure = ADVANCEMENTS_ICONS.SQUARE,
}: AchIconDoneSquareProps): JSX.Element => {
  const bg = isDone ? '#AA7E0F' : '#4F4F4F'
  const lineUp = isDone ? '#DBA213' : '#666666'
  const lineDown = isDone ? '#493606' : '#222222'

  if (figure === ADVANCEMENTS_ICONS.SQUARE) {
    return (
      <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
        <g clip-path="url(#clip0_2_4)">
          <path d="M2 0.5H24" stroke="black" />
          <path d="M1 1.5H2" stroke="black" />
          <path d="M2 25.5H24" stroke="black" />
          <path d="M25.5 24V2" stroke="black" />
          <path d="M0.5 24L0.5 2" stroke="black" />
          <path d="M24 1.5H25" stroke="black" />
          <path d="M24 24.5H25" stroke="black" />
          <path d="M1 24.5H2" stroke="black" />
          <path d="M2 1.5H24" stroke={lineUp} />
          <path d="M1.5 24L1.5 2" stroke={lineUp} />
          <path d="M24.5 2V24" stroke={lineDown} />
          <path d="M2 24.5H24" stroke={lineDown} />
          <rect x="2" y="2" width="22" height="22" fill={bg} />
        </g>
        <defs>
          <clipPath id="clip0_2_4">
            <rect width="26" height="26" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  if (figure === ADVANCEMENTS_ICONS.STAR) {
    return (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <g clip-path="url(#clip0_5_2)">
          <line x1="1" y1="0.5" x2="4" y2="0.5" stroke="black" />
          <line x1="22" y1="0.5" x2="25" y2="0.5" stroke="black" />
          <line x1="22" y1="25.5" x2="25" y2="25.5" stroke="black" />
          <line x1="1" y1="25.5" x2="4" y2="25.5" stroke="black" />
          <line x1="0.5" y1="25" x2="0.5" y2="22" stroke="black" />
          <line x1="25.5" y1="25" x2="25.5" y2="22" stroke="black" />
          <line x1="25.5" y1="4" x2="25.5" y2="1" stroke="black" />
          <line x1="0.5" y1="4" x2="0.5" y2="1" stroke="black" />
          <line x1="4" y1="1.5" x2="6" y2="1.5" stroke="black" />
          <line x1="20" y1="1.5" x2="22" y2="1.5" stroke="black" />
          <line x1="4" y1="24.5" x2="6" y2="24.5" stroke="black" />
          <line x1="20" y1="24.5" x2="22" y2="24.5" stroke="black" />
          <line x1="1.5" y1="22" x2="1.5" y2="20" stroke="black" />
          <line x1="1.5" y1="6" x2="1.5" y2="4" stroke="black" />
          <line x1="24.5" y1="6" x2="24.5" y2="4" stroke="black" />
          <line x1="24.5" y1="22" x2="24.5" y2="20" stroke="black" />
          <line x1="23.5" y1="10" x2="23.5" y2="6" stroke="black" />
          <line x1="23.5" y1="20" x2="23.5" y2="16" stroke="black" />
          <line x1="2.5" y1="10" x2="2.5" y2="6" stroke="black" />
          <line x1="2.5" y1="20" x2="2.5" y2="16" stroke="black" />
          <line x1="6" y1="23.5" x2="10" y2="23.5" stroke="black" />
          <line x1="16" y1="23.5" x2="20" y2="23.5" stroke="black" />
          <line x1="6" y1="2.5" x2="10" y2="2.5" stroke="black" />
          <line x1="16" y1="2.5" x2="20" y2="2.5" stroke="black" />
          <line x1="10" y1="1.5" x2="16" y2="1.5" stroke="black" />
          <line x1="10" y1="24.5" x2="16" y2="24.5" stroke="black" />
          <line x1="1.5" y1="16" x2="1.5" y2="10" stroke="black" />
          <line x1="24.5" y1="16" x2="24.5" y2="10" stroke="black" />
          <line x1="3.5" y1="6" x2="3.5" y2="10" stroke={lineUp} />
          <line x1="22.5" y1="6" x2="22.5" y2="10" stroke={lineDown} />
          <line x1="22.5" y1="16" x2="22.5" y2="20" stroke={lineDown} />
          <line x1="3.5" y1="16" x2="3.5" y2="20" stroke={lineUp} />
          <line x1="6" y1="22.5" x2="10" y2="22.5" stroke={lineDown} />
          <line x1="16" y1="22.5" x2="20" y2="22.5" stroke={lineDown} />
          <line x1="6" y1="3.5" x2="10" y2="3.5" stroke={lineUp} />
          <line x1="16" y1="3.5" x2="20" y2="3.5" stroke={lineUp} />
          <line x1="10" y1="2.5" x2="16" y2="2.5" stroke={lineUp} />
          <line x1="10" y1="23.5" x2="16" y2="23.5" stroke={lineDown} />
          <line x1="23.5" y1="16" x2="23.5" y2="10" stroke={lineDown} />
          <line x1="2.5" y1="16" x2="2.5" y2="10" stroke={lineUp} />
          <line x1="2.5" y1="20" x2="2.5" y2="22" stroke={lineUp} />
          <line x1="23.5" y1="20" x2="23.5" y2="22" stroke={lineDown} />
          <line x1="23.5" y1="4" x2="23.5" y2="6" stroke={lineDown} />
          <line x1="2.5" y1="4" x2="2.5" y2="6" stroke={lineUp} />
          <line x1="4" y1="2.5" x2="6" y2="2.5" stroke={lineUp} />
          <line x1="20" y1="2.5" x2="22" y2="2.5" stroke={lineUp} />
          <line x1="20" y1="23.5" x2="22" y2="23.5" stroke={lineDown} />
          <line x1="4" y1="23.5" x2="6" y2="23.5" stroke={lineDown} />
          <rect x="22" y="22" width="3" height="3" fill={lineDown} />
          <rect x="1" y="22" width="3" height="3" fill={lineUp} />
          <rect x="22" y="1" width="3" height="3" fill={lineUp} />
          <rect x="1" y="1" width="3" height="3" fill={lineUp} />
          <rect x="4" y="4" width="18" height="18" fill={bg} />
          <rect x="3" y="3" width="3" height="3" fill={bg} />
          <rect x="20" y="3" width="3" height="3" fill={bg} />
          <rect x="20" y="20" width="3" height="3" fill={bg} />
          <rect x="3" y="20" width="3" height="3" fill={bg} />
          <rect x="2" y="22" width="2" height="2" fill={bg} />
          <rect x="22" y="22" width="2" height="2" fill={bg} />
          <rect x="22" y="2" width="2" height="2" fill={bg} />
          <rect x="21" y="10" width="2" height="6" fill={bg} />
          <rect x="3" y="10" width="2" height="6" fill={bg} />
          <rect x="10" y="3" width="6" height="2" fill={bg} />
          <rect x="10" y="21" width="6" height="2" fill={bg} />
          <rect x="2" y="2" width="2" height="2" fill={bg} />
          <line x1="24.5" y1="2" x2="24.5" y2="4" stroke={lineDown} />
          <line x1="2" y1="24.5" x2="4" y2="24.5" stroke={lineDown} />
        </g>
        <defs>
          <clipPath id="clip0_5_2">
            <rect width="26" height="26" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  return (
    <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
      <g clip-path="url(#clip0_6_90)">
        <line x1="7" y1="0.5" x2="15" y2="0.5" stroke="black" />
        <line x1="7" y1="25.5" x2="15" y2="25.5" stroke="black" />
        <line x1="4" y1="1.5" x2="7" y2="1.5" stroke="black" />
        <line x1="15" y1="1.5" x2="18" y2="1.5" stroke="black" />
        <line x1="18" y1="2.5" x2="20" y2="2.5" stroke="black" />
        <line x1="2" y1="2.5" x2="4" y2="2.5" stroke="black" />
        <line x1="1" y1="3.5" x2="2" y2="3.5" stroke="black" />
        <line x1="20" y1="3.5" x2="21" y2="3.5" stroke="black" />
        <line x1="20" y1="22.5" x2="21" y2="22.5" stroke="black" />
        <line x1="1" y1="22.5" x2="2" y2="22.5" stroke="black" />
        <line x1="2" y1="23.5" x2="4" y2="23.5" stroke="black" />
        <line x1="4" y1="24.5" x2="7" y2="24.5" stroke="black" />
        <line x1="15" y1="24.5" x2="18" y2="24.5" stroke="black" />
        <line x1="18" y1="23.5" x2="20" y2="23.5" stroke="black" />
        <line x1="0.5" y1="22" x2="0.5" y2="4" stroke="black" />
        <line x1="21.5" y1="22" x2="21.5" y2="4" stroke="black" />
        <rect x="2" y="4" width="18" height="18" fill={bg} />
        <rect x="4" y="21" width="14" height="2" fill={bg} />
        <rect x="7" y="22" width="8" height="2" fill={bg} />
        <rect x="7" y="2" width="8" height="2" fill={bg} />
        <rect x="4" y="3" width="14" height="2" fill={bg} />
        <line x1="7" y1="1.5" x2="15" y2="1.5" stroke={lineUp} />
        <line x1="4" y1="2.5" x2="7" y2="2.5" stroke={lineUp} />
        <line x1="2" y1="3.5" x2="4" y2="3.5" stroke={lineUp} />
        <line x1="18" y1="3.5" x2="20" y2="3.5" stroke={lineUp} />
        <line x1="15" y1="2.5" x2="18" y2="2.5" stroke={lineUp} />
        <line x1="1.5" y1="22" x2="1.5" y2="4" stroke={lineUp} />
        <line x1="20.5" y1="22" x2="20.5" y2="4" stroke={lineDown} />
        <line x1="7" y1="24.5" x2="15" y2="24.5" stroke={lineDown} />
        <line x1="15" y1="23.5" x2="18" y2="23.5" stroke={lineDown} />
        <line x1="18" y1="22.5" x2="20" y2="22.5" stroke={lineDown} />
        <line x1="2" y1="22.5" x2="4" y2="22.5" stroke={lineDown} />
        <line x1="4" y1="23.5" x2="7" y2="23.5" stroke={lineDown} />
      </g>
      <defs>
        <clipPath id="clip0_6_90">
          <rect width="22" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default AchIconDoneSquare
