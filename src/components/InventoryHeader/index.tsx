import { TfiReload } from 'react-icons/tfi'

import { Container, TfiReloadWrapper } from 'src/components/InventoryHeader/styles'
import type { InventoryHeaderProps } from 'src/components/InventoryHeader/types'

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
          </TfiReloadWrapper>
        )}
      </h1>
      {children}
      <button
        type="button"
        disabled={isCanPress}
        style={{ opacity: isCanPress ? 0.7 : 1 }}
        onClick={() => submitButton()}
      >
        {buttonText}
      </button>
    </Container>
  )
}

export default InventoryHeader
