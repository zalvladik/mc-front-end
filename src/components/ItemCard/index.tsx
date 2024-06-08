import { Container, Description, Title } from 'src/components/ItemCard/styles'
import type { IsJsonItemT, ItemCardProps } from 'src/components/ItemCard/types'

const ItemCard = ({ description, title }: ItemCardProps): JSX.Element => {
  return (
    <Container className="ItemCard">
      <Title style={{ borderBottom: description?.length ? '0.5px solid gray' : '' }}>
        <p>{title}</p>
      </Title>

      {description && (
        <Description>
          {description.map((item, i) => {
            if (item.startsWith('{') && item.endsWith('}')) {
              const correctedJsonString = item.replace(/_/g, ',')

              const itemJson: IsJsonItemT = JSON.parse(correctedJsonString)

              return (
                <li key={i}>
                  <p
                    style={{
                      color: itemJson.color,
                      paddingLeft: itemJson.backdown,
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
    </Container>
  )
}

export default ItemCard
