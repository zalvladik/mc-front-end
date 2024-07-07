import ButtonModalClose from 'src/components/ButtonModalClose'
import DefaultButton from 'src/components/DefaultButton'
import ItemSlotIcon from 'src/components/ItemSlotIcon'
import MoneyTable from 'src/components/MoneyTable'

import {
  Container,
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
    afterSubmit,
  } = data

  const { toogleLot, isLoading } = useModalLot({
    isDeleteLot,
    afterSubmit,
  })

  return (
    <SettingsModalsLayout
      isOpen={isOpen}
      closeModal={closeModal}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
    >
      <ButtonModalClose onClose={closeModal} />
      <Container>
        <div>
          <ItemSlotIcon
            didShowDescription={false}
            containerSize={200}
            itemSize={128}
            fontSize={40}
            {...item}
          />

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
