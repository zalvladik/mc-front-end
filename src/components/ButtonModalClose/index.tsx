import { Container, CrossWrapper } from 'src/components/ButtonModalClose/styles'
import type { ButtonModalCloseProps } from 'src/components/ButtonModalClose/types'

const ButtonModalClose = ({ onClose }: ButtonModalCloseProps): JSX.Element => {
  return (
    <Container onClick={() => onClose()}>
      <CrossWrapper>
        <div />
        <div />
      </CrossWrapper>
    </Container>
  )
}

export default ButtonModalClose
