import { ComponentIds } from 'src/constants'
import { useCustomSpring } from 'src/hooks/useCustomSpring'

import { Container } from 'src/components/MainTitle/styles'
import type { MainTitleProps } from 'src/components/MainTitle/types'

const MainTitle = ({ text, icon, alt }: MainTitleProps): JSX.Element => {
  const springProps = useCustomSpring(ComponentIds.MAIN_TITLE + text)

  return (
    <Container id={ComponentIds.MAIN_TITLE + text} style={springProps}>
      <h1>{text}</h1>
      {icon && <img src={icon} alt={alt} />}
    </Container>
  )
}

export default MainTitle
