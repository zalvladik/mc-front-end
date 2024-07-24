import { Modals } from 'src/features/Modals/constants'
import ModalAdvancements from 'src/features/Modals/ModalAdvancements'
import ModalItemsInShulker from 'src/features/Modals/ModalItemsInShulker'
import ModalItemsInTicket from 'src/features/Modals/ModalItemsInTicket'
import ModalLot from 'src/features/Modals/ModalLot'
import ModalVip from 'src/features/Modals/ModalVip'

const modalsList = [
  { name: Modals.ADVANCEMENTS, component: ModalAdvancements },
  { name: Modals.LOT, component: ModalLot },
  { name: Modals.ITEM_TICKETS, component: ModalItemsInTicket },
  { name: Modals.SHULKER_ITEMS, component: ModalItemsInShulker },
  { name: Modals.VIP, component: ModalVip },
]

export default modalsList
