import { useSearchParams } from 'react-router-dom'
import { CategoryEnum } from 'src/constants'
import { useByeLotItem } from 'src/hooks/useByeLotItem'
import { useByeLotShulker } from 'src/hooks/useByeLotShulker'
import { useDeleteUserLot } from 'src/hooks/useDeleteUserLot'
import { useGetShulkerItems } from 'src/hooks/useGetShulkerItems'

import type { UseModalLotProps } from 'src/features/Modals/ModalLot/types'

export const useModalLot = ({
  isDeleteLot,
  afterSubmit,
  isShulker = false,
  shulker,
}: UseModalLotProps) => {
  const [searchParams] = useSearchParams()

  const { mutate: mutateDelete, isLoading: isLoadingDelete } =
    useDeleteUserLot(afterSubmit)
  const { mutate: mutateByeItem, isLoading: isLoadingByeItem } =
    useByeLotItem(afterSubmit)
  const { mutate: mutateByeShulker, isLoading: isLoadingByeShulker } =
    useByeLotShulker(afterSubmit)

  const { data: dataShulkerItems = [], isLoading: isLoadingShulkerItems } =
    useGetShulkerItems(shulker.id, isShulker)

  const category = searchParams.get('category') || ''
  const display_nameOrTypeSearch = searchParams.get('display_nameOrType') || ''

  const styleForItemBorder = (
    _: number,
    display_name: string,
    type: string,
    categories: string[],
  ) => {
    const isSuitableCategory = category ? categories.includes(category) : false
    const isSuitableDisplayName = display_nameOrTypeSearch
      ? display_name.toLowerCase().includes(display_nameOrTypeSearch.toLowerCase())
      : false
    const isSuitableType = display_nameOrTypeSearch
      ? type.toLowerCase().includes(display_nameOrTypeSearch.toLowerCase())
      : false

    const isSuitableItemName = isSuitableDisplayName || isSuitableType

    if (category === CategoryEnum.SHULKERS && isSuitableDisplayName) {
      return { backgroundImage: 'url(/assets/items_for_ui/slot_green.png)' }
    }

    if (!category && (isSuitableDisplayName || isSuitableType)) {
      return { backgroundImage: 'url(/assets/items_for_ui/slot_green.png)' }
    }

    if (!isSuitableCategory) {
      return { backgroundImage: 'url(/assets/items_for_ui/slot.png)' }
    }

    if (display_nameOrTypeSearch && !isSuitableItemName && isSuitableCategory) {
      return { backgroundImage: 'url(/assets/items_for_ui/slot.png)' }
    }

    return { backgroundImage: 'url(/assets/items_for_ui/slot_green.png)' }
  }

  const toogleLot = (id: number): void => {
    if (isDeleteLot) {
      mutateDelete(id)

      return
    }

    if (isShulker) {
      mutateByeShulker({ lotId: id })

      return
    }

    mutateByeItem({ lotId: id })
  }

  return {
    toogleLot,
    isLoading: isLoadingByeItem || isLoadingDelete || isLoadingByeShulker,
    dataShulkerItems,
    isLoadingShulkerItems,
    styleForItemBorder,
  }
}
