import {
  Container,
  InventoryHeaderTitle,
} from 'src/components/InventoryHeader/styles'
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
  ...props
}: InventoryHeaderProps): JSX.Element => {
  const isCanPress = isLoading || !itemsLength

  return (
    <Container {...props}>
      <InventoryHeaderTitle>
        <p>{title}</p>
        {refetch && (
          <ReloadButtton
            {...{ refetch, isLoading: isCanPress, message: 'Обновити інвентар' }}
          />
        )}
      </InventoryHeaderTitle>
      {children}
      {submitButton && (
        <SimpleButton
          type="button"
          style={{ width: 200, opacity: isCanPress ? 0.7 : 1 }}
          onClick={() => {
            submitButton()
          }}
        >
          {buttonText}
        </SimpleButton>
      )}
    </Container>
  )
}

export default InventoryHeader
