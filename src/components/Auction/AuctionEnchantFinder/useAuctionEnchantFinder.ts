import { enchantsWithMaxLvl, enchantTranslations } from 'src/constants'
import { useAuction } from 'src/contexts/AuctionProvider/useAuction'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useUser } from 'src/contexts/UserProvider/useUser'
import type { LotT } from 'src/services/api/Lot/types'
import type { EnchantsEnum } from 'src/types'

import { Modals } from 'src/features/Modals/constants'

export const useAuctionEnchantFinder = () => {
  const { onOpen } = useModals()
  const { user, updateUserMoney } = useUser()

  const {
    newEnchantSearchParams,
    updateEnchantSearchParams,
    dataEnchantLots,
    isLoadingEnchantLots,
    setCurrentPage,
    setStorageTotalPagesEnchantLots,
    totalPages,
    mutateEnchantLotsHandle,
    currentPage,
    didShowEnchantControlPanel,
  } = useAuction()

  const { enchants: selectedEnchants } = newEnchantSearchParams

  const setSelectedEnchantsToggle = (enchant: EnchantsEnum) => {
    if (selectedEnchants[enchant]) {
      const newSelectedEnchants = { ...selectedEnchants }

      delete newSelectedEnchants[enchant]

      updateEnchantSearchParams({ enchants: newSelectedEnchants })

      return
    }

    updateEnchantSearchParams({ enchants: { ...selectedEnchants, [enchant]: 1 } })
  }

  const setEnchantLvl = (enchant: EnchantsEnum) => {
    const newSelectedEnchants = { ...selectedEnchants }

    newSelectedEnchants[enchant] =
      newSelectedEnchants[enchant]! >= enchantsWithMaxLvl[enchant]
        ? 1
        : newSelectedEnchants[enchant]! + 1

    updateEnchantSearchParams({ enchants: newSelectedEnchants })
  }

  const setSelectedMinorEnchantsToggle = (
    addEnchant: EnchantsEnum,
    deleteEnchant?: EnchantsEnum | EnchantsEnum[],
  ) => {
    if (Array.isArray(deleteEnchant)) {
      const newSelectedEnchants = { ...selectedEnchants }

      deleteEnchant.forEach(enchant => {
        delete newSelectedEnchants[enchant]
      })

      newSelectedEnchants[addEnchant] = 1

      updateEnchantSearchParams({ enchants: newSelectedEnchants })

      return
    }

    if (addEnchant === deleteEnchant) {
      const newSelectedEnchants = { ...selectedEnchants }

      delete newSelectedEnchants[addEnchant]

      updateEnchantSearchParams({ enchants: newSelectedEnchants })

      return
    }

    if (!deleteEnchant) {
      updateEnchantSearchParams({
        enchants: { ...selectedEnchants, [addEnchant]: 1 },
      })

      return
    }

    const newSelectedEnchants = { ...selectedEnchants }

    delete newSelectedEnchants[deleteEnchant]

    newSelectedEnchants[addEnchant] = 1

    updateEnchantSearchParams({ enchants: newSelectedEnchants })
  }

  const openModal = (lot: LotT) => {
    const afterSubmit = () => {
      if (user.username !== lot.username) {
        updateUserMoney(user.money - lot.price)
      }

      if (totalPages === currentPage && dataEnchantLots.length === 1) {
        setCurrentPage(totalPages - 1)
        setStorageTotalPagesEnchantLots(totalPages - 1)
      }

      mutateEnchantLotsHandle()
    }

    onOpen({
      name: Modals.LOT,
      data: {
        ...lot,
        isDeleteLot: user.username === lot.username,
        userMoney: user.money,
        afterSubmit,
      },
    })
  }

  const itemSlotIconProps = { containerSize: 58, itemSize: 38 }

  return {
    newEnchantSearchParams,
    selectedEnchants,
    setSelectedEnchantsToggle,
    enchantTranslations,
    setSelectedMinorEnchantsToggle,
    updateEnchantSearchParams,
    setEnchantLvl,
    dataEnchantLots,
    isLoadingEnchantLots,
    itemSlotIconProps,
    openModal,
    user,
    didShowEnchantControlPanel,
  }
}
