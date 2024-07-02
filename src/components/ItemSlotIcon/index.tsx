import { FETCH_URL_IMG } from 'src/constants'

import ItemGlow from 'src/components/ItemGlow'
import {
  ItemAmount,
  ItemIcon,
  ItemSlotIconContainer,
} from 'src/components/ItemSlotIcon/styles'
import type { ItemSlotIconProps } from 'src/components/ItemSlotIcon/types'

import { useItemSlotIcon } from './useItemSlotIcon'

import Durability from 'src/components/Durability'

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

  const imageUrl = `${FETCH_URL_IMG}/${type.slice(0, 2)}/${type}.png`

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
          backgroundImage: `url(${imageUrl}`,
          width: itemSize,
          height: itemSize,
        }}
      />
      {amount > 1 && <ItemAmount style={{ fontSize }}>{amount}</ItemAmount>}

      {enchants && (
        <ItemGlow
          containerSize={containerSize}
          itemSize={itemSize}
          imageUrl={imageUrl}
        />
      )}

      {durability && (
        <Durability durability={durability} containerSize={containerSize} />
      )}
    </ItemSlotIconContainer>
  )
}

export default ItemSlotIcon
