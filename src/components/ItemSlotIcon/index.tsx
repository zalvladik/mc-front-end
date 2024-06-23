import { FETCH_URL_IMG } from 'src/constants'

import ItemGlow from 'src/components/ItemGlow'
import {
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
    containerSize,
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
    </ItemSlotIconContainer>
  )
}

export default ItemSlotIcon
