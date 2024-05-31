import { COMPONENT_IDS } from 'src/constants'
import { useCustomSpring } from 'src/hooks/useCustomSpring'

export const useStore = () => {
  const springProps = useCustomSpring(COMPONENT_IDS.STORE)

  return { springProps }
}
