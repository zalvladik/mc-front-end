import { FETCH_URL_IMG } from 'src/constants'

import ItemCard from 'src/components/ItemCard'
import ItemGlow from 'src/components/ItemGlow'
import {
  ItemAmount,
  ItemIcon,
  ItemSlotIconContainer,
} from 'src/components/ItemSlotIcon/styles'
import type { ItemSlotIconProps } from 'src/components/ItemSlotIcon/types'

const ItemSlotIcon = ({
  id,
  amount,
  type,
  display_name,
  description,
  enchants,
  style,
  containerSize,
  itemSize,
  fontSize = 25,
  onClick,
}: ItemSlotIconProps): JSX.Element => {
  const imgUrl = `${FETCH_URL_IMG}/${type.slice(0, 2)}/${type}.png`

  return (
    <ItemSlotIconContainer
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

      {(description || enchants) && (
        <ItemCard description={description ?? enchants} title={display_name} />
      )}
    </ItemSlotIconContainer>
  )
}

export default ItemSlotIcon
