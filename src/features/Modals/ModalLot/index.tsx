import { FETCH_URL_IMG } from 'src/constants'

import ButtonModalClose from 'src/components/ButtonModalClose'
import DefaultButton from 'src/components/DefaultButton'
import ItemGlow from 'src/components/ItemGlow'
import MoneyTable from 'src/components/MoneyTable'

import {
  Container,
  IconSlot,
  ItemAmount,
  ItemIcon,
  ItemOwner,
  StyledItemHoverDescription,
} from 'src/features/Modals/ModalLot/styles'
import type { ModalLotProps } from 'src/features/Modals/ModalLot/types'
import { useModalLot } from 'src/features/Modals/ModalLot/useModalLot'
import SettingsModalsLayout from 'src/features/Modals/SettingsModalsLayout'

const ModalLot = ({ isOpen, closeModal, data }: ModalLotProps): JSX.Element => {
  const {
    item,
    username,
    price,
    isDeleteLot = true,
    id,
    userMoney,
    updateUserMoney,
  } = data

  const { onClose, toogleLot, isLoading } = useModalLot({
    isDeleteLot,
    currentMoney: userMoney,
    price,
    updateUserMoney,
  })

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

          <MoneyTable style={{ paddingRight: 50 }} money={price} />
        </div>
        <StyledItemHoverDescription
          durability={item.durability}
          description={item.description || item.enchants}
          title={item.display_name}
          isVisible={false}
          style={{ alignContent: 'center' }}
        />

        <DefaultButton
          disabled={isDeleteLot ? isLoading : price > userMoney || isLoading}
          isLoading={isLoading}
          style={{ width: '100%', margin: '0px auto' }}
          onClick={() => toogleLot(id)}
        >
          {isDeleteLot
            ? 'Видалити'
            : userMoney > price
              ? 'Купити'
              : 'Недостатньо коштів'}
        </DefaultButton>

        <ItemOwner>
          Власник лоту: <span>{username}</span>
        </ItemOwner>
      </Container>
    </SettingsModalsLayout>
  )
}

export default ModalLot
