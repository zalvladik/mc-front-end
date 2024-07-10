import {
  MinorEnchantsContainer,
  OverflowMinorEnchants,
} from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants/styles'
import type { MinorEnchantsProps } from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants/types'
import { useMinorEnchants } from 'src/components/Auction/AuctionEnchantFinder/MinorEnchants/useMinorEnchants'
import DefaultButton from 'src/components/DefaultButton'

const MinorEnchants = ({
  item,
  textStyle,
  selectedEnchants,
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

  const isSelectedFromHere = selectedEnchants.find(enchant => item.includes(enchant))

  return (
    <div {...props} ref={mainContainerRef}>
      <DefaultButton
        onClick={() => setSelected(!selected)}
        style={{ width: '100%', opacity: !isSelectedFromHere ? 0.5 : 1 }}
        textStyle={textStyle}
      >
        {isSelectedFromHere ? enchantTranslationsTypes[isSelectedFromHere] : ''}
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
                setSelectedMinorEnchantsToggle(item, isSelectedFromHere)
              }}
              style={{
                width: '100%',
                opacity: !selectedEnchants.includes(item) ? 0.5 : 1,
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
