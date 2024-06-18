import { VscLoading } from 'react-icons/vsc'

import { ButtonText, Container } from 'src/components/DefaultButton/styles'
import type { DefaultButtonProps } from 'src/components/DefaultButton/types'

const DefaultButton = ({
  children,
  disabled,
  isLoading,
  isVisible = true,
  style,
  ...props
}: DefaultButtonProps): JSX.Element => {
  return (
    <Container
      style={{
        opacity: disabled ? 0.5 : isVisible ? 1 : 0,
        pointerEvents: disabled ? 'none' : 'auto',
        ...style,
      }}
      {...props}
    >
      <div className="button_left" />
      <div className="button_center" />
      <div className="button_right" />

      <ButtonText>{isLoading ? <VscLoading size={30} /> : children}</ButtonText>
    </Container>
  )
}

export default DefaultButton
