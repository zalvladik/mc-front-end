import type { CSSProperties, InputHTMLAttributes } from 'react'

export type SearchInputProps = {
  styles?: CSSProperties
  placeholder: string
} & InputHTMLAttributes<HTMLInputElement>
