import { FETCH_URL_IMG } from 'src/constants'

import ButtonModalClose from 'src/components/ButtonModalClose'
import MoneyTable from 'src/components/MoneyTable'
import SimpleButton from 'src/components/SimpleButton'

import {
  Container,
  ItemAmount,
  ItemContainer,
  ItemIcon,
  ItemIconContainer,
  ItemOwner,
  MoneyOperationInfo,
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
        </ItemContainer>

        <ItemOwner>Власник лоту: {data.realname}</ItemOwner>

        <MoneyOperationInfo>
          <div>
            <MoneyTable moneyTitle="Кількість валюти" />
          </div>
          <div>
            <MoneyTable moneyTitle="Ціна товару" anotherMoney={data.price} />
          </div>
          <div>
            <MoneyTable
              moneyTitle="Після покупки"
              anotherMoney={userMoney - data.price}
            />
          </div>
        </MoneyOperationInfo>

        <SimpleButton disabled={data.price > userMoney} style={{ width: 300 }}>
          Купити
        </SimpleButton>
      </Container>
    </SettingsModalsLayout>
  )
}

export default ModalByeLot
