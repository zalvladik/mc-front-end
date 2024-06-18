import { FETCH_URL_IMG } from 'src/constants'

import ButtonModalClose from 'src/components/ButtonModalClose'
import DefaultButton from 'src/components/DefaultButton'
import ItemCard from 'src/components/ItemCard'
import MoneyTable from 'src/components/MoneyTable'

import {
  Container,
  IconSlot,
  ItemAmount,
  ItemIcon,
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
        <div>
          <IconSlot>
            <ItemIcon
              style={{
                backgroundImage: `url(${FETCH_URL_IMG}/${data.item.type.slice(0, 2)}/${data.item.type}.png)`,
              }}
            />
            {data.item.amount > 1 && <ItemAmount>{data.item.amount}</ItemAmount>}
          </IconSlot>

          <MoneyTable style={{ paddingRight: 50 }} anotherMoney={data.price} />
        </div>
        <ItemCard
          description={data.item.description ?? []}
          title={data.item.display_name}
          style={{ alignContent: 'center' }}
        />

        <DefaultButton
          disabled={data.price > userMoney}
          style={{ width: '100%', margin: '0px auto' }}
        >
          {userMoney > data.price ? 'Купити' : 'Недостатньо коштів'}
        </DefaultButton>

        <ItemOwner>Власник лоту: {data.realname}</ItemOwner>
      </Container>
    </SettingsModalsLayout>
  )
}

export default ModalByeLot
