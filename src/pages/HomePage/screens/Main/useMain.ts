import { useSpring } from '@react-spring/web'

import { useModals } from 'src/contexts/ModalProvider/useModals'

export const useMain = () => {
  const { onOpen } = useModals()

  const [props] = useSpring(
    () => ({
      from: {
        transform: 'translateY(4rem)',
        opacity: 0,
      },
      to: {
        transform: 'translateY(0)',
        opacity: 1,
      },
    }),
    [],
  )

  return {
    props,
    onOpen,
  }
}
