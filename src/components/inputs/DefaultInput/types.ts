import type { InputHTMLAttributes } from 'react'
import type { CSSProperties } from 'styled-components'

export type DefaultInputProps = {
  containerStyle?: CSSProperties
  isVisible?: boolean
  searchIcon?: boolean
  rightIconSize?: number
} & InputHTMLAttributes<HTMLInputElement>
