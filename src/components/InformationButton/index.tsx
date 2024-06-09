import { IoInformationCircleOutline } from 'react-icons/io5'

import { Container } from 'src/components/InformationButton/styles'
import type { InformationButtonProps } from 'src/components/InformationButton/types'

const InformationButton = ({
  size = 30,
  ...props
}: InformationButtonProps): JSX.Element => {
  return (
    <Container {...props}>
      <IoInformationCircleOutline size={size} />
    </Container>
  )
}

export default InformationButton
