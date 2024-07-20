import LiqPay from 'src/features/liqPay'
import {
  Breeze,
  Cloud1,
  Cloud2,
  Cloud3,
  Container,
  ContainerWrapper,
  Info,
  StyledRuleCategory,
} from 'src/features/Modals/ModalPay/styles'
import { useModalPay } from 'src/features/Modals/ModalPay/useModalPay'
import SettingsModalsLayout from 'src/features/Modals/SettingsModalsLayout'
import type { ModalDialogProps } from 'src/features/Modals/types'

const ModalPay = ({
  isOpen,
  closeModal,
  handleContainerClick,
}: ModalDialogProps): JSX.Element => {
  const { category, rules } = useModalPay()

  return (
    <SettingsModalsLayout
      isOpen={isOpen}
      closeModal={closeModal}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.90)' }}
    >
      <ContainerWrapper onClick={handleContainerClick}>
        <Breeze width="220" src="/assets/the_breeze.png" />
        <Cloud1 width="120" src="/assets/cloud_1.png" />
        <Cloud2 width="150" src="/assets/cloud_2.png" />
        <Cloud3 width="130" src="/assets/cloud_3.png" />

        <Container className="hidden_scroll-y">
          <StyledRuleCategory
            category={category}
            rules={rules}
            categoryNum={1}
            style={{ paddingLeft: 30 }}
          />
          <Info>
            <h1>Про оплату:</h1>
            <p>
              Щоб купити прохідку, вам потрібно оплатити її, і вказати свій нікнейм!
            </p>
            <p>Після покупки, ви одразу можете заходити на свій аккаунт.</p>
            <p>Хорошої гри!</p>
          </Info>

          <LiqPay />
        </Container>
      </ContainerWrapper>
    </SettingsModalsLayout>
  )
}

export default ModalPay
