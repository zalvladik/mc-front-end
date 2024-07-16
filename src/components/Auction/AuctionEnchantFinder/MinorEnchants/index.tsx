import { enchantsWithMaxLvl } from 'src/constants'
import type { EnchantsEnum } from 'src/types'
import type { CSSProperties } from 'styled-components'

import {
  MinorEnchantsContainer,
  OverflowMinorEnchants,
  StyledFaArrowDownShortWide,
} from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants/styles'
import type { MinorEnchantsProps } from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants/types'
import { useMinorEnchants } from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants/useMinorEnchants'
import DefaultButton from 'src/components/DefaultButton'

import { DefaultButtonWrapper } from '../styles'

const MinorEnchants = ({
  enchants,
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
    enchantTranslations,
  } = useMinorEnchants()

  const isSelectedFromHere = Object.keys(selectedEnchants).find(enchant =>
    enchants.includes(enchant as EnchantsEnum),
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
            {enchantTranslations[isSelectedFromHere]}
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
          {enchants.map(enchant => {
            const isSelectedEnchant = selectedEnchants[enchant as EnchantsEnum]

            return (
              <DefaultButtonWrapper key={enchant}>
                <DefaultButton
                  key={enchant}
                  onClick={() => {
                    setSelectedMinorEnchantsToggle(
                      enchant,
                      isSelectedFromHere as EnchantsEnum | undefined,
                    )
                  }}
                  style={{
                    width: enchantsWithMaxLvl[enchant] === 1 ? '100%' : '86%',
                    opacity: isSelectedEnchant ? 1 : 0.4,
                  }}
                  textStyle={textStyle}
                >
                  {enchantTranslations[enchant]}
                </DefaultButton>
                {enchantsWithMaxLvl[enchant] > 1 && (
                  <DefaultButton
                    onClick={() => {
                      if (!isSelectedFromHere) {
                        setSelectedMinorEnchantsToggle(enchant)

                        return
                      }

                      if (isSelectedFromHere && isSelectedEnchant) {
                        setEnchantLvl(enchant)

                        return
                      }

                      setSelectedMinorEnchantsToggle(
                        enchant,
                        isSelectedFromHere as EnchantsEnum | undefined,
                      )
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
