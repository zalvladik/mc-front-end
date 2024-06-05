import { Modals } from 'src/features/Modals/constants'
import ModalAdvancements from 'src/features/Modals/ModalAdvancements'
import ModalItemsInTicket from 'src/features/Modals/ModalItemsInTicket'
import ModalPay from 'src/features/Modals/ModalPay'

const modalsList = [
  { name: Modals.PAY, component: ModalPay },
  { name: Modals.ADVANCEMENTS, component: ModalAdvancements },
  { name: Modals.ITEM_TICKETS, component: ModalItemsInTicket },
]

export default modalsList
