import { FETCH_URL_IMG } from 'src/constants'

import {
  ButtonCategory,
  ButtonItems,
  CategoryContainer,
  CategoryList,
  CategoryTitleContainer,
  Container,
  DescriptionCategory,
} from 'src/components/Auction/AuctionCategory/styles'
import { useAuction } from 'src/components/Auction/AuctionCategory/useAuction'

const AuctionCategory = (): JSX.Element => {
  const { categories, setSelectedCaterogy, selectedCaterogy } = useAuction()

  return (
    <Container>
      <CategoryContainer>
        <CategoryTitleContainer>
          <p>Категорії</p>
        </CategoryTitleContainer>
        <CategoryList>
          {categories.map(({ style, category, description }) => {
            const isSelected = selectedCaterogy === category

            return (
              <ButtonCategory
                type="button"
                onClick={() => setSelectedCaterogy(category)}
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
