import { Container } from 'src/components/InventoryHeader/styles'
import type { InventoryHeaderProps } from 'src/components/InventoryHeader/types'
import ReloadButtton from 'src/components/ReloadButton'
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
        {refetch && <ReloadButtton {...{ refetch, isLoading: isCanPress }} />}
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
