import { enchantsWithMaxLvl } from 'src/constants'
import { EnchantsEnum } from 'src/types'
import type { CSSProperties } from 'styled-components'

import MinorEnchants from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants'
import {
  ButtonsContainer,
  Container,
  ContainerWrapper,
  DefaultButtonWrapper,
  // EnchantImg,
} from 'src/components/Auction/AuctionEnchantFinder/styles'
import { useAuctionEnchantFinder } from 'src/components/Auction/AuctionEnchantFinder/useAuctionEnchantFinder'
import { useEnchantVariables } from 'src/components/Auction/AuctionEnchantFinder/useEnchantVariables'
import DefaultButton from 'src/components/DefaultButton'

const AuctionEnchantFinder = (): JSX.Element => {
  const {
    enchantSearchParams,
    setSelectedEnchantsToggle,
    enchantTranslationsTypes,
    setSelectedMinorEnchantsToggle,
    setEnchantLvl,
  } = useAuctionEnchantFinder()

  const { enchantVariables, giveOtherEnchantsTypes, giveNegativeEnchantsTypes } =
    useEnchantVariables()

  const { enchantType: selectedEnchantType, enchants: selectedEnchants } =
    enchantSearchParams

  return (
    <ContainerWrapper>
      <Container>
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
                          enchants={item}
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
                        {/* <EnchantImg
                          style={{
                            backgroundImage: `url(/assets/items_for_ui/${enchantImages[item]})`,
                          }}
                        /> */}
                        <DefaultButton
                          onClick={() => setSelectedEnchantsToggle(item)}
                          style={{
                            width: '87%',
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
      </Container>
    </ContainerWrapper>
  )
}

export default AuctionEnchantFinder
