import {
  Container,
  GlowContainer,
  ItemGlowBorder,
  ItemGlower,
} from 'src/components/ItemGlow/styles'
import type { ItemGlowProps } from 'src/components/ItemGlow/types'

const ItemGlow = ({
  imageUrl,
  containerSize,
  itemSize,
}: ItemGlowProps): JSX.Element => {
  return (
    <Container>
      <GlowContainer style={{ width: containerSize, height: containerSize }}>
        <ItemGlower
          maskImageUrl={imageUrl}
          style={{ width: itemSize, height: itemSize }}
        />
        <ItemGlowBorder />
      </GlowContainer>
    </Container>
  )
}

export default ItemGlow
