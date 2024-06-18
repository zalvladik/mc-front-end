import {
  Description,
  ItemCardContainer,
  Title,
} from 'src/components/ItemCard/styles'
import type { IsJsonItemT, ItemCardProps } from 'src/components/ItemCard/types'

const ItemCard = ({
  description = [],
  title,
  ...props
}: ItemCardProps): JSX.Element => {
  return (
    <ItemCardContainer {...props} className="itemCard">
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

            return (
              <li
                style={{
                  visibility: item === 'null' ? 'hidden' : 'visible',
                }}
                key={i}
              >
                <p style={{ color: '#a8a8a8' }}>{item}</p>
              </li>
            )
          })}
        </Description>
      )}
    </ItemCardContainer>
  )
}

export default ItemCard
