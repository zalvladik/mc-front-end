import {
  ButtonCategory,
  ButtonItems,
  CategoryContainer,
  CategoryList,
  Container,
  DescriptionCategory,
} from 'src/components/Auction/AuctionCategory/styles'
import { useAuctionCategory } from 'src/components/Auction/AuctionCategory/useAuctionCategory'
import { TitleContainer } from 'src/components/Auction/styles'
import { AuctionCategoryProps } from 'src/components/Auction/AuctionCategory/types'

const AuctionCategory = ({ ...props }: AuctionCategoryProps): JSX.Element => {
  const { categories, selectedCategory, setSelectedCategory } = useAuctionCategory()

  return (
    <Container {...props}>
      <CategoryContainer>
        <TitleContainer>
          <p>Категорії</p>
        </TitleContainer>
        <CategoryList>
          {categories.map(({ style, category, description }) => {
            const isSelected = selectedCategory === category
            const isShulkerCategory = category === 'shulkers'

            return (
              <ButtonCategory
                type="button"
                onClick={() => {
                  if (isSelected) {
                    setSelectedCategory('')

                    return
                  }

                  setSelectedCategory(category)
                }}
                aria-label={`Select category ${category}`}
                key={category}
                isSelected={isSelected}
                style={{
                  pointerEvents: isShulkerCategory ? 'none' : 'auto',
                  opacity: isShulkerCategory ? 0.3 : 1,
                }}
              >
                <ButtonItems isSelected={isSelected}>
                  <div style={style} />
                  <DescriptionCategory>
                    <p>{description}</p>
                  </DescriptionCategory>
                </ButtonItems>
              </ButtonCategory>
            )
          })}
        </CategoryList>
      </CategoryContainer>
    </Container>
  )
}

export default AuctionCategory
