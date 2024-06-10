import { useState } from 'react'

export const useAuction = () => {
  const [selectedCaterogy, setSelectedCaterogy] = useState<string>('')

  const baseUrl = '/assets/items_for_ui'
  const categories = [
    {
      category: 'build_blocks',
      style: { backgroundImage: `url(${baseUrl}/bricks.png)` },
      description: 'Будівельні блоки',
    },
    {
      category: 'color_blocks',
      style: { backgroundImage: `url(${baseUrl}/cyan_wool.png)` },
      description: 'Кольорові блоки',
    },
    {
      category: 'nature_blocks',
      style: { backgroundImage: `url(${baseUrl}/grass_block.png)` },
      description: 'Природні блоки',
    },
    {
      category: 'functional_blocks',
      style: { backgroundImage: `url(${baseUrl}/oak_sign.png)` },
      description: 'Функціональні блоки',
    },
    {
      category: 'redstone_blocks',
      style: { backgroundImage: `url(${baseUrl}/redstone.png)` },

      description: 'Блоки редстоуну',
    },
    {
      category: 'tools',
      style: { backgroundImage: `url(${baseUrl}/diamond_pickaxe.png)` },

      description: 'Інструменти й прилади',
    },
    {
      category: 'weapons',
      style: { backgroundImage: `url(${baseUrl}/netherite_sword.png)` },

      description: 'Бойове приладдя',
    },
    {
      category: 'foods_and_potions',
      style: { backgroundImage: `url(${baseUrl}/golden_apple.png)` },

      description: 'Їжа та напої',
    },
    {
      category: 'ingredients',
      style: { backgroundImage: `url(${baseUrl}/iron_ingot.png)` },

      description: 'Інгредієнти',
    },
    {
      category: 'shulkers',
      style: { backgroundImage: `url(${baseUrl}/shulker_box.png)` },

      description: 'Шалкера з предметами',
    },
  ]

  return { categories, setSelectedCaterogy, selectedCaterogy }
}