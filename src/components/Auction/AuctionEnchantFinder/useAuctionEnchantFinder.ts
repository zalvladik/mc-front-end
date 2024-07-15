import { enchantsWithMaxLvl, enchantTranslations } from 'src/constants'
import { useAuction } from 'src/contexts/AuctionProvider/useAuction'
import type { EnchantsEnum } from 'src/types'

export const useAuctionEnchantFinder = () => {
  const { newEnchantSearchParams, updateEnchantSearchParams } = useAuction()

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
    deleteEnchant?: EnchantsEnum,
  ) => {
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

  return {
    newEnchantSearchParams,
    selectedEnchants,
    setSelectedEnchantsToggle,
    enchantTranslations,
    setSelectedMinorEnchantsToggle,
    updateEnchantSearchParams,
    setEnchantLvl,
  }
}
