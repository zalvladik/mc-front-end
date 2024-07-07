import HoverDescription from 'src/components/HoverDescription'

import { CatogeryButton, Container } from 'src/features/ItemCategoryFilter/styles'
import type { ItemCategoryFilterProps } from 'src/features/ItemCategoryFilter/types'
import { useItemCategoryFilter } from 'src/features/ItemCategoryFilter/useItemCategoryFilter'

const ItemCategoryFilter = ({
  setSelectedCaterogies,
  selectedCaterogies,
  sizeItem = 30,
  isNeedShulkerCategory = false,
}: ItemCategoryFilterProps): JSX.Element => {
  const { categories, selectToogle } = useItemCategoryFilter({
    setSelectedCaterogies,
    selectedCaterogies,
    isNeedShulkerCategory,
  })

  return (
    <Container>
      {categories.map(({ style, styleSlot, category, description }) => (
        <CatogeryButton
          key={category}
          style={styleSlot}
          onClick={() => selectToogle(category)}
          aria-label={`Select category ${category}`}
        >
          <div style={{ ...style, width: sizeItem, height: sizeItem }} />
          <HoverDescription
            style={{ translate: '-50% -215%', fontSize: 15 }}
            description={[description]}
          />
        </CatogeryButton>
      ))}
    </Container>
  )
}

export default ItemCategoryFilter
