import { Modals } from 'src/features/Modals/constants'

import ModalPay from 'src/features/Modals/ModalPay'
import ModalAdvancements from 'src/features/Modals/ModalAdvancements'

const modalsList = [
  { name: Modals.PAY, component: ModalPay },
  { name: Modals.ADVANCEMENTS, component: ModalAdvancements },
]

export default modalsList
