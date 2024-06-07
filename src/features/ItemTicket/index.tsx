import { useEffect } from 'react'
import { useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { copyText } from 'src/helpers'
import type { ItemTicketT } from 'src/services/api/ItemTicket/types'

import { Container, ItemTicketIdWrapper } from 'src/features/ItemTicket/styles'
import type { ItemTicketProps } from 'src/features/ItemTicket/types'
import { useItemTicket } from 'src/features/ItemTicket/useItemTicket'

const ItemTicket = ({ ticketId }: ItemTicketProps): JSX.Element | null => {
  const { setIsVisible, isVisible } = useItemTicket(ticketId)

  const handleContainerClick = (): void => {
    copyText(`/trade предмети(забрати) ${ticketId}`)
    setIsVisible(false)
  }
  const queryClient = useQueryClient()

  const cachedData: ItemTicketT[] =
    queryClient.getQueryData(CacheKeys.USER_INVENTORY_ITEM_TICKETS) ?? []

  useEffect(() => {
    if (isVisible === true) {
      const isExistTicketId = cachedData.find(item => item.id === ticketId)

      if (!isExistTicketId) setIsVisible(false)
    }
  }, [cachedData, ticketId])

  return (
    <Container
      style={{
        opacity: isVisible && ticketId ? 1 : 0,
        pointerEvents: isVisible ? 'all' : 'none',
      }}
      onClick={() => handleContainerClick()}
    >
      <ItemTicketIdWrapper>
        <div>{ticketId}</div>
      </ItemTicketIdWrapper>
    </Container>
  )
}

export default ItemTicket
