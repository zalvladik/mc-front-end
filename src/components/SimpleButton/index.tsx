import { ButtonText, Container } from 'src/components/SimpleButton/styles'
import type { SimpleButtonProps } from 'src/components/SimpleButton/types'

const SimpleButton = ({
  children,
  disabled,
  style,
  ...props
}: SimpleButtonProps): JSX.Element => {
  return (
    <Container
      style={{
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
        ...style,
      }}
      {...props}
    >
      <div className="button_left" />
      <div className="button_center" />
      <div className="button_right" />
      <ButtonText>{children}</ButtonText>
    </Container>
  )
}

export default SimpleButton
