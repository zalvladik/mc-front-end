import type { MainTitleProps } from 'src/components/MainTitle/types'

import { Container } from 'src/components/MainTitle/styles'
import { COMPONENT_IDS } from 'src/constants'
import { useCustomSpring } from 'src/hooks/useCustomSpring'

const MainTitle = ({ text, icon, alt }: MainTitleProps): JSX.Element => {
  const springProps = useCustomSpring(COMPONENT_IDS.MAIN_TITLE + text)

  return (
    <Container id={COMPONENT_IDS.MAIN_TITLE + text} style={springProps}>
      <h1>{text}</h1>
      {icon && <img src={icon} alt={alt} />}
    </Container>
  )
}

export default MainTitle
