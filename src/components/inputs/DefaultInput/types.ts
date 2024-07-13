import type { InputHTMLAttributes } from 'react'
import type { CSSProperties } from 'styled-components'

export type DefaultInputProps = {
  containerStyle?: CSSProperties
  isVisible?: boolean
  rightIcon?: boolean
  rightIconUrl?: string
  rightIconSize?: number
} & InputHTMLAttributes<HTMLInputElement>
