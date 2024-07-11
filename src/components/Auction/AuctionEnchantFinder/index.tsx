import type { CSSProperties } from 'styled-components'

import {
  EnchantsEnum,
  enchantsWithMaxLvl,
  type ItemTypesEnchantsFinderEnum,
} from 'src/components/Auction/AuctionEnchantFinder/constants'
import MinorEnchants from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants'
import {
  ButtonsContainer,
  Container,
  ContainerWrapper,
  DefaultButtonWrapper,
  EnchantTypeCategoryContainer,
  LeftSection,
  RightSection,
} from 'src/components/Auction/AuctionEnchantFinder/styles'
import { useAuctionEnchantFinder } from 'src/components/Auction/AuctionEnchantFinder/useAuctionEnchantFinder'
import { useEnchantVariables } from 'src/components/Auction/AuctionEnchantFinder/useEnchantVariables'
import DefaultButton from 'src/components/DefaultButton'
import ItemSlotIcon from 'src/components/ItemSlotIcon'

const AuctionEnchantFinder = (): JSX.Element => {
  const {
    enchantItemsTypes,
    enchantSearchParams,
    setSelectedEnchantsToggle,
    enchantTranslationsTypes,
    setSelectedMinorEnchantsToggle,
    updateEnchantSearchParams,
    setEnchantLvl,
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
                {category.map(
                  ({ display_name, itemType, enchantType, onClick = () => {} }) => {
                    const itemTypeAs = itemType as ItemTypesEnchantsFinderEnum

                    return (
                      <ItemSlotIcon
                        type={itemTypeAs}
                        key={itemType}
                        itemSize={60}
                        containerSize={90}
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

                            updateEnchantSearchParams({
                              itemType,
                            })
                          }

                          updateEnchantSearchParams({
                            enchants: {},
                            itemType,
                            enchantType,
                          })
                        }}
                      />
                    )
                  },
                )}
              </EnchantTypeCategoryContainer>
            ))}
          </div>
          <DefaultButton
            key="DefaultButton"
            onClick={() => ''}
            style={{
              width: '100%',
              opacity:
                selectedEnchantType && Object.keys(selectedEnchants).length
                  ? 1
                  : 0.5,
            }}
          >
            Пошук
          </DefaultButton>
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
                      const isAArray = Array.isArray(a)
                      const isBArray = Array.isArray(b)

                      if (isAArray && !isBArray) return -1

                      if (!isAArray && isBArray) return 1

                      const isASelected = enchantsWithMaxLvl[a as EnchantsEnum] === 1
                      const isBSelected = enchantsWithMaxLvl[b as EnchantsEnum] === 1

                      if (isASelected && !isBSelected) return 1

                      if (!isASelected && isBSelected) return -1

                      return 0
                    })
                    .map((item, i) => {
                      if (Array.isArray(item)) {
                        return (
                          <MinorEnchants
                            key={i}
                            item={item}
                            style={{ zIndex: i === 0 ? 5 : 4 }}
                            selectedEnchants={selectedEnchants}
                            setEnchantLvl={setEnchantLvl}
                            setSelectedMinorEnchantsToggle={
                              setSelectedMinorEnchantsToggle
                            }
                          />
                        )
                      }

                      const isNegativeEnchant =
                        item === EnchantsEnum.VANISHING_CURSE ||
                        item === EnchantsEnum.BINDING_CURSE

                      const color = isNegativeEnchant ? '#aa0e0e' : '#ececec'
                      const fontSize = isNegativeEnchant ? 22 : 20
                      const fontWeight = isNegativeEnchant ? 900 : 500

                      const textStyle: CSSProperties = {
                        color,
                        fontSize,
                        fontWeight,
                      }

                      const isSelectedEnchants = selectedEnchants[item]

                      return (
                        <DefaultButtonWrapper key={item}>
                          <DefaultButton
                            onClick={() => setSelectedEnchantsToggle(item)}
                            style={{
                              width: enchantsWithMaxLvl[item] === 1 ? '100%' : '86%',
                              opacity: !isSelectedEnchants ? 0.4 : 1,
                            }}
                            textStyle={textStyle}
                          >
                            {enchantTranslationsTypes[item]}
                          </DefaultButton>
                          {enchantsWithMaxLvl[item] > 1 && (
                            <DefaultButton
                              onClick={() => {
                                if (isSelectedEnchants) {
                                  setEnchantLvl(item)
                                } else {
                                  setSelectedEnchantsToggle(item)
                                }
                              }}
                              style={{
                                width: '50px',
                                opacity: !isSelectedEnchants ? 0.4 : 1,
                              }}
                              textStyle={textStyle}
                            >
                              {isSelectedEnchants}
                            </DefaultButton>
                          )}
                        </DefaultButtonWrapper>
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
