import type { ItemTypesEnchantsFinderEnum } from 'src/constants'

import {
  Container,
  ContainerWrapper,
  EnchantItemContainer,
  EnchantItemIcon,
  EnchantTypeCategoryContainer,
  LeftSection,
} from 'src/components/Auction/AuctionEnchantFinder/styles'
import { useAuctionEnchantFinder } from 'src/components/Auction/AuctionEnchantFinder/useAuctionEnchantFinder'

const AuctionEnchantFinder = (): JSX.Element => {
  const {
    enchantItemsTypes,
    giveImageUrl,
    selectedEnchantType,
    setSelectedEnchantType,
  } = useAuctionEnchantFinder()

  return (
    <ContainerWrapper>
      <Container>
        <LeftSection>
          <h1>Тип предмету</h1>
          <div>
            {enchantItemsTypes.map((category, i) => (
              <EnchantTypeCategoryContainer key={i}>
                {category.map(({ itemType, enchantType, onClick = () => {} }) => {
                  const itemTypeAs = itemType as ItemTypesEnchantsFinderEnum

                  return (
                    <EnchantItemContainer
                      key={itemType}
                      style={{
                        backgroundImage:
                          selectedEnchantType === enchantType
                            ? 'url(/assets/items_for_ui/slot_green.png)'
                            : 'url(/assets/items_for_ui/slot.png)',
                      }}
                      onClick={() => {
                        if (selectedEnchantType === enchantType) {
                          onClick()
                        }

                        setSelectedEnchantType(enchantType)
                      }}
                    >
                      <EnchantItemIcon
                        style={{
                          backgroundImage: `url(${giveImageUrl(itemTypeAs)}`,
                          width: 64,
                          height: 64,
                        }}
                      />
                    </EnchantItemContainer>
                  )
                })}
              </EnchantTypeCategoryContainer>
            ))}
          </div>
        </LeftSection>
        {/* <ButtonsContainer>
          {buttonsTexts.map(({ fragment, text }) => {
            return (
              <DefaultButton
                onClick={() => {}}
                style={{ width: '100%' }}
                key={fragment}
              >
                {text}
              </DefaultButton>
            )
          })}
        </ButtonsContainer> */}
      </Container>
    </ContainerWrapper>
  )
}

export default AuctionEnchantFinder
