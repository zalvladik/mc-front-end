import type { ItemHoverDescriptionProps } from 'src/components/ItemHoverDescription/types'

export type ItemHoverDescriptionContextDataT = {
  data: ItemHoverDescriptionProps
  offVisible: () => void
  onVisible: (data: ItemHoverDescriptionProps) => void
}
