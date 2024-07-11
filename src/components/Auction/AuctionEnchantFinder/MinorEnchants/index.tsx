import type { CSSProperties } from 'styled-components'

import {
  MinorEnchantsContainer,
  OverflowMinorEnchants,
  StyledFaArrowDownShortWide,
} from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants/styles'
import type { MinorEnchantsProps } from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants/types'
import { useMinorEnchants } from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants/useMinorEnchants'
import DefaultButton from 'src/components/DefaultButton'

import { type EnchantsEnum, enchantsWithMaxLvl } from '../constants'
import { DefaultButtonWrapper } from '../styles'

const MinorEnchants = ({
  item,
  selectedEnchants = {},
  setSelectedMinorEnchantsToggle,
  setEnchantLvl,
  ...props
}: MinorEnchantsProps): JSX.Element => {
  const {
    selected,
    setSelected,
    overflowRef,
    minorEnchantsRef,
    mainContainerRef,
    enchantTranslationsTypes,
  } = useMinorEnchants()

  const isSelectedFromHere = Object.keys(selectedEnchants).find(enchant =>
    item.includes(enchant as EnchantsEnum),
  )

  const textStyle: CSSProperties = {
    color: '#ececec',
    fontSize: 20,
  }

  return (
    <div {...props} ref={mainContainerRef}>
      <DefaultButton
        onClick={() => setSelected(!selected)}
        style={{ width: '100%', opacity: !isSelectedFromHere ? 0.5 : 1 }}
        textStyle={textStyle}
      >
        {isSelectedFromHere ? (
          <>
            {enchantTranslationsTypes[isSelectedFromHere]}
            {!selected &&
              (enchantsWithMaxLvl[isSelectedFromHere] > 1
                ? ` ${selectedEnchants[isSelectedFromHere as EnchantsEnum]} `
                : '')}
            <StyledFaArrowDownShortWide size={30} />
          </>
        ) : (
          <StyledFaArrowDownShortWide size={30} />
        )}
      </DefaultButton>

      <OverflowMinorEnchants ref={overflowRef}>
        <MinorEnchantsContainer
          ref={minorEnchantsRef}
          style={{
            transform: selected ? 'translate(0%, 0%)' : 'translate(0%, -100%)',
          }}
        >
          {item.map(item => {
            const isSelectedEnchant = selectedEnchants[item]

            return (
              <DefaultButtonWrapper key={item}>
                <DefaultButton
                  key={item}
                  onClick={() => {
                    setSelectedMinorEnchantsToggle(
                      item,
                      isSelectedFromHere as EnchantsEnum | undefined,
                    )
                  }}
                  style={{
                    width: enchantsWithMaxLvl[item] === 1 ? '100%' : '85%',
                    opacity: isSelectedEnchant ? 1 : 0.4,
                  }}
                  textStyle={textStyle}
                >
                  {enchantTranslationsTypes[item]}
                </DefaultButton>
                {enchantsWithMaxLvl[item] > 1 && (
                  <DefaultButton
                    onClick={() => {
                      if (isSelectedFromHere && isSelectedEnchant) {
                        setEnchantLvl(item)
                      }

                      if (isSelectedFromHere && !isSelectedEnchant) {
                        setSelectedMinorEnchantsToggle(
                          item,
                          isSelectedFromHere as EnchantsEnum | undefined,
                        )
                      }
                    }}
                    style={{
                      width: '50px',
                      opacity: isSelectedEnchant ? 1 : 0.4,
                    }}
                    textStyle={textStyle}
                  >
                    {isSelectedEnchant}
                  </DefaultButton>
                )}
              </DefaultButtonWrapper>
            )
          })}
        </MinorEnchantsContainer>
      </OverflowMinorEnchants>
    </div>
  )
}

export default MinorEnchants
