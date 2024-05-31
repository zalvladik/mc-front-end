import type { AdvancementCardProps } from 'src/components/AdvancementCard/types'

import TitleDescription from 'src/components/TitleDescription'

import { Container, Text } from 'src/components/AdvancementCard/styles'

const AdvancementCard = ({
  text,
  title,
  img,
}: AdvancementCardProps): JSX.Element => {
  return (
    <Container>
      <TitleDescription title={title} leftIcon={img} />
      <Text>{text}</Text>
    </Container>
  )
}

export default AdvancementCard
