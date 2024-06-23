import { useContext } from 'react'
import { ItemHoverDescriptionContext } from 'src/contexts'

import type { ItemHoverDescriptionContextDataT } from './types'

export const useItemHoverDescription = (): ItemHoverDescriptionContextDataT => {
  const data = useContext(ItemHoverDescriptionContext)

  if (!data) {
    throw new Error('useItemHoverDescription was used outside of its Provider')
  }

  return data
}
