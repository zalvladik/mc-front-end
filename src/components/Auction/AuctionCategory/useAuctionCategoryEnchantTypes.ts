import { useState } from 'react'
import { useAuction } from 'src/contexts/AuctionProvider/useAuction'
import { useItemHoverDescription } from 'src/contexts/ItemHoverDescriptionProvider/useItemHoverDescription'
import {
  ArmorMaterialEnum,
  EnchantsTypesEnum,
  ItemTypesEnchantsFinderEnum,
  SwordAndToolsMaterialEnum,
} from 'src/types'

import type { EnchantItemsTypesT } from 'src/components/Auction/AuctionCategory/types'

import type { UpdateEnchantSearchParamsT } from '../AuctionEnchantFinder/types'

export const useAuctionCategoryEnchantTypes = () => {
  const { enchantSearchParams, setEnchantSearchParams, isFragment } = useAuction()
  const { offVisible } = useItemHoverDescription()

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

  const [helmetMaterial, setHelmetMaterial] = useState<ArmorMaterialEnum>(
    ArmorMaterialEnum.NETHERITE,
  )
  const [chestplateMaterial, setChestplateMaterial] = useState<ArmorMaterialEnum>(
    ArmorMaterialEnum.NETHERITE,
  )
  const [leggingsMaterial, setLeggingsMaterial] = useState<ArmorMaterialEnum>(
    ArmorMaterialEnum.NETHERITE,
  )
  const [bootsMaterial, setBootsMaterial] = useState<ArmorMaterialEnum>(
    ArmorMaterialEnum.NETHERITE,
  )

  const [swordMaterial, setSwordMaterial] = useState<SwordAndToolsMaterialEnum>(
    SwordAndToolsMaterialEnum.NETHERITE,
  )

  const [pickaxeMaterial, setPickaxeMaterial] = useState<SwordAndToolsMaterialEnum>(
    SwordAndToolsMaterialEnum.NETHERITE,
  )
  const [axeMaterial, setAxeMaterial] = useState<SwordAndToolsMaterialEnum>(
    SwordAndToolsMaterialEnum.NETHERITE,
  )
  const [shovelMaterial, setShovelMaterial] = useState<SwordAndToolsMaterialEnum>(
    SwordAndToolsMaterialEnum.NETHERITE,
  )
  const [hoeMaterial, setHoeMaterial] = useState<SwordAndToolsMaterialEnum>(
    SwordAndToolsMaterialEnum.NETHERITE,
  )

  const getNextArmorMaterial = (
    currentMaterial: ArmorMaterialEnum,
    enchantType: ItemTypesEnchantsFinderEnum,
  ): ArmorMaterialEnum => {
    const armotMeterialList = Object.values(ArmorMaterialEnum)

    const indexCurrentMaterial = armotMeterialList.indexOf(currentMaterial)

    if (indexCurrentMaterial === armotMeterialList.length - 1) {
      updateEnchantSearchParams({
        itemType: `${armotMeterialList[0]}_${enchantType}`,
      })

      return armotMeterialList[0]
    }

    updateEnchantSearchParams({
      itemType: `${armotMeterialList[indexCurrentMaterial + 1]}_${enchantType}`,
    })

    return armotMeterialList[indexCurrentMaterial + 1]
  }

  const getNextWeaponAndToolsMaterial = (
    currentMaterial: SwordAndToolsMaterialEnum,
    enchantType: ItemTypesEnchantsFinderEnum,
  ): SwordAndToolsMaterialEnum => {
    const swordAndToolsMeterialList = Object.values(SwordAndToolsMaterialEnum)

    const indexCurrentMaterial = swordAndToolsMeterialList.indexOf(currentMaterial)

    if (indexCurrentMaterial === swordAndToolsMeterialList.length - 1) {
      updateEnchantSearchParams({
        itemType: `${swordAndToolsMeterialList[0]}_${enchantType}`,
      })

      return swordAndToolsMeterialList[0]
    }

    updateEnchantSearchParams({
      itemType: `${swordAndToolsMeterialList[indexCurrentMaterial + 1]}_${enchantType}`,
    })

    return swordAndToolsMeterialList[indexCurrentMaterial + 1]
  }

  const enchantItemsTypes: EnchantItemsTypesT[] = [
    [
      {
        enchantType: EnchantsTypesEnum.HELMET,
        display_name: 'Шолом',
        itemType: `${helmetMaterial}_${ItemTypesEnchantsFinderEnum.HELMET}`,
        onClick() {
          setHelmetMaterial(
            getNextArmorMaterial(helmetMaterial, ItemTypesEnchantsFinderEnum.HELMET),
          )
        },
      },
      {
        enchantType: EnchantsTypesEnum.CHESTPLATE,
        display_name: 'Нагрудник',
        itemType: `${chestplateMaterial}_${ItemTypesEnchantsFinderEnum.CHESTPLATE}`,
        onClick() {
          setChestplateMaterial(
            getNextArmorMaterial(
              chestplateMaterial,
              ItemTypesEnchantsFinderEnum.CHESTPLATE,
            ),
          )
        },
      },
      {
        enchantType: EnchantsTypesEnum.LEGGINGS,
        display_name: 'Наголінники',
        itemType: `${leggingsMaterial}_${ItemTypesEnchantsFinderEnum.LEGGINGS}`,
        onClick() {
          setLeggingsMaterial(
            getNextArmorMaterial(
              leggingsMaterial,
              ItemTypesEnchantsFinderEnum.LEGGINGS,
            ),
          )
        },
      },
      {
        enchantType: EnchantsTypesEnum.BOOTS,
        display_name: 'Чоботи',
        itemType: `${bootsMaterial}_${ItemTypesEnchantsFinderEnum.BOOTS}`,
        onClick() {
          setBootsMaterial(
            getNextArmorMaterial(bootsMaterial, ItemTypesEnchantsFinderEnum.BOOTS),
          )
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
          setSwordMaterial(
            getNextWeaponAndToolsMaterial(
              swordMaterial,
              ItemTypesEnchantsFinderEnum.SWORD,
            ),
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
          setPickaxeMaterial(
            getNextWeaponAndToolsMaterial(
              pickaxeMaterial,
              ItemTypesEnchantsFinderEnum.PICKAXE,
            ),
          )
        },
      },
      {
        enchantType: EnchantsTypesEnum.AXE,
        display_name: 'Сокира',
        itemType: `${axeMaterial}_${ItemTypesEnchantsFinderEnum.AXE}`,
        onClick: () => {
          setAxeMaterial(
            getNextWeaponAndToolsMaterial(
              axeMaterial,
              ItemTypesEnchantsFinderEnum.AXE,
            ),
          )
        },
      },
      {
        enchantType: EnchantsTypesEnum.SHOVEL,
        display_name: 'Лопата',
        itemType: `${shovelMaterial}_${ItemTypesEnchantsFinderEnum.SHOVEL}`,
        onClick: () => {
          setShovelMaterial(
            getNextWeaponAndToolsMaterial(
              shovelMaterial,
              ItemTypesEnchantsFinderEnum.SHOVEL,
            ),
          )
        },
      },
      {
        enchantType: EnchantsTypesEnum.HOE,
        display_name: 'Мотика',
        itemType: `${hoeMaterial}_${ItemTypesEnchantsFinderEnum.HOE}`,
        onClick: () => {
          setHoeMaterial(
            getNextWeaponAndToolsMaterial(
              hoeMaterial,
              ItemTypesEnchantsFinderEnum.HOE,
            ),
          )
        },
      },
      {
        enchantType: EnchantsTypesEnum.FISHING_ROD,
        display_name: 'Вудка',
        itemType: `${ItemTypesEnchantsFinderEnum.FISHING_ROD}`,
      },
    ],
  ]

  const { enchants } = enchantSearchParams

  const enchantsForHoverDescription = Object.entries(enchants).map(
    ([enchant, lvl]) => `${enchant}$${lvl}`,
  )

  return {
    enchantItemsTypes,
    enchantSearchParams,
    updateEnchantSearchParams,
    isFragment,
    offVisible,
    enchantsForHoverDescription,
    setEnchantSearchParams,
  }
}
