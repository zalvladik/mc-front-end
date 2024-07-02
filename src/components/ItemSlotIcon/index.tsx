import { FETCH_URL_IMG } from 'src/constants'

import ItemGlow from 'src/components/ItemGlow'
import {
  Durability,
  ItemAmount,
  ItemIcon,
  ItemSlotIconContainer,
} from 'src/components/ItemSlotIcon/styles'
import type { ItemSlotIconProps } from 'src/components/ItemSlotIcon/types'

import { useItemSlotIcon } from './useItemSlotIcon'

const ItemSlotIcon = ({
  id,
  amount,
  type,
  enchants,
  durability,
  description,
  display_name,
  style,
  containerSize,
  itemSize,
  fontSize = 25,
  onClick,
}: ItemSlotIconProps): JSX.Element => {
  const { itemSlotIconRef } = useItemSlotIcon({
    description: description || enchants,
    display_name,
    durability,
  })

  const imgUrl = `${FETCH_URL_IMG}/${type.slice(0, 2)}/${type}.png`

  return (
    <ItemSlotIconContainer
      ref={itemSlotIconRef}
      id={`${id}`}
      style={{
        ...style,
        width: containerSize,
        height: containerSize,
        backgroundImage: style?.backgroundImage
          ? style.backgroundImage
          : 'url(/assets/items_for_ui/slot.png)',
      }}
      onClick={() => onClick && onClick()}
    >
      <ItemIcon
        style={{
          backgroundImage: `url(${imgUrl}`,
          width: itemSize,
          height: itemSize,
        }}
      />
      {amount > 1 && <ItemAmount style={{ fontSize }}>{amount}</ItemAmount>}

      {enchants && (
        <ItemGlow
          containerSize={containerSize}
          itemSize={itemSize}
          imageUrl={imgUrl}
        />
      )}

      {durability &&
        (() => {
          const [current, max] = durability.split(' / ')

          const currentInterest = ((Number(current) / Number(max)) * 100).toFixed(0)

          const width = (
            (Number(currentInterest) / 100) *
            (containerSize * 0.72)
          ).toFixed(1)

          return <Durability style={{ width: Number(width) }} />
        })()}
    </ItemSlotIconContainer>
  )
}

export default ItemSlotIcon
