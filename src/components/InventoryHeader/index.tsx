import { TfiReload } from 'react-icons/tfi'

import { Container, TfiReloadWrapper } from 'src/components/InventoryHeader/styles'
import type { InventoryHeaderProps } from 'src/components/InventoryHeader/types'

const InventoryHeader = ({
  isLoadingGetInventory,
  refetch,
  putItemsFromInventory,
  children,
}: InventoryHeaderProps): JSX.Element => {
  return (
    <Container>
      <h1>
        Інвентар
        <TfiReloadWrapper
          disabled={isLoadingGetInventory}
          style={{ opacity: isLoadingGetInventory ? 0.5 : 1 }}
          onClick={() => refetch()}
        >
          <TfiReload size={30} />
        </TfiReloadWrapper>
      </h1>
      {children}
      {putItemsFromInventory && (
        <button
          type="button"
          disabled={isLoadingGetInventory}
          style={{ opacity: isLoadingGetInventory ? 0.5 : 1 }}
          onClick={() => putItemsFromInventory()}
        >
          Забрати
        </button>
      )}
    </Container>
  )
}

export default InventoryHeader
