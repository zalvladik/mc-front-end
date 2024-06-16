import Copy from 'src/assets/cards/copy'
import Money from 'src/assets/cards/money'
import Play from 'src/assets/cards/play'
import Season from 'src/assets/cards/season'
import { useModals } from 'src/contexts/ModalProvider/useModals'

export const usePayForm = () => {
  const aboutIcons = [Money(), Season(), Play()]
  const priceIcons = [Play(), Copy()]

  const { onOpen } = useModals()

  return { onOpen, aboutIcons, priceIcons }
}
