import { Modals } from 'src/features/Modals/constants'
import ModalAdvancements from 'src/features/Modals/ModalAdvancements'
import ModalByeLot from 'src/features/Modals/ModalByeLot'
import ModalItemsInTicket from 'src/features/Modals/ModalItemsInTicket'
import ModalPay from 'src/features/Modals/ModalPay'

const modalsList = [
  { name: Modals.ADVANCEMENTS, component: ModalAdvancements },
  { name: Modals.BYE_LOT, component: ModalByeLot },
  { name: Modals.ITEM_TICKETS, component: ModalItemsInTicket },
  { name: Modals.PAY, component: ModalPay },
]

export default modalsList
