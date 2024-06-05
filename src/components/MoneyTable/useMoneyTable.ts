import { useGetMoneyFromUserInventory } from 'src/hooks/useGetMoneyFromUserInventory'

export const useMoneyTable = () => {
  const { data, refetch, isRefetching, isLoading } = useGetMoneyFromUserInventory()

  return { money: data?.money ?? 0, refetch, isRefetching, isLoading }
}
