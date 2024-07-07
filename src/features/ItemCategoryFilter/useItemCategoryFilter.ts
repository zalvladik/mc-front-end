import { CategoryEnum } from 'src/constants'

import type { UseItemCategoryFilterProps } from './types'

export const useItemCategoryFilter = ({
  setSelectedCaterogies,
  selectedCaterogies,
  isNeedShulkerCategory,
}: UseItemCategoryFilterProps) => {
  const selectToogle = (category: string) => {
    const isSelected = selectedCaterogies.find(item => item === category)

    if (!isSelected) {
      setSelectedCaterogies([...selectedCaterogies, category])

      return
    }

    setSelectedCaterogies(selectedCaterogies.filter(item => item !== category))
  }

  const styleForItemBorder = (category: string) => {
    return {
      backgroundImage: selectedCaterogies.find(item => item === category)
        ? 'url(/assets/items_for_ui/slot_green.png)'
        : 'url(/assets/items_for_ui/slot.png)',
    }
  }

  const baseUrl = '/assets/items_for_ui'
  const categories = [
    {
      category: CategoryEnum.BUILD_BLOCKS,
      style: { backgroundImage: `url(${baseUrl}/bricks.png)` },
      styleSlot: styleForItemBorder(CategoryEnum.BUILD_BLOCKS),
      description: 'Будівельні блоки',
    },
    {
      category: CategoryEnum.COLOR_BLOCKS,
      style: { backgroundImage: `url(${baseUrl}/cyan_wool.png)` },
      styleSlot: styleForItemBorder(CategoryEnum.COLOR_BLOCKS),
      description: 'Кольорові блоки',
    },
    {
      category: CategoryEnum.NATURE_BLOCKS,
      style: { backgroundImage: `url(${baseUrl}/grass_block.png)` },
      styleSlot: styleForItemBorder(CategoryEnum.NATURE_BLOCKS),
      description: 'Природні блоки',
    },
    {
      category: CategoryEnum.FUNCTIONAL_BLOCKS,
      style: { backgroundImage: `url(${baseUrl}/oak_sign.png)` },
      styleSlot: styleForItemBorder(CategoryEnum.FUNCTIONAL_BLOCKS),
      description: 'Функціональні блоки',
    },
    {
      category: CategoryEnum.REDSTONE_BLOCKS,
      style: { backgroundImage: `url(${baseUrl}/redstone.png)` },
      styleSlot: styleForItemBorder(CategoryEnum.REDSTONE_BLOCKS),
      description: 'Блоки редстоуну',
    },
    {
      category: CategoryEnum.TOOLS,
      style: { backgroundImage: `url(${baseUrl}/diamond_pickaxe.png)` },
      styleSlot: styleForItemBorder(CategoryEnum.TOOLS),
      description: 'Інструменти й прилади',
    },
    {
      category: CategoryEnum.WEAPONS,
      style: { backgroundImage: `url(${baseUrl}/netherite_sword.png)` },
      styleSlot: styleForItemBorder(CategoryEnum.WEAPONS),
      description: 'Бойове приладдя',
    },
    {
      category: CategoryEnum.FOODS_AND_POTIONS,
      style: { backgroundImage: `url(${baseUrl}/golden_apple.png)` },
      styleSlot: styleForItemBorder(CategoryEnum.FOODS_AND_POTIONS),
      description: 'Їжа та напої',
    },
    {
      category: CategoryEnum.INGREDIENTS,
      style: { backgroundImage: `url(${baseUrl}/iron_ingot.png)` },
      styleSlot: styleForItemBorder(CategoryEnum.INGREDIENTS),
      description: 'Інгредієнти',
    },
    ...(isNeedShulkerCategory
      ? [
          {
            category: CategoryEnum.SHULKERS,
            style: { backgroundImage: `url(${baseUrl}/shulker_box.png)` },
            styleSlot: styleForItemBorder(CategoryEnum.SHULKERS),
            description: 'Шалкери',
          },
        ]
      : []),
  ]

  return { categories, selectToogle }
}
