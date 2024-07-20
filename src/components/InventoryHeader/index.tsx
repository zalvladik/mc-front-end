import { getVipParams } from 'src/helpers/getVipParams'

import DefaultButton from 'src/components/DefaultButton'
import {
  Container,
  InventoryHeaderTitle,
} from 'src/components/InventoryHeader/styles'
import type { InventoryHeaderProps } from 'src/components/InventoryHeader/types'
import { useInventoryHeader } from 'src/components/InventoryHeader/useInventoryHeader'

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

  const { countItems, user } = useInventoryHeader()

  const { vipItemCount } = getVipParams(user.vip)

  return (
    <Container {...props}>
      <InventoryHeaderTitle>
        <p>{title} </p>
        <p>{title === 'Інвентар' ? `${countItems}/${vipItemCount}` : ''}</p>
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
