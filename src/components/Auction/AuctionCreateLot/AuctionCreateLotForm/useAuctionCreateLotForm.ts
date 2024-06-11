import { useState } from 'react'
import { useCreateLot } from 'src/hooks/useCreateLot'

export const useAuctionCreateLotForm = () => {
  const [itemPrice, setItemPrice] = useState('')

  const { isLoading, mutate } = useCreateLot()

  const createLotHanlder = (itemId?: number) => {
    const price = Number(itemPrice)

    if (price <= 0) return

    if (!itemId) return

    mutate({ itemId, price })
  }

  return { itemPrice, setItemPrice, createLotHanlder, isLoading }
}
