import { ComponentIds } from 'src/constants'
import { useCustomSpring } from 'src/hooks/useCustomSpring'

export const useStore = () => {
  const springProps = useCustomSpring(ComponentIds.STORE)

  return { springProps }
}
