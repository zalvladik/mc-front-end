import { COMPONENT_IDS } from 'src/constants'

import type { SocialCardProps } from 'src/components/Social/types'

import { useCustomSpring } from 'src/hooks/useCustomSpring'

import { CardContainer } from 'src/components/Social/styles'

const SocialCard = ({ title, img, href, alt }: SocialCardProps): JSX.Element => {
  const propsString = useCustomSpring(COMPONENT_IDS.SOCIAL + title)

  return (
    <CardContainer
      target="_blank"
      href={href}
      style={propsString}
      aria-label={alt}
      id={COMPONENT_IDS.SOCIAL + title}
    >
      <img src={img} width="80px" alt={alt} />
    </CardContainer>
  )
}

export default SocialCard
