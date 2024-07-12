import { useState } from 'react'
import { armorMaterials, weaponAndToolsMaterial } from 'src/constants'
import { useAuction } from 'src/contexts/AuctionProvider/useAuction'
import type { ArmorMaterialT, WeaponAndToolsMaterialT } from 'src/types'
import {
  EnchantsTypesEnum,
  ItemMaterialEnum,
  ItemTypesEnchantsFinderEnum,
} from 'src/types'

import type { EnchantItemsTypesT } from 'src/components/Auction/AuctionCategory/types'

export const useAuctionCategoryEnchantTypes = () => {
  const { enchantSearchParams, setEnchantSearchParams, isFragment } = useAuction()

  const updateEnchantSearchParams = (
    itemType: string,
    enchantType?: EnchantsTypesEnum,
  ) => {
    const updatedParams = { ...enchantSearchParams }

    if (itemType) updatedParams.itemType = itemType

    if (enchantType) updatedParams.enchantType = enchantType

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

  const enchantItemsTypes: EnchantItemsTypesT[] = [
    [
      {
        enchantType: EnchantsTypesEnum.HELMET,
        display_name: 'Шолом',
        itemType: `${helmetMaterial}_${ItemTypesEnchantsFinderEnum.HELMET}`,
        onClick: () => {
          setHelmetMaterial(prevMaterial => getNextArmorMaterial(prevMaterial))
        },
      },
      {
        enchantType: EnchantsTypesEnum.CHESTPLATE,
        display_name: 'Нагрудник',
        itemType: `${chestplateMaterial}_${ItemTypesEnchantsFinderEnum.CHESTPLATE}`,
        onClick: () => {
          setChestplateMaterial(prevMaterial => getNextArmorMaterial(prevMaterial))
        },
      },
      {
        enchantType: EnchantsTypesEnum.LEGGINGS,
        display_name: 'Наголінники',
        itemType: `${leggingsMaterial}_${ItemTypesEnchantsFinderEnum.LEGGINGS}`,
        onClick: () => {
          setLeggingsMaterial(prevMaterial => getNextArmorMaterial(prevMaterial))
        },
      },
      {
        enchantType: EnchantsTypesEnum.BOOTS,
        display_name: 'Чоботи',
        itemType: `${bootsMaterial}_${ItemTypesEnchantsFinderEnum.BOOTS}`,
        onClick: () => {
          setBootsMaterial(prevMaterial => getNextArmorMaterial(prevMaterial))
        },
      },
      {
        enchantType: EnchantsTypesEnum.ELYTRA,
        display_name: 'Елітри',
        itemType: `${ItemTypesEnchantsFinderEnum.ELYTRA}`,
      },
    ],
    [
      {
        enchantType: EnchantsTypesEnum.SWORD,
        display_name: 'Меч',
        itemType: `${swordMaterial}_${ItemTypesEnchantsFinderEnum.SWORD}`,
        onClick: () => {
          setSwordMaterial(prevMaterial =>
            getNextWeaponAndToolsMaterial(prevMaterial),
          )
        },
      },
      {
        enchantType: EnchantsTypesEnum.TRIDENT,
        display_name: 'Тризубець',
        itemType: `${ItemTypesEnchantsFinderEnum.TRIDENT}`,
      },
      {
        enchantType: EnchantsTypesEnum.BOW,
        display_name: 'Лук',
        itemType: `${ItemTypesEnchantsFinderEnum.BOW}`,
      },
      {
        enchantType: EnchantsTypesEnum.CROSSBOW,
        display_name: 'Арбалет',
        itemType: `${ItemTypesEnchantsFinderEnum.CROSSBOW}`,
      },
      {
        enchantType: EnchantsTypesEnum.MACE,
        display_name: 'Булава',
        itemType: `${ItemTypesEnchantsFinderEnum.MACE}`,
      },
    ],

    [
      {
        enchantType: EnchantsTypesEnum.PICKAXE,
        display_name: 'Кайло',
        itemType: `${pickaxeMaterial}_${ItemTypesEnchantsFinderEnum.PICKAXE}`,
        onClick: () => {
          setPickaxeMaterial(prevMaterial =>
            getNextWeaponAndToolsMaterial(prevMaterial),
          )
        },
      },
      {
        enchantType: EnchantsTypesEnum.AXE,
        display_name: 'Сокира',
        itemType: `${axeMaterial}_${ItemTypesEnchantsFinderEnum.AXE}`,
        onClick: () => {
          setAxeMaterial(prevMaterial => getNextWeaponAndToolsMaterial(prevMaterial))
        },
      },
      {
        enchantType: EnchantsTypesEnum.SHOVEL,
        display_name: 'Лопата',
        itemType: `${shovelMaterial}_${ItemTypesEnchantsFinderEnum.SHOVEL}`,
        onClick: () => {
          setShovelMaterial(prevMaterial =>
            getNextWeaponAndToolsMaterial(prevMaterial),
          )
        },
      },
      {
        enchantType: EnchantsTypesEnum.HOE,
        display_name: 'Мотика',
        itemType: `${hoeMaterial}_${ItemTypesEnchantsFinderEnum.HOE}`,
        onClick: () => {
          setHoeMaterial(prevMaterial => getNextWeaponAndToolsMaterial(prevMaterial))
        },
      },
      {
        enchantType: EnchantsTypesEnum.FISHING_ROD,
        display_name: 'Вудка',
        itemType: `${ItemTypesEnchantsFinderEnum.FISHING_ROD}`,
      },
    ],
  ]

  return {
    enchantItemsTypes,
    enchantSearchParams,
    updateEnchantSearchParams,
    isFragment,
  }
}
