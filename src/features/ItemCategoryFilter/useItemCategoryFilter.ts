import type { ItemCategoryFilterProps } from './types'

export const useItemCategoryFilter = ({
  setSelectedCaterogies,
  selectedCaterogies,
}: ItemCategoryFilterProps) => {
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
    },
    {
      category: 'color_blocks',
      style: { backgroundImage: `url(${baseUrl}/cyan_wool.png)` },
      styleSlot: styleForItemBorder('color_blocks'),
    },
    {
      category: 'nature_blocks',
      style: { backgroundImage: `url(${baseUrl}/grass_block.png)` },
      styleSlot: styleForItemBorder('nature_blocks'),
    },
    {
      category: 'functional_blocks',
      style: { backgroundImage: `url(${baseUrl}/oak_sign.png)` },
      styleSlot: styleForItemBorder('functional_blocks'),
    },
    {
      category: 'redstone_blocks',
      style: { backgroundImage: `url(${baseUrl}/redstone.png)` },
      styleSlot: styleForItemBorder('redstone_blocks'),
    },
    {
      category: 'tools',
      style: { backgroundImage: `url(${baseUrl}/diamond_pickaxe.png)` },
      styleSlot: styleForItemBorder('tools'),
    },
    {
      category: 'weapons',
      style: { backgroundImage: `url(${baseUrl}/netherite_sword.png)` },
      styleSlot: styleForItemBorder('weapons'),
    },
    {
      category: 'foods_and_potions',
      style: { backgroundImage: `url(${baseUrl}/golden_apple.png)` },
      styleSlot: styleForItemBorder('foods_and_potions'),
    },
    {
      category: 'ingredients',
      style: { backgroundImage: `url(${baseUrl}/iron_ingot.png)` },
      styleSlot: styleForItemBorder('ingredients'),
    },
  ]

  return { categories, selectToogle }
}
