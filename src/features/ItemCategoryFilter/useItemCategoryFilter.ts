import type { UseItemCategoryFilterProps } from './types'

export const useItemCategoryFilter = ({
  setSelectedCaterogies,
  selectedCaterogies,
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
      category: 'build_blocks',
      style: { backgroundImage: `url(${baseUrl}/bricks.png)` },
      styleSlot: styleForItemBorder('build_blocks'),
      description: 'Будівельні блоки',
    },
    {
      category: 'color_blocks',
      style: { backgroundImage: `url(${baseUrl}/cyan_wool.png)` },
      styleSlot: styleForItemBorder('color_blocks'),
      description: 'Кольорові блоки',
    },
    {
      category: 'nature_blocks',
      style: { backgroundImage: `url(${baseUrl}/grass_block.png)` },
      styleSlot: styleForItemBorder('nature_blocks'),
      description: 'Природні блоки',
    },
    {
      category: 'functional_blocks',
      style: { backgroundImage: `url(${baseUrl}/oak_sign.png)` },
      styleSlot: styleForItemBorder('functional_blocks'),
      description: 'Функціональні блоки',
    },
    {
      category: 'redstone_blocks',
      style: { backgroundImage: `url(${baseUrl}/redstone.png)` },
      styleSlot: styleForItemBorder('redstone_blocks'),
      description: 'Блоки редстоуну',
    },
    {
      category: 'tools',
      style: { backgroundImage: `url(${baseUrl}/diamond_pickaxe.png)` },
      styleSlot: styleForItemBorder('tools'),
      description: 'Інструменти й прилади',
    },
    {
      category: 'weapons',
      style: { backgroundImage: `url(${baseUrl}/netherite_sword.png)` },
      styleSlot: styleForItemBorder('weapons'),
      description: 'Бойове приладдя',
    },
    {
      category: 'foods_and_potions',
      style: { backgroundImage: `url(${baseUrl}/golden_apple.png)` },
      styleSlot: styleForItemBorder('foods_and_potions'),
      description: 'Їжа та напої',
    },
    {
      category: 'ingredients',
      style: { backgroundImage: `url(${baseUrl}/iron_ingot.png)` },
      styleSlot: styleForItemBorder('ingredients'),
      description: 'Інгредієнти',
    },
  ]

  return { categories, selectToogle }
}
