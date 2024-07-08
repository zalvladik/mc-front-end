import { useEffect, useState } from 'react'
import { CategoryEnum } from 'src/constants'
import { useAuction } from 'src/contexts/AuctionProvider/useAuction'
import { useCreateItemLot } from 'src/hooks/useCreateItemLot'
import { useCreateShulkerLot } from 'src/hooks/useCreateShulkerLot'

export const useAuctionCreateLotForm = () => {
  const [itemPrice, setItemPrice] = useState('')

  const { refetch } = useAuction()

  const {
    isLoading: isLoadingCreateItemLot,
    mutate: mutateCreateItemLot,
    isSuccess: isSuccessCreateItemLot,
  } = useCreateItemLot()
  const {
    isLoading: isLoadingCreateShulkerLot,
    mutate: mutateCreateShulkerLot,
    isSuccess: isSuccessCreateShulkerLot,
  } = useCreateShulkerLot()

  useEffect(() => {
    if (isSuccessCreateItemLot || isSuccessCreateShulkerLot) {
      refetch()
    }
  }, [isSuccessCreateItemLot, isSuccessCreateShulkerLot])

  const createLotHanlder = (itemCategories?: string[], id?: number) => {
    const price = Number(itemPrice)

    if (price <= 0) return

    if (!id) return

    if (itemCategories?.includes(CategoryEnum.SHULKERS)) {
      mutateCreateShulkerLot({ shulkerId: id, price })

      return
    }

    mutateCreateItemLot({ itemId: id, price })
  }

  return {
    itemPrice,
    setItemPrice,
    createLotHanlder,
    isLoading: isLoadingCreateItemLot || isLoadingCreateShulkerLot,
  }
}
