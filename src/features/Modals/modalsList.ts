import { Modals } from 'src/features/Modals/constants'
import ModalAdvancements from 'src/features/Modals/ModalAdvancements'
import ModalItemsInShulker from 'src/features/Modals/ModalItemsInShulker'
import ModalItemsInTicket from 'src/features/Modals/ModalItemsInTicket'
import ModalLot from 'src/features/Modals/ModalLot'
import ModalPay from 'src/features/Modals/ModalPay'

const modalsList = [
  { name: Modals.ADVANCEMENTS, component: ModalAdvancements },
  { name: Modals.LOT, component: ModalLot },
  { name: Modals.ITEM_TICKETS, component: ModalItemsInTicket },
  { name: Modals.PAY, component: ModalPay },
  { name: Modals.SHULKER_ITEMS, component: ModalItemsInShulker },
]

export default modalsList
