import { FETCH_URL_IMG } from 'src/constants'

import ButtonModalClose from 'src/components/ButtonModalClose'
import DefaultButton from 'src/components/DefaultButton'
import ItemCard from 'src/components/ItemCard'
import ItemGlow from 'src/components/ItemGlow'
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

  const { item, realname, price, isByeFragment = true } = data

  const imageUrl = `${FETCH_URL_IMG}/${item.type.slice(0, 2)}/${item.type}.png`

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
                backgroundImage: `url(${imageUrl})`,
              }}
            />
            {item.amount > 1 && <ItemAmount>{item.amount}</ItemAmount>}
            {item.enchants && (
              <ItemGlow containerSize={200} itemSize={128} imageUrl={imageUrl} />
            )}
          </IconSlot>

          <MoneyTable style={{ paddingRight: 50 }} anotherMoney={price} />
        </div>
        <ItemCard
          description={item.description || item.enchants}
          title={item.display_name}
          style={{ alignContent: 'center' }}
        />

        {isByeFragment && (
          <>
            <DefaultButton
              disabled={price > userMoney}
              style={{ width: '100%', margin: '0px auto' }}
            >
              {userMoney > price ? 'Купити' : 'Недостатньо коштів'}
            </DefaultButton>

            <ItemOwner>Власник лоту: {realname}</ItemOwner>
          </>
        )}
      </Container>
    </SettingsModalsLayout>
  )
}

export default ModalByeLot
