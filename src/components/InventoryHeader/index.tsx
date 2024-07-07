import DefaultButton from 'src/components/DefaultButton'
import {
  Container,
  InventoryHeaderTitle,
} from 'src/components/InventoryHeader/styles'
import type { InventoryHeaderProps } from 'src/components/InventoryHeader/types'

const InventoryHeader = ({
  isLoading,
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
      </InventoryHeaderTitle>
      {children}
      {submitButton && (
        <DefaultButton
          isLoading={isLoading!}
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
