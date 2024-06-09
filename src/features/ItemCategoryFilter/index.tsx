import HoverDescription from 'src/components/HoverDescription'

import { Container } from 'src/features/ItemCategoryFilter/styles'
import type { ItemCategoryFilterProps } from 'src/features/ItemCategoryFilter/types'
import { useItemCategoryFilter } from 'src/features/ItemCategoryFilter/useItemCategoryFilter'

const ItemCategoryFilter = ({
  filterFilterByCaterogies,
  selectedCaterogies,
}: ItemCategoryFilterProps): JSX.Element => {
  const { categories, selectToogle } = useItemCategoryFilter({
    filterFilterByCaterogies,
    selectedCaterogies,
  })

  return (
    <Container>
      {categories.map(({ style, styleSlot, category, description }) => (
        <button
          key={category}
          style={styleSlot}
          type="button"
          onClick={() => selectToogle(category)}
          aria-label={`Select category ${category}`}
        >
          <div style={style} />
          <HoverDescription
            style={{ translate: '-50% -215%', fontSize: 15 }}
            description={[description]}
          />
        </button>
      ))}
    </Container>
  )
}

export default ItemCategoryFilter
