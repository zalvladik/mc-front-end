import {
  EnchantsEnum,
  EnchantsTypesEnum,
  enchantVariables,
} from 'src/components/Auction/AuctionEnchantFinder/constants'

export const useEnchantVariables = () => {
  const isArmorType = (enchantType: EnchantsTypesEnum) => {
    return (
      enchantType === EnchantsTypesEnum.HELMET ||
      enchantType === EnchantsTypesEnum.CHESTPLATE ||
      enchantType === EnchantsTypesEnum.LEGGINGS ||
      enchantType === EnchantsTypesEnum.BOOTS
    )
  }

  const isToolType = (enchantType: EnchantsTypesEnum) => {
    return (
      enchantType === EnchantsTypesEnum.AXE ||
      enchantType === EnchantsTypesEnum.PICKAXE ||
      enchantType === EnchantsTypesEnum.SHOVEL ||
      enchantType === EnchantsTypesEnum.HOE
    )
  }

  const giveOtherEnchantsTypes = (enchantType: EnchantsTypesEnum) => {
    if (isArmorType(enchantType)) {
      return [...enchantVariables.all, ...enchantVariables.armor]
    }

    if (isToolType(enchantType)) {
      return [...enchantVariables.all, ...enchantVariables.tools]
    }

    if (enchantType === EnchantsTypesEnum.BOW) {
      return [EnchantsEnum.UNBREAKING]
    }

    return [...enchantVariables.all]
  }

  const giveNegativeEnchantsTypes = (enchantType: EnchantsTypesEnum) => {
    const vanishingCurse = EnchantsEnum.VANISHING_CURSE
    const bindingCurse = EnchantsEnum.BINDING_CURSE

    if (isArmorType(enchantType)) {
      return [bindingCurse, vanishingCurse]
    }

    return [vanishingCurse]
  }

  return { enchantVariables, giveOtherEnchantsTypes, giveNegativeEnchantsTypes }
}
