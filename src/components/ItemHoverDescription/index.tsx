import {
  Description,
  ItemHoverDescriptionContainer,
  Title,
} from 'src/components/ItemHoverDescription/styles'
import type {
  IsJsonItemT,
  ItemHoverDescriptionProps,
} from 'src/components/ItemHoverDescription/types'

import { useItemHoverDescription } from './useItemHoverDescription'

import {
  EnchantsEnum,
  enchantTranslations,
} from '../Auction/AuctionEnchantFinder/constants'

const ItemHoverDescription = ({
  durability,
  description = [],
  title,
  isVisible,
  topSlotIcon,
  leftSlotIcon,
  heightSlotIcon,
  widthSlotIcon,
  ...props
}: ItemHoverDescriptionProps): JSX.Element => {
  const { itemHoverDescriptionRef } = useItemHoverDescription({
    isVisible,
    topSlotIcon,
    leftSlotIcon,
    heightSlotIcon,
    widthSlotIcon,
  })

  return (
    <ItemHoverDescriptionContainer
      ref={itemHoverDescriptionRef}
      style={{ position: 'fixed' }}
      {...props}
    >
      <Title>
        <p>{title}</p>
      </Title>

      {Boolean(description?.length) && (
        <Description>
          {description!.map((item, i) => {
            if (item.startsWith('{') && item.endsWith('}')) {
              const correctedJsonString = item.replace(/_/g, ',')

              const itemJson: IsJsonItemT = JSON.parse(correctedJsonString)

              return (
                <li key={i}>
                  <p
                    style={{
                      color: itemJson.color,
                      paddingLeft: itemJson.backdown,
                      textShadow: itemJson.textShadow,
                    }}
                  >
                    {itemJson.text}
                  </p>
                </li>
              )
            }

            const isNegativeEnchant =
              enchantTranslations[EnchantsEnum.VANISHING_CURSE] === item ||
              enchantTranslations[EnchantsEnum.BINDING_CURSE] === item

            const color = isNegativeEnchant ? '#aa0e0e' : '#a8a8a8'

            return (
              <li
                style={{
                  visibility: item === 'null' ? 'hidden' : 'visible',
                }}
                key={i}
              >
                <p
                  style={{
                    color,
                    textShadow: '2px 2px 1px rgb(168, 168, 168, 0.4)',
                  }}
                >
                  {item}
                </p>
              </li>
            )
          })}
        </Description>
      )}
      {durability &&
        (() => {
          const [current, max] = durability.split(' / ')

          if (current === max) return

          return (
            <Description>
              <li key="durability">
                <p style={{ color: '#fcfcfc' }}>Міцність: {durability}</p>
              </li>
            </Description>
          )
        })()}
    </ItemHoverDescriptionContainer>
  )
}

export default ItemHoverDescription
