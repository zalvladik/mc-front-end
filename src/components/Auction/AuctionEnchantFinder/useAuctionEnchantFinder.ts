import { useState } from 'react'
import { FETCH_URL_IMG } from 'src/constants'

import type {
  ArmorMaterialT,
  EnchantsEnum,
  WeaponAndToolsMaterialT,
} from 'src/components/Auction/AuctionEnchantFinder/constants'
import {
  armorMaterials,
  EnchantsTypesEnum,
  ItemMaterialEnum,
  ItemTypesEnchantsFinderEnum,
  weaponAndToolsMaterial,
} from 'src/components/Auction/AuctionEnchantFinder/constants'
import type { EnchantItemsTypesT } from 'src/components/Auction/AuctionEnchantFinder/types'

export const useAuctionEnchantFinder = () => {
  const [selectedEnchantType, setSelectedEnchantType] =
    useState<EnchantsTypesEnum | null>(null)

  const [selectedEnchants, setSelectedEnchants] = useState<EnchantsEnum[]>([])

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

  const giveImageUrl = (itemType: string) => {
    return `${FETCH_URL_IMG}/${itemType.slice(0, 2)}/${itemType}.png`
  }

  const setSelectedEnchantsToggle = (enchant: EnchantsEnum) => {
    if (selectedEnchants.includes(enchant)) {
      const updatedSelectedEnchants = selectedEnchants.filter(
        item => item !== enchant,
      )

      setSelectedEnchants(updatedSelectedEnchants)

      return
    }

    setSelectedEnchants([...selectedEnchants, enchant])
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
    selectedEnchantType,
    setSelectedEnchantType,
    selectedEnchants,
    setSelectedEnchantsToggle,
  }
}
