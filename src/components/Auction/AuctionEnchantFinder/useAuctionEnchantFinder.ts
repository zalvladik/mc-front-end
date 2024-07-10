import { useState } from 'react'
import { FETCH_URL_IMG } from 'src/constants'
import { useAuction } from 'src/contexts/AuctionProvider/useAuction'

import type {
  ArmorMaterialT,
  EnchantsEnum,
  WeaponAndToolsMaterialT,
} from 'src/components/Auction/AuctionEnchantFinder/constants'
import {
  armorMaterials,
  EnchantsTypesEnum,
  enchantTranslations,
  ItemMaterialEnum,
  ItemTypesEnchantsFinderEnum,
  weaponAndToolsMaterial,
} from 'src/components/Auction/AuctionEnchantFinder/constants'
import type {
  EnchantItemsTypesT,
  EnchantTranslationsT,
  UpdateEnchantSearchParamsT,
} from 'src/components/Auction/AuctionEnchantFinder/types'

export const useAuctionEnchantFinder = () => {
  const { enchantSearchParams, setEnchantSearchParams } = useAuction()

  const { enchants: selectedEnchants } = enchantSearchParams

  const updateEnchantSearchParams = ({
    itemType,
    enchantType,
    enchants,
  }: UpdateEnchantSearchParamsT) => {
    const updatedParams = { ...enchantSearchParams }

    if (itemType) updatedParams.itemType = itemType

    if (enchantType) updatedParams.enchantType = enchantType

    if (enchants) updatedParams.enchants = enchants

    setEnchantSearchParams(updatedParams)
  }

  const [helmetMaterial, setHelmetMaterial] = useState<ArmorMaterialT>(
    ItemMaterialEnum.NETHERITE,
  )
  const [chestplateMaterial, setChestplateMaterial] = useState<ArmorMaterialT>(
    ItemMaterialEnum.NETHERITE,
  )
  const [leggingsMaterial, setLeggingsMaterial] = useState<ArmorMaterialT>(
    ItemMaterialEnum.NETHERITE,
  )
  const [bootsMaterial, setBootsMaterial] = useState<ArmorMaterialT>(
    ItemMaterialEnum.NETHERITE,
  )

  const [swordMaterial, setSwordMaterial] = useState<WeaponAndToolsMaterialT>(
    ItemMaterialEnum.NETHERITE,
  )

  const [pickaxeMaterial, setPickaxeMaterial] = useState<WeaponAndToolsMaterialT>(
    ItemMaterialEnum.NETHERITE,
  )
  const [axeMaterial, setAxeMaterial] = useState<WeaponAndToolsMaterialT>(
    ItemMaterialEnum.NETHERITE,
  )
  const [shovelMaterial, setShovelMaterial] = useState<WeaponAndToolsMaterialT>(
    ItemMaterialEnum.NETHERITE,
  )
  const [hoeMaterial, setHoeMaterial] = useState<WeaponAndToolsMaterialT>(
    ItemMaterialEnum.NETHERITE,
  )

  const enchantTranslationsTypes: EnchantTranslationsT = enchantTranslations

  const getNextArmorMaterial = (currentMaterial: ArmorMaterialT): ArmorMaterialT => {
    const currentIndex = armorMaterials.indexOf(currentMaterial)
    const nextIndex = (currentIndex + 1) % armorMaterials.length

    return armorMaterials[nextIndex]
  }

  const getNextWeaponAndToolsMaterial = (
    currentMaterial: WeaponAndToolsMaterialT,
  ): WeaponAndToolsMaterialT => {
    const currentIndex = weaponAndToolsMaterial.indexOf(currentMaterial)
    const nextIndex = (currentIndex + 1) % weaponAndToolsMaterial.length

    return weaponAndToolsMaterial[nextIndex]
  }

  const giveImageUrl = (itemType: string) => {
    return `${FETCH_URL_IMG}/${itemType.slice(0, 2)}/${itemType}.png`
  }

  const setSelectedEnchantsToggle = (enchant: EnchantsEnum) => {
    if (selectedEnchants.includes(enchant)) {
      const updatedSelectedEnchants = selectedEnchants.filter(
        item => item !== enchant,
      )

      updateEnchantSearchParams({ enchants: updatedSelectedEnchants })

      return
    }

    updateEnchantSearchParams({ enchants: [...selectedEnchants, enchant] })
  }

  const setSelectedMinorEnchantsToggle = (
    addEnchant: EnchantsEnum,
    deleteEnchant?: EnchantsEnum,
  ) => {
    if (addEnchant === deleteEnchant) {
      const enchants = selectedEnchants.filter(item => addEnchant !== item)
      updateEnchantSearchParams({ enchants })

      return
    }

    if (!deleteEnchant) {
      updateEnchantSearchParams({ enchants: [...selectedEnchants, addEnchant] })

      return
    }

    const enchants = selectedEnchants.map(item =>
      item === deleteEnchant ? addEnchant : item,
    )

    updateEnchantSearchParams({ enchants })
  }

  const enchantItemsTypes: EnchantItemsTypesT[] = [
    [
      {
        enchantType: EnchantsTypesEnum.HELMET,
        text: 'Шолом',
        itemType: `${helmetMaterial}_${ItemTypesEnchantsFinderEnum.HELMET}`,
        onClick: () => {
          setHelmetMaterial(prevMaterial => getNextArmorMaterial(prevMaterial))
        },
      },
      {
        enchantType: EnchantsTypesEnum.CHESTPLATE,
        text: 'Нагрудник',
        itemType: `${chestplateMaterial}_${ItemTypesEnchantsFinderEnum.CHESTPLATE}`,
        onClick: () => {
          setChestplateMaterial(prevMaterial => getNextArmorMaterial(prevMaterial))
        },
      },
      {
        enchantType: EnchantsTypesEnum.LEGGINGS,
        text: 'Наголінники',
        itemType: `${leggingsMaterial}_${ItemTypesEnchantsFinderEnum.LEGGINGS}`,
        onClick: () => {
          setLeggingsMaterial(prevMaterial => getNextArmorMaterial(prevMaterial))
        },
      },
      {
        enchantType: EnchantsTypesEnum.BOOTS,
        text: 'Чоботи',
        itemType: `${bootsMaterial}_${ItemTypesEnchantsFinderEnum.BOOTS}`,
        onClick: () => {
          setBootsMaterial(prevMaterial => getNextArmorMaterial(prevMaterial))
        },
      },
      {
        enchantType: EnchantsTypesEnum.ELYTRA,
        text: 'Елітри',
        itemType: `${ItemTypesEnchantsFinderEnum.ELYTRA}`,
      },
    ],
    [
      {
        enchantType: EnchantsTypesEnum.SWORD,
        text: 'Меч',
        itemType: `${swordMaterial}_${ItemTypesEnchantsFinderEnum.SWORD}`,
        onClick: () => {
          setSwordMaterial(prevMaterial =>
            getNextWeaponAndToolsMaterial(prevMaterial),
          )
        },
      },
      {
        enchantType: EnchantsTypesEnum.TRIDENT,
        text: 'Тризубець',
        itemType: `${ItemTypesEnchantsFinderEnum.TRIDENT}`,
      },
      {
        enchantType: EnchantsTypesEnum.BOW,
        text: 'Лук',
        itemType: `${ItemTypesEnchantsFinderEnum.BOW}`,
      },
      {
        enchantType: EnchantsTypesEnum.CROSSBOW,
        text: 'Арбалет',
        itemType: `${ItemTypesEnchantsFinderEnum.CROSSBOW}`,
      },
      {
        enchantType: EnchantsTypesEnum.MACE,
        text: 'Булава',
        itemType: `${ItemTypesEnchantsFinderEnum.MACE}`,
      },
    ],

    [
      {
        enchantType: EnchantsTypesEnum.PICKAXE,
        text: 'Кайло',
        itemType: `${pickaxeMaterial}_${ItemTypesEnchantsFinderEnum.PICKAXE}`,
        onClick: () => {
          setPickaxeMaterial(prevMaterial =>
            getNextWeaponAndToolsMaterial(prevMaterial),
          )
        },
      },
      {
        enchantType: EnchantsTypesEnum.AXE,
        text: 'Сокира',
        itemType: `${axeMaterial}_${ItemTypesEnchantsFinderEnum.AXE}`,
        onClick: () => {
          setAxeMaterial(prevMaterial => getNextWeaponAndToolsMaterial(prevMaterial))
        },
      },
      {
        enchantType: EnchantsTypesEnum.SHOVEL,
        text: 'Лопата',
        itemType: `${shovelMaterial}_${ItemTypesEnchantsFinderEnum.SHOVEL}`,
        onClick: () => {
          setShovelMaterial(prevMaterial =>
            getNextWeaponAndToolsMaterial(prevMaterial),
          )
        },
      },
      {
        enchantType: EnchantsTypesEnum.HOE,
        text: 'Мотика',
        itemType: `${hoeMaterial}_${ItemTypesEnchantsFinderEnum.HOE}`,
        onClick: () => {
          setHoeMaterial(prevMaterial => getNextWeaponAndToolsMaterial(prevMaterial))
        },
      },
      {
        enchantType: EnchantsTypesEnum.FISHING_ROD,
        text: 'Вудка',
        itemType: `${ItemTypesEnchantsFinderEnum.FISHING_ROD}`,
      },
    ],
  ]

  return {
    enchantItemsTypes,
    giveImageUrl,
    enchantSearchParams,
    selectedEnchants,
    setSelectedEnchantsToggle,
    enchantTranslationsTypes,
    setSelectedMinorEnchantsToggle,
    updateEnchantSearchParams,
  }
}
