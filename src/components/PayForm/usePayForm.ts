import Play from 'src/assets/cards/play'
import Copy from 'src/assets/cards/copy'
import Season from 'src/assets/cards/season'
import Controller from 'src/assets/cards/play'
import Money from 'src/assets/cards/money'

import { useModals } from 'src/contexts/ModalProvider/useModals'

export const usePayForm = () => {
  const aboutIcons = [Money(), Season(), Controller()]
  const priceIcons = [Play(), Copy()]

  const { onOpen } = useModals()

  return { onOpen, aboutIcons, priceIcons }
}
