import { ComponentIds } from 'src/constants'
import { useCustomSpring } from 'src/hooks/useCustomSpring'

import { CardContainer } from 'src/components/Social/styles'
import type { SocialCardProps } from 'src/components/Social/types'

const SocialCard = ({ title, img, href, alt }: SocialCardProps): JSX.Element => {
  const propsString = useCustomSpring(ComponentIds.SOCIAL + title)

  return (
    <CardContainer
      target="_blank"
      href={href}
      style={propsString}
      aria-label={alt}
      id={ComponentIds.SOCIAL + title}
    >
      <img src={img} width="80px" alt={alt} />
    </CardContainer>
  )
}

export default SocialCard
