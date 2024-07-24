import {
  ITEMS_COUNT,
  LOTS_COUNT,
  SHULKERS_COUNT,
  vipMultipliers,
  vipPrice,
} from 'src/constants'
import type { VipEnum } from 'src/types'

import ButtonModalClose from 'src/components/ButtonModalClose'
import DefaultButton from 'src/components/DefaultButton'
import InformationButton from 'src/components/InformationButton'

import {
  Container,
  DisabledVipType,
  VipInfo,
  VipInfoListContainer,
  VipInfoTitle,
} from 'src/features/Modals/ModalVip/styles'
import type { ModalVipProps } from 'src/features/Modals/ModalVip/types'
import { useModalVip } from 'src/features/Modals/ModalVip/useModalVip'
import SettingsModalsLayout from 'src/features/Modals/SettingsModalsLayout'

const ModalVip = ({
  isOpen,
  closeModal,
  handleContainerClick,
}: ModalVipProps): JSX.Element => {
  const {
    toogleVip,
    showInfo,
    selectedVipType,
    setSelectedVipType,
    isLoading,
    buttonText,
    user,
  } = useModalVip()

  return (
    <SettingsModalsLayout
      isOpen={isOpen}
      closeModal={closeModal}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
    >
      <ButtonModalClose onClose={closeModal} />
      <Container onClick={handleContainerClick}>
        <h1>Покупка VIP</h1>
        <VipInfoListContainer>
          <VipInfoTitle key="vipInfoTitle">
            <div>Ціна VIP :</div>
            <div>Предметів :</div>
            <div>Шалкерів :</div>
            <div>Лотів :</div>
          </VipInfoTitle>
          {Object.entries(vipPrice).map(([key, price]) => {
            const vipType = key as VipEnum

            const isDisalbed = vipPrice[user.vip as VipEnum] >= vipPrice[vipType]
            const isSelected = selectedVipType === vipType

            return (
              <VipInfo
                key={key}
                style={{
                  opacity: isDisalbed || isLoading ? 0.3 : isSelected ? 1 : 0.5,
                  pointerEvents: isDisalbed || isLoading ? 'none' : 'auto',
                  textAlign: 'center',
                }}
              >
                <div>{price}</div>
                <div>{ITEMS_COUNT * vipMultipliers[vipType]}</div>
                <div>{SHULKERS_COUNT * vipMultipliers[vipType]}</div>
                <div>{LOTS_COUNT * vipMultipliers[vipType]}</div>
                <div
                  style={{
                    opacity: isDisalbed ? 0.8 : isSelected ? 1 : 0.6,
                    pointerEvents: isDisalbed ? 'none' : 'auto',
                  }}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedVipType(undefined)

                      return
                    }

                    setSelectedVipType(vipType)
                  }}
                >
                  <div
                    style={{
                      backgroundImage: `url(/assets/items_for_ui/${vipType}_block.webp)`,
                    }}
                  />
                  {isDisalbed && <DisabledVipType />}
                </div>
              </VipInfo>
            )
          })}
        </VipInfoListContainer>

        <DefaultButton
          disabled={
            !selectedVipType ||
            vipPrice[selectedVipType] > user.money ||
            selectedVipType === user.vip ||
            isLoading
          }
          isLoading={isLoading}
          style={{ width: 400, margin: '0px auto' }}
          onClick={() => {
            toogleVip()
          }}
        >
          {buttonText()}
        </DefaultButton>

        <InformationButton
          onClick={() => {
            showInfo()
          }}
          style={{ left: 0, bottom: 0 }}
        />
      </Container>
    </SettingsModalsLayout>
  )
}

export default ModalVip
