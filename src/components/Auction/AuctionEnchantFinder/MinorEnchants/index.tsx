import { enchantsWithMaxLvl } from 'src/constants'
import type { EnchantsEnum } from 'src/types'
import type { CSSProperties } from 'styled-components'

import SecondMinorEnchants from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants/SecondMinorEnchants'
import {
  MinorEnchantsContainer,
  OverflowMinorEnchants,
  StyledFaArrowDownShortWide,
} from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants/styles'
import type { MinorEnchantsProps } from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants/types'
import { useMinorEnchants } from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants/useMinorEnchants'
import { DefaultButtonWrapper } from 'src/components/Auction/AuctionEnchantFinder/styles'
import DefaultButton from 'src/components/DefaultButton'

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
    secondMinorEnchants,
    setSecondMinorEnchants,
  } = useMinorEnchants()

  const selectedFromHere = Object.keys(selectedEnchants).filter(enchant =>
    enchants.flat().includes(enchant as EnchantsEnum),
  )

  const textStyle: CSSProperties = {
    color: '#ececec',
    fontSize: 20,
  }

  return (
    <div {...props} ref={mainContainerRef}>
      <DefaultButton
        onClick={() => setSelected(!selected)}
        style={{ width: '100%', opacity: !selectedFromHere ? 0.5 : 1 }}
        textStyle={textStyle}
      >
        {selectedFromHere.length ? (
          <>
            {selectedFromHere.map((selectedEnchant, i) => (
              <>
                {enchantTranslations[selectedEnchant]}
                {!selected &&
                  (enchantsWithMaxLvl[selectedEnchant] > 1
                    ? ` ${selectedEnchants[selectedEnchant as EnchantsEnum]} `
                    : '')}
                {selectedFromHere.length > 1 && i < selectedFromHere.length - 1
                  ? ' + '
                  : ''}
              </>
            ))}
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

            if (Array.isArray(enchant)) {
              const minorEnchantsWithoutArray = enchants.filter(
                item => !Array.isArray(item),
              )

              return (
                <SecondMinorEnchants
                  key="SecondMinorEnchants"
                  enchants={enchant}
                  selectedEnchants={selectedEnchants}
                  minorEnchants={minorEnchantsWithoutArray as EnchantsEnum[]}
                  setSelectedMinorEnchantsToggle={setSelectedMinorEnchantsToggle}
                  setEnchantLvl={setEnchantLvl}
                  onClick={() => {
                    if (!secondMinorEnchants.length) setSecondMinorEnchants(enchant)
                  }}
                />
              )
            }

            return (
              <DefaultButtonWrapper key={enchant}>
                <DefaultButton
                  key={enchant}
                  onClick={() => {
                    if (secondMinorEnchants.length) {
                      setSelectedMinorEnchantsToggle(enchant, secondMinorEnchants)
                      setSecondMinorEnchants([])

                      return
                    }

                    setSelectedMinorEnchantsToggle(
                      enchant,
                      selectedFromHere[0] as EnchantsEnum | undefined,
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
                      if (secondMinorEnchants.length) {
                        setSelectedMinorEnchantsToggle(enchant, secondMinorEnchants)
                        setSecondMinorEnchants([])

                        return
                      }

                      if (!selectedFromHere) {
                        setSelectedMinorEnchantsToggle(enchant)

                        return
                      }

                      if (selectedFromHere && isSelectedEnchant) {
                        setEnchantLvl(enchant)

                        return
                      }

                      setSelectedMinorEnchantsToggle(
                        enchant,
                        selectedFromHere[0] as EnchantsEnum | undefined,
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
