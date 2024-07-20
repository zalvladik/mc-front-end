import { Outlet } from 'react-router-dom'
import UserProvider from 'src/contexts/UserProvider'

const AuthLayout = (): JSX.Element | null => {
  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  )
}

export default AuthLayout
