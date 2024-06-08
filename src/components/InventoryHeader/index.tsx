import { TfiReload } from 'react-icons/tfi'

import HoverDescription from 'src/components/HoverDescription'
import { Container, TfiReloadWrapper } from 'src/components/InventoryHeader/styles'
import type { InventoryHeaderProps } from 'src/components/InventoryHeader/types'
import SimpleButton from 'src/components/SimpleButton'

const InventoryHeader = ({
  isLoading,
  refetch,
  submitButton,
  buttonText,
  children,
  title,
  itemsLength,
}: InventoryHeaderProps): JSX.Element => {
  const isCanPress = isLoading || !itemsLength

  return (
    <Container>
      <h1>
        {title}
        {refetch && (
          <TfiReloadWrapper
            disabled={isLoading}
            style={{ opacity: isLoading ? 0.7 : 1 }}
            onClick={() => refetch()}
          >
            <TfiReload size={25} />
            <HoverDescription
              style={{ translate: '-50% -215%', fontSize: 15 }}
              description={['Обновити інвентар']}
            />
          </TfiReloadWrapper>
        )}
      </h1>
      {children}
      <SimpleButton
        type="button"
        style={{ width: 200, opacity: isCanPress ? 0.7 : 1 }}
        onClick={() => {
          submitButton()
        }}
      >
        {buttonText}
      </SimpleButton>
    </Container>
  )
}

export default InventoryHeader
