import { Container, Description } from 'src/components/HoverDescription/styles'
import type { HoverDescriptionProps } from 'src/components/HoverDescription/types'

const HoverDescription = ({ description }: HoverDescriptionProps): JSX.Element => {
  return (
    <Container className="HoverDescription">
      <Description>
        {description.map((item, i) => (
          <li
            style={{
              visibility: item === 'null' ? 'hidden' : 'visible',
            }}
            key={i}
          >
            {item}
          </li>
        ))}
      </Description>
    </Container>
  )
}

export default HoverDescription
