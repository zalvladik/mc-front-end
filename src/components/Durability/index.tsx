import { DurabilityProps } from 'src/components/Durability/types'

import { Container } from 'src/components/Durability/styles'
import { durabilityColor } from 'src/helpers/durabilityColor'

const Durability = ({ durability, containerSize }: DurabilityProps): JSX.Element => {
  const [current, max] = durability.split(' / ')

  if (current === max) return <></>

  const currentInterest = ((Number(current) / Number(max)) * 100).toFixed(0)

  const durabilityWidth = containerSize * 0.68

  const width = Number(
    ((Number(currentInterest) / 100) * durabilityWidth).toFixed(1),
  )

  const left = (containerSize * 0.32) / 2

  const height = containerSize * 0.04

  const backgroundColor = durabilityColor(Number(currentInterest))

  return (
    <Container
      style={{
        width: durabilityWidth,
        left,
        height,
      }}
    >
      <div style={{ width: durabilityWidth, height }}>
        <div
          style={{
            backgroundColor,
            width: width,
            height,
          }}
        />
        <div
          style={{
            backgroundColor: 'black',
            width: durabilityWidth - width,
            height,
          }}
        />
      </div>
    </Container>
  )
}

export default Durability
