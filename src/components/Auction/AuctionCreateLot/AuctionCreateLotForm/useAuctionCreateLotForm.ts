import { useState } from 'react'
import { useCreateItemLot } from 'src/hooks/useCreateItemLot'
import { useCreateShulkerLot } from 'src/hooks/useCreateShulkerLot'

export const useAuctionCreateLotForm = () => {
  const [itemPrice, setItemPrice] = useState('')

  const { isLoading: isLoadingCreateItemLot, mutate: mutateCreateItemLot } =
    useCreateItemLot()
  const { isLoading: isLoadingCreateShulkerLot, mutate: mutateCreateShulkerLot } =
    useCreateShulkerLot()

  const createLotHanlder = (itemId?: number) => {
    const price = Number(itemPrice)

    if (price <= 0) return

    if (!itemId) return

    mutate({ itemId, price })
  }

  return { itemPrice, setItemPrice, createLotHanlder, isLoading }
}
