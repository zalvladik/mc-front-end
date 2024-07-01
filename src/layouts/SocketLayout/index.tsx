import type { HTMLProps } from 'react'
import { useEffect } from 'react'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { SocketApi } from 'src/services/api/Socket'

const SocketLayout = ({ children }: HTMLProps<HTMLDivElement>): JSX.Element => {
  const { incrementUserMoney } = useUser()

  useEffect(() => {
    SocketApi.createConnection(incrementUserMoney)
  }, [])

  return <>{children}</>
}

export default SocketLayout
