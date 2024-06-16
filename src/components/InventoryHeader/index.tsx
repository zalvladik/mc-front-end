import DefaultButton from 'src/components/DefaultButton'
import {
  Container,
  InventoryHeaderTitle,
} from 'src/components/InventoryHeader/styles'
import type { InventoryHeaderProps } from 'src/components/InventoryHeader/types'
import ReloadButtton from 'src/components/ReloadButton'

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
  const isCanPress = isLoading ?? false

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
        <DefaultButton
          style={{ width: 200 }}
          disabled={isCanPress || Boolean(!itemsLength)}
          onClick={() => {
            submitButton()
          }}
        >
          {buttonText}
        </DefaultButton>
      )}
    </Container>
  )
}

export default InventoryHeader
