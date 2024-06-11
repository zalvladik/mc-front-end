import { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { copyText } from 'src/helpers'
import type { ItemTicketT } from 'src/services/api/ItemTicket/types'

export const useItemTicket = (newTicketId?: number) => {
  const [oldTicketId, setOldTicketId] = useState<number>()
  const [isVisible, setIsVisible] = useState(false)

  const handleContainerClick = (): void => {
    copyText(`/trade предмети(забрати) ${newTicketId}`)
    setIsVisible(false)
  }
  const queryClient = useQueryClient()

  const cachedData: ItemTicketT[] =
    queryClient.getQueryData(CacheKeys.USER_INVENTORY_ITEM_TICKETS) ?? []

  useEffect(() => {
    if (isVisible === true) {
      const isExistTicketId = cachedData.find(item => item.id === newTicketId)

      if (!isExistTicketId) setIsVisible(false)
    }
  }, [cachedData, newTicketId])

  if (oldTicketId !== newTicketId) {
    setIsVisible(true)
    setOldTicketId(newTicketId)
  }

  return { isVisible, handleContainerClick }
}
