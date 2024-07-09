import type { HTMLProps } from 'react'
import type { CSSProperties } from 'styled-components'

export type DefaultButtonProps = {
  isVisible?: boolean
  isLoading?: boolean
  textStyle?: CSSProperties
} & HTMLProps<HTMLDivElement>
