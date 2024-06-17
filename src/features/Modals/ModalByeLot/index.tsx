import { FETCH_URL_IMG } from 'src/constants'

import ButtonModalClose from 'src/components/ButtonModalClose'
import DefaultButton from 'src/components/DefaultButton'
import MoneyTable from 'src/components/MoneyTable'

import {
  Container,
  ItemAmount,
  ItemContainer,
  ItemDescription,
  ItemIcon,
  ItemIconContainer,
  ItemOwner,
} from 'src/features/Modals/ModalByeLot/styles'
import type { ModalByeLotProps } from 'src/features/Modals/ModalByeLot/types'
import { useModalByeLot } from 'src/features/Modals/ModalByeLot/useModalByeLot'
import SettingsModalsLayout from 'src/features/Modals/SettingsModalsLayout'

const ModalByeLot = ({
  isOpen,
  closeModal,
  data,
}: ModalByeLotProps): JSX.Element => {
  const { onClose, userMoney } = useModalByeLot()

  return (
    <SettingsModalsLayout
      isOpen={isOpen}
      closeModal={closeModal}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
    >
      <ButtonModalClose onClose={onClose} />
      <Container>
        <ItemContainer>
          <ItemIconContainer>
            <ItemIcon
              style={{
                backgroundImage: `url(${FETCH_URL_IMG}/${data.item.type.slice(0, 2)}/${data.item.type}.png)`,
              }}
            />
            {data.item.amount > 1 && <ItemAmount>{data.item.amount}</ItemAmount>}
          </ItemIconContainer>
          <ItemDescription />
        </ItemContainer>

        <ItemOwner>Власник лоту: {data.realname}</ItemOwner>

        <MoneyTable moneyTitle="Ціна товару" anotherMoney={data.price} />

        <DefaultButton disabled={data.price > userMoney} style={{ width: 300 }}>
          Купити
        </DefaultButton>
      </Container>
    </SettingsModalsLayout>
  )
}

export default ModalByeLot
