import { useUser } from 'src/contexts/UserProvider/useUser'

const useInventoryPage = () => {
  const { user } = useUser()

  return { money: user.money }
}

export default useInventoryPage
