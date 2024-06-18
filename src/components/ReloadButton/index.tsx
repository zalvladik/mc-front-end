import { TfiReload } from 'react-icons/tfi'

import HoverDescription from 'src/components/HoverDescription'
import { Container } from 'src/components/ReloadButton/styles'
import type { ReloadButonProps } from 'src/components/ReloadButton/types'

const ReloadButtton = ({
  refetch,
  isLoading,
  message,
  ...props
}: ReloadButonProps): JSX.Element => {
  return (
    <Container isLoading={isLoading} onClick={() => refetch()} {...props}>
      <TfiReload size={24} />
      <HoverDescription
        style={{ translate: '-50% -215%', fontSize: 15 }}
        description={[message]}
      />
    </Container>
  )
}

export default ReloadButtton
