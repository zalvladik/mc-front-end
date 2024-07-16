import { enchantsWithMaxLvl, enchantTranslations } from 'src/constants'
import type { EnchantsEnum } from 'src/types'
import type { CSSProperties } from 'styled-components'

import { Container } from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants/SecondMinorEnchants/styles'
import type { SecondMinorEnchantsProps } from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants/SecondMinorEnchants/types'
import { DefaultButtonWrapper } from 'src/components/Auction/AuctionEnchantFinder/styles'
import DefaultButton from 'src/components/DefaultButton'

const SecondMinorEnchants = ({
  enchants,
  selectedEnchants = {},
  minorEnchants,
  setSelectedMinorEnchantsToggle,
  setEnchantLvl,
  ...props
}: SecondMinorEnchantsProps): JSX.Element => {
  const selectedEnchantsFromHere = Object.keys(selectedEnchants).filter(enchant =>
    enchants.includes(enchant as EnchantsEnum),
  )

  const textStyle: CSSProperties = {
    color: '#ececec',
    fontSize: 20,
  }

  return (
    <Container {...props}>
      {enchants.map(enchant => {
        const isSelectedEnchant = selectedEnchants[enchant as EnchantsEnum]

        return (
          <DefaultButtonWrapper key={enchant}>
            <DefaultButton
              key={enchant}
              onClick={() => {
                if (!selectedEnchantsFromHere.includes(enchant)) {
                  setSelectedMinorEnchantsToggle(enchant, minorEnchants)

                  return
                }

                setSelectedMinorEnchantsToggle(enchant, enchant)
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
                  if (!selectedEnchantsFromHere.includes(enchant)) {
                    setSelectedMinorEnchantsToggle(enchant, minorEnchants)

                    return
                  }

                  setEnchantLvl(enchant)
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
    </Container>
  )
}

export default SecondMinorEnchants
