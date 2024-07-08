import { CategoryEnum } from 'src/constants'

import ButtonModalClose from 'src/components/ButtonModalClose'
import DefaultButton from 'src/components/DefaultButton'
import ItemList from 'src/components/ItemList'
import ItemSlotIcon from 'src/components/ItemSlotIcon'
import MoneyTable from 'src/components/MoneyTable'

import {
  Container,
  ItemOwner,
  ItemSlotWrapper,
  StyledItemHoverDescription,
  StyledMoneyTable,
} from 'src/features/Modals/ModalLot/styles'
import type { ModalLotProps } from 'src/features/Modals/ModalLot/types'
import { useModalLot } from 'src/features/Modals/ModalLot/useModalLot'
import SettingsModalsLayout from 'src/features/Modals/SettingsModalsLayout'

const ModalLot = ({
  isOpen,
  closeModal,
  data,
  handleContainerClick,
}: ModalLotProps): JSX.Element => {
  const {
    item,
    username,
    shulker,
    price,
    isDeleteLot = true,
    id,
    userMoney,
    afterSubmit,
  } = data

  const lotElement = (item || shulker)!
  const isShulker = lotElement.categories.includes(CategoryEnum.SHULKERS)

  const { toogleLot, isLoading, dataShulkerItems, isLoadingShulkerItems } =
    useModalLot({
      isDeleteLot,
      afterSubmit,
      isShulker,
      shulkerId: lotElement.id,
    })

  return (
    <SettingsModalsLayout
      isOpen={isOpen}
      closeModal={closeModal}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
    >
      <ButtonModalClose onClose={closeModal} />
      <Container onClick={handleContainerClick}>
        {isShulker && <StyledMoneyTable money={price} />}
        {isShulker ? (
          <ItemList
            items={dataShulkerItems}
            isLoading={isLoadingShulkerItems}
            isNeedAreaSelect={false}
            itemSlotIconProps={{ containerSize: 104, itemSize: 64 }}
          />
        ) : (
          <>
            <ItemSlotWrapper>
              <ItemSlotIcon
                didShowDescription={false}
                containerSize={200}
                itemSize={128}
                fontSize={40}
                {...lotElement}
              />

              <MoneyTable style={{ paddingRight: 50 }} money={price} />
            </ItemSlotWrapper>
            <StyledItemHoverDescription
              durability={lotElement.durability}
              description={lotElement.description || lotElement.enchants}
              title={lotElement.display_name}
              isVisible={false}
              style={{ alignContent: 'center' }}
            />
          </>
        )}

        <DefaultButton
          disabled={isDeleteLot ? isLoading : price > userMoney || isLoading}
          isLoading={isLoading}
          onClick={() => toogleLot(id)}
          style={{
            width: isShulker ? 500 : '100%',
            margin: isShulker ? '0px auto' : '0px',
          }}
        >
          {isDeleteLot
            ? 'Видалити'
            : userMoney >= price
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
