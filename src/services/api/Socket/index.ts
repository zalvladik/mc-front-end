import { io, type Socket } from 'socket.io-client'

export class SocketApi {
  static socket: null | Socket = null

  static createConnection(updateMoney: (value: number) => void): void {
    this.socket = io('http://localhost:8080', {
      query: { username: 'France' },
    })

    this.socket.on('connect', () => {})

    this.socket.on('message', message => {
      if (message.type === 'incrementMoney') {
        updateMoney(message.data)
      }
    })

    this.socket.on('disconnect', () => {})
  }
}
