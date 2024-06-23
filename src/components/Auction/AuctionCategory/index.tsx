import {
  ButtonCategory,
  ButtonItems,
  CategoryContainer,
  CategoryList,
  Container,
  DescriptionCategory,
} from 'src/components/Auction/AuctionCategory/styles'
import type { AuctionCategoryProps } from 'src/components/Auction/AuctionCategory/types'
import { useAuction } from 'src/components/Auction/AuctionCategory/useAuction'
import { TitleContainer } from 'src/components/Auction/styles'

const AuctionCategory = ({
  setSelectedCaterogy,
  selectedCaterogy,
  ...props
}: AuctionCategoryProps): JSX.Element => {
  const { categories } = useAuction()

  return (
    <Container {...props}>
      <CategoryContainer>
        <TitleContainer>
          <p>Категорії</p>
        </TitleContainer>
        <CategoryList>
          {categories.map(({ style, category, description }) => {
            const isSelected = selectedCaterogy === category

            return (
              <ButtonCategory
                type="button"
                onClick={() => {
                  if (isSelected) {
                    setSelectedCaterogy('')

                    return
                  }

                  setSelectedCaterogy(category)
                }}
                aria-label={`Select category ${category}`}
                key={category}
                isSelected={isSelected}
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
