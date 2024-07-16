import { enchantsWithMaxLvl } from 'src/constants'
import { moneyCalculator, sliceText } from 'src/helpers'
import { EnchantsEnum } from 'src/types'
import type { CSSProperties } from 'styled-components'

import MinorEnchants from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants'
import {
  ButtonsContainer,
  Container,
  DefaultButtonWrapper,
  // EnchantImg,
} from 'src/components/Auction/AuctionEnchantFinder/styles'
import { useAuctionEnchantFinder } from 'src/components/Auction/AuctionEnchantFinder/useAuctionEnchantFinder'
import { useEnchantVariables } from 'src/components/Auction/AuctionEnchantFinder/useEnchantVariables'
import {
  ItemDesriptionContainer,
  ItemPriceContainer,
  StyledSkeleton,
  TbodyContainer,
  TheadContainer,
} from 'src/components/Auction/styles'
import DefaultButton from 'src/components/DefaultButton'
import ItemSlotIcon from 'src/components/ItemSlotIcon'

const AuctionEnchantFinder = (): JSX.Element => {
  const {
    newEnchantSearchParams,
    setSelectedEnchantsToggle,
    enchantTranslations,
    setSelectedMinorEnchantsToggle,
    setEnchantLvl,
    dataEnchantLots,
    isLoadingEnchantLots,
    itemSlotIconProps,
    openModal,
    user,
    didShowEnchantControlPanel,
  } = useAuctionEnchantFinder()

  const { enchantVariables, giveOtherEnchantsTypes, giveNegativeEnchantsTypes } =
    useEnchantVariables()

  const { enchantType: selectedEnchantType, enchants: selectedEnchants } =
    newEnchantSearchParams

  return (
    <>
      {didShowEnchantControlPanel ? (
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
                          <DefaultButton
                            onClick={() => setSelectedEnchantsToggle(item)}
                            style={{
                              width: enchantsWithMaxLvl[item] === 1 ? '100%' : '87%',
                              opacity: !isSelectedEnchants ? 0.4 : 1,
                            }}
                            textStyle={textStyle}
                          >
                            {enchantTranslations[item]}
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
      ) : (
        <div>
          <TheadContainer>
            {['Предмет', 'Ціна'].map(item => (
              <div key={item}>
                <p>{item}</p>
                <div />
              </div>
            ))}
          </TheadContainer>

          <StyledSkeleton
            isLoading={isLoadingEnchantLots}
            isDataExist={dataEnchantLots.length}
            skeletonLength={8}
            emptyText="Предмет не знайдено"
            size={40}
          >
            <TbodyContainer>
              {dataEnchantLots.map(lot => {
                const { id, price, username } = lot

                const { stack, restMoney } = moneyCalculator(price)

                const lotElement = (lot?.shulker || lot?.item)!

                return (
                  <div
                    key={id}
                    onClick={() => openModal(lot)}
                    style={{ opacity: user.username === username ? 0.3 : 1 }}
                  >
                    <div>
                      <ItemSlotIcon
                        {...itemSlotIconProps}
                        {...lotElement}
                        fontSize={18}
                      />

                      <ItemDesriptionContainer>
                        <div>
                          <div>{sliceText(lotElement.display_name, 28)}</div>
                        </div>
                      </ItemDesriptionContainer>
                    </div>

                    <div />

                    <ItemPriceContainer>
                      {price > 64 ? (
                        <div>{`${stack} ст. ${restMoney} шт.`}</div>
                      ) : (
                        <div>{price}</div>
                      )}
                      <div />
                    </ItemPriceContainer>
                  </div>
                )
              })}
            </TbodyContainer>
          </StyledSkeleton>
        </div>
      )}
    </>
  )
}

export default AuctionEnchantFinder
