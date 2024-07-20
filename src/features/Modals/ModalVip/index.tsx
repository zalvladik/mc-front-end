import { vipPrice } from 'src/constants'
import { VipEnum } from 'src/types'

import ButtonModalClose from 'src/components/ButtonModalClose'
import DefaultButton from 'src/components/DefaultButton'
import InformationButton from 'src/components/InformationButton'

import {
  Container,
  DisabledVipType,
  VipListContainer,
} from 'src/features/Modals/ModalVip/styles'
import type { ModalVipProps } from 'src/features/Modals/ModalVip/types'
import { useModalVip } from 'src/features/Modals/ModalVip/useModalVip'
import SettingsModalsLayout from 'src/features/Modals/SettingsModalsLayout'

const ModalVip = ({
  isOpen,
  closeModal,
  handleContainerClick,
  data,
}: ModalVipProps): JSX.Element => {
  const { user } = data

  const { byeVip, showInfo, selectedVipType, setSelectedVipType } = useModalVip()

  return (
    <SettingsModalsLayout
      isOpen={isOpen}
      closeModal={closeModal}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
    >
      <ButtonModalClose onClose={closeModal} />
      <Container onClick={handleContainerClick}>
        <VipListContainer>
          {Object.values(VipEnum).map((vipType: VipEnum) => {
            const isDisalbed = vipPrice[user.vip as VipEnum] >= vipPrice[vipType]
            const isSelected = selectedVipType === vipType

            return (
              <div
                key={vipType}
                style={{
                  opacity: isDisalbed ? 0.3 : isSelected ? 1 : 0.5,
                  pointerEvents: isDisalbed ? 'none' : 'auto',
                }}
                onClick={() => {
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
            )
          })}
        </VipListContainer>
        <DefaultButton
          style={{ width: 400, margin: '0px auto' }}
          onClick={() => {
            byeVip()
          }}
        >
          Купити
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
