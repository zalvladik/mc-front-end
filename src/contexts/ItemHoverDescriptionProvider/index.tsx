import { useMemo, useState } from 'react'
import { ItemHoverDescriptionContext } from 'src/contexts'
import { initialItemHoverDescriptionData } from 'src/contexts/ItemHoverDescriptionProvider/constants'
import type { ItemHoverDescriptionContextDataT } from 'src/contexts/ItemHoverDescriptionProvider/types'
import type { ReactChildrenT } from 'src/types'

import ItemHoverDescription from 'src/components/ItemHoverDescription'
import type { ItemHoverDescriptionProps } from 'src/components/ItemHoverDescription/types'

const ProvideItemHoverDescription = ({ children }: ReactChildrenT): JSX.Element => {
  const [itemHoverDescriptionData, setItemHoverDescriptionData] =
    useState<ItemHoverDescriptionProps>(initialItemHoverDescriptionData)

  const offVisible = (): void => {
    setItemHoverDescriptionData({
      ...initialItemHoverDescriptionData,
    })
  }

  const onVisible = (ItemHoverDescription: ItemHoverDescriptionProps): void => {
    setItemHoverDescriptionData(ItemHoverDescription)
  }

  const providerValue: ItemHoverDescriptionContextDataT = useMemo(
    () => ({ offVisible, onVisible, data: itemHoverDescriptionData }),
    [itemHoverDescriptionData],
  )

  return (
    <ItemHoverDescriptionContext.Provider value={providerValue}>
      {children} <ItemHoverDescription {...itemHoverDescriptionData} />
    </ItemHoverDescriptionContext.Provider>
  )
}

export default ProvideItemHoverDescription
