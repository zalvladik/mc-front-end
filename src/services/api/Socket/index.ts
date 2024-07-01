import { io, type Socket } from 'socket.io-client'
import { FETCH_URL, SocketTypes } from 'src/constants'
import type { CreateConnectionProps } from 'src/services/api/Socket/types'

export class SocketApi {
  static socket: null | Socket = null

  static createConnection({
    username,
    incrementUserMoney,
    decrementUserMoney,
  }: CreateConnectionProps): void {
    this.socket = io(FETCH_URL, {
      query: { username },
    })

    this.socket.on('connect', () => {})

    this.socket.on('message', ({ type, data }) => {
      if (type === SocketTypes.INCREMENT_MONEY) incrementUserMoney(data)

      if (type === SocketTypes.DECREMENT_MONEY) decrementUserMoney(data)
    })

    this.socket.on('disconnect', () => {})
  }
}
