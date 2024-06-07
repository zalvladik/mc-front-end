import { ButtonText, Container } from 'src/components/SimpleButton/styles'
import type { SimpleButtonProps } from 'src/components/SimpleButton/types'

const SimpleButton = ({ children, ...props }: SimpleButtonProps): JSX.Element => {
  return (
    <Container {...props}>
      <div className="button_left" />
      <div className="button_center" />
      <div className="button_right" />
      <ButtonText>{children}</ButtonText>
    </Container>
  )
}

export default SimpleButton
