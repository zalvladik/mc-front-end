import type { ItemTypesEnchantsFinderEnum } from 'src/types'

import {
  ButtonCategory,
  ButtonItems,
  CategoryList,
  Container,
  DescriptionCategory,
  EnchantTypeCategoryContainer,
  EnchantTypes,
} from 'src/components/Auction/AuctionCategory/styles'
import type { AuctionCategoryProps } from 'src/components/Auction/AuctionCategory/types'
import { useAuctionCategory } from 'src/components/Auction/AuctionCategory/useAuctionCategory'
import { useAuctionCategoryEnchantTypes } from 'src/components/Auction/AuctionCategory/useAuctionCategoryEnchantTypes'
import { TitleContainer } from 'src/components/Auction/styles'
import ItemSlotIcon from 'src/components/ItemSlotIcon'

const AuctionCategory = ({ ...props }: AuctionCategoryProps): JSX.Element => {
  const { categories, selectedCategory, setSelectedCategory } = useAuctionCategory()
  const {
    enchantItemsTypes,
    enchantSearchParams,
    updateEnchantSearchParams,
    isFragment,
  } = useAuctionCategoryEnchantTypes()

  const { enchantType: selectedEnchantType } = enchantSearchParams

  return (
    <Container {...props}>
      {!isFragment.isEnchantFinderFragment ? (
        <div>
          <TitleContainer>
            <p>Категорії</p>
          </TitleContainer>
          <CategoryList>
            {categories.map(({ style, category, description }) => {
              const isSelected = selectedCategory === category

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
        </div>
      ) : (
        <EnchantTypes>
          {' '}
          <h1>Предмет для пошуку</h1>
          <div>
            {enchantItemsTypes.map((category, i) => (
              <EnchantTypeCategoryContainer key={i}>
                {category.map(
                  ({ display_name, itemType, enchantType, onClick = () => {} }) => {
                    const itemTypeAs = itemType as ItemTypesEnchantsFinderEnum

                    return (
                      <ItemSlotIcon
                        type={itemTypeAs}
                        key={itemType}
                        itemSize={54}
                        containerSize={80}
                        display_name={display_name}
                        style={{
                          cursor: 'pointer',
                          backgroundImage:
                            selectedEnchantType === enchantType
                              ? 'url(/assets/items_for_ui/slot_green.png)'
                              : 'url(/assets/items_for_ui/slot.png)',
                        }}
                        onClick={() => {
                          if (selectedEnchantType === enchantType) {
                            onClick()

                            updateEnchantSearchParams(itemType)
                          }

                          updateEnchantSearchParams(itemType, enchantType)
                        }}
                      />
                    )
                  },
                )}
              </EnchantTypeCategoryContainer>
            ))}
          </div>
        </EnchantTypes>
      )}
    </Container>
  )
}

export default AuctionCategory
