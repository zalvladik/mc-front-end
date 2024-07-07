import { io, type Socket } from 'socket.io-client'
import { CacheKeys, FETCH_URL, SocketTypes } from 'src/constants'
import type { CreateConnectionProps } from 'src/services/api/Socket/types'

import type { ItemT } from '../Items/types'
import type { ItemTicketT } from '../ItemTicket/types'
import type { ShulkerItemT, ShulkerT } from '../Shulker/types'

export class SocketApi {
  static socket: null | Socket = null

  static createConnection({
    username,
    incrementUserMoney,
    decrementUserMoney,
    queryClient,
  }: CreateConnectionProps): void {
    this.socket = io(FETCH_URL, {
      query: { username },
    })

    this.socket.on('connect', () => {})

    this.socket.on('message', ({ type, data }) => {
      switch (type) {
        case SocketTypes.INCREMENT_MONEY:
          incrementUserMoney(data)
          break
        case SocketTypes.DECREMENT_MONEY:
          decrementUserMoney(data)
          break
        case SocketTypes.ADD_ITEMS:
          queryClient.setQueryData<ItemT[]>(CacheKeys.USER_ITEMS, items => {
            return [...(items ?? []), ...data]
          })
          break
        case SocketTypes.REMOVE_ITEMS:
          queryClient.setQueryData<ItemTicketT[]>(
            CacheKeys.USER_ITEM_TICKETS,
            tickets => tickets?.filter(ticket => ticket.id !== data) ?? [],
          )
          break
        case SocketTypes.ADD_SHULKER:
          queryClient.setQueryData<ShulkerT[]>(CacheKeys.USER_SHULKERS, shulkers => {
            return [...(shulkers ?? []), data.shulker]
          })
          queryClient.setQueryData<ShulkerItemT[]>(
            [CacheKeys.USER_SHULKER_ITEMS, data.shulker.id],
            shulkerItems => {
              return [...(shulkerItems ?? []), ...data.shulkerItems]
            },
          )
          break
        case SocketTypes.REMOVE_SHULKER:
          queryClient.setQueryData<ShulkerT[]>(CacheKeys.USER_SHULKERS, shulkers => {
            return [...(shulkers?.filter(shulker => shulker.id !== data) ?? [])]
          })
          break
        default:
          break
      }
    })

    this.socket.on('disconnect', () => {})
  }
}
