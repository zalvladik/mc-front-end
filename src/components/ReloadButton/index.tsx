import { TfiReload } from 'react-icons/tfi'

import HoverDescription from 'src/components/HoverDescription'
import { Container } from 'src/components/ReloadButton/styles'
import type { ReloadButonProps } from 'src/components/ReloadButton/types'

const ReloadButtton = ({
  refetch,
  isLoading,
  ...props
}: ReloadButonProps): JSX.Element => {
  return (
    <Container
      disabled={isLoading}
      style={{ opacity: isLoading ? 0.7 : 1 }}
      onClick={() => refetch()}
      {...props}
    >
      <TfiReload size={24} />
      <HoverDescription
        style={{ translate: '-50% -215%', fontSize: 15 }}
        description={['Обновити інвентар']}
      />
    </Container>
  )
}

export default ReloadButtton