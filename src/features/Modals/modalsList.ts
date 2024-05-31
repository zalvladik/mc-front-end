import { Modals } from 'src/features/Modals/constants'
import ModalAdvancements from 'src/features/Modals/ModalAdvancements'
import ModalPay from 'src/features/Modals/ModalPay'

const modalsList = [
  { name: Modals.PAY, component: ModalPay },
  { name: Modals.ADVANCEMENTS, component: ModalAdvancements },
]

export default modalsList
