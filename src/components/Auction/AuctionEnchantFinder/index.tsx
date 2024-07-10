import type { CSSProperties } from 'styled-components'

import {
  EnchantsEnum,
  type ItemTypesEnchantsFinderEnum,
} from 'src/components/Auction/AuctionEnchantFinder/constants'
import MinorEnchants from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants'
import {
  ButtonsContainer,
  Container,
  ContainerWrapper,
  EnchantItemContainer,
  EnchantItemIcon,
  EnchantTypeCategoryContainer,
  LeftSection,
  RightSection,
} from 'src/components/Auction/AuctionEnchantFinder/styles'
import { useAuctionEnchantFinder } from 'src/components/Auction/AuctionEnchantFinder/useAuctionEnchantFinder'
import { useEnchantVariables } from 'src/components/Auction/AuctionEnchantFinder/useEnchantVariables'
import DefaultButton from 'src/components/DefaultButton'

const AuctionEnchantFinder = (): JSX.Element => {
  const {
    enchantItemsTypes,
    giveImageUrl,
    enchantSearchParams,
    setSelectedEnchantsToggle,
    enchantTranslationsTypes,
    setSelectedMinorEnchantsToggle,
    updateEnchantSearchParams,
  } = useAuctionEnchantFinder()

  const { enchantVariables, giveOtherEnchantsTypes, giveNegativeEnchantsTypes } =
    useEnchantVariables()

  const { enchantType: selectedEnchantType, enchants: selectedEnchants } =
    enchantSearchParams

  return (
    <ContainerWrapper>
      <Container>
        <LeftSection>
          <h1>Предмет для пошуку</h1>
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

                        updateEnchantSearchParams({ enchants: [], enchantType })
                      }}
                    >
                      <EnchantItemIcon
                        style={{
                          backgroundImage: `url(${giveImageUrl(itemTypeAs)}`,
                          width: 68,
                          height: 68,
                        }}
                      />
                    </EnchantItemContainer>
                  )
                })}
              </EnchantTypeCategoryContainer>
            ))}
          </div>
        </LeftSection>
        <RightSection>
          {selectedEnchantType ? (
            <>
              <h1>Чари для пошуку</h1>
              <ButtonsContainer>
                {selectedEnchantType &&
                  [
                    ...giveOtherEnchantsTypes(selectedEnchantType),
                    ...enchantVariables[selectedEnchantType],
                    ...giveNegativeEnchantsTypes(selectedEnchantType),
                  ]
                    .sort((a, b) => {
                      const newA = Array.isArray(a)
                      const newB = Array.isArray(b)

                      if (newA && !newB) return -1

                      if (!newA && newB) return 1

                      return 0
                    })
                    .map((item, i) => {
                      const isNegativeEnchant =
                        item === EnchantsEnum.VANISHING_CURSE ||
                        item === EnchantsEnum.BINDING_CURSE

                      const color = isNegativeEnchant ? '#aa0e0e' : '#ececec'
                      const fontSize = 22
                      const fontWeight = isNegativeEnchant ? 900 : 500

                      const textStyle: CSSProperties = {
                        color,
                        fontSize,
                        fontWeight,
                      }

                      if (Array.isArray(item)) {
                        return (
                          <MinorEnchants
                            key={i}
                            item={item}
                            textStyle={textStyle}
                            style={{ zIndex: i === 0 ? 5 : 4 }}
                            selectedEnchants={selectedEnchants}
                            setSelectedMinorEnchantsToggle={
                              setSelectedMinorEnchantsToggle
                            }
                          />
                        )
                      }

                      return (
                        <DefaultButton
                          key={item}
                          onClick={() => setSelectedEnchantsToggle(item)}
                          style={{
                            width: '100%',
                            opacity: !selectedEnchants.includes(item) ? 0.4 : 1,
                          }}
                          textStyle={textStyle}
                        >
                          {enchantTranslationsTypes[item]}
                        </DefaultButton>
                      )
                    })}
              </ButtonsContainer>
            </>
          ) : (
            <h1>Виберіть предмет</h1>
          )}
        </RightSection>
      </Container>
    </ContainerWrapper>
  )
}

export default AuctionEnchantFinder
