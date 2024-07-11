import {
  MinorEnchantsContainer,
  OverflowMinorEnchants,
  StyledFaArrowDownShortWide,
} from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants/styles'
import type { MinorEnchantsProps } from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants/types'
import { useMinorEnchants } from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants/useMinorEnchants'
import DefaultButton from 'src/components/DefaultButton'

import type { EnchantsEnum } from '../constants'

const MinorEnchants = ({
  item,
  textStyle,
  selectedEnchants = {},
  setSelectedMinorEnchantsToggle,
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
          {item.map(item => (
            <DefaultButton
              key={item}
              onClick={() => {
                setSelectedMinorEnchantsToggle(
                  item,
                  isSelectedFromHere as EnchantsEnum | undefined,
                )
              }}
              style={{
                width: '100%',
                opacity: !selectedEnchants[item] ? 0.5 : 1,
              }}
              textStyle={textStyle}
            >
              {enchantTranslationsTypes[item]}
            </DefaultButton>
          ))}
        </MinorEnchantsContainer>
      </OverflowMinorEnchants>
    </div>
  )
}

export default MinorEnchants
