import type { ReactNode } from 'react'

export type ValueOf<T extends string> = `${T}`

export type UnionToIntersection<U> = (
  U extends object ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never

export type ReactChildrenT = {
  children: ReactNode
}
