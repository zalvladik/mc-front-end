import { Container } from 'src/features/ItemCategoryFilter/styles'
import type { ItemCategoryFilterProps } from 'src/features/ItemCategoryFilter/types'
import { useItemCategoryFilter } from 'src/features/ItemCategoryFilter/useItemCategoryFilter'

const ItemCategoryFilter = ({
  setSelectedCaterogies,
  selectedCaterogies,
}: ItemCategoryFilterProps): JSX.Element => {
  const { categories, selectToogle } = useItemCategoryFilter({
    setSelectedCaterogies,
    selectedCaterogies,
  })

  return (
    <Container>
      {categories.map(({ style, styleSlot, category }) => (
        <button
          key={category}
          style={styleSlot}
          type="button"
          onClick={() => selectToogle(category)}
          aria-label={`Select category ${category}`}
        >
          <div style={style} />
        </button>
      ))}
    </Container>
  )
}

export default ItemCategoryFilter
