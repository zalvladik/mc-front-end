import InfoCategory from 'src/components/InfoCategory'

import type { ModalDialogProps } from 'src/features/Modals/types'
import { useModalPay } from 'src/features/Modals/ModalPay/useModalPay'

import {
  Container,
  Info,
  ContainerWrapper,
  ButtonContainer,
  ButtonWrapper,
  CloseButton,
  Breeze,
  Cloud_1,
  Cloud_2,
  Cloud_3,
} from 'src/features/Modals/ModalPay/styles'

import SettingsModalsLayout from 'src/features/Modals/SettingsModalsLayout'

const ModalPay = ({ isOpen, closeModal }: ModalDialogProps): JSX.Element => {
  const { onClose, category, rules } = useModalPay()

  return (
    <SettingsModalsLayout isOpen={isOpen} closeModal={closeModal}>
      <ContainerWrapper>
        <Breeze width="220" src="assets/the_breeze.png" />
        <Cloud_1 width="120" src="assets/cloud_1.png" />
        <Cloud_2 width="150" src="assets/cloud_2.png" />
        <Cloud_3 width="130" src="assets/cloud_3.png" />

        <Container>
          <CloseButton width="30" src="assets/close.svg" onClick={onClose} />

          <InfoCategory category={category} rules={rules} />

          <Info>
            <h1>Про оплату</h1>
            <p>
              Щоб купити прохідку, вам потрібно перейти на банку Monabank та оплатити
              суму прохідки! <br />
            </p>
            <h1>
              На місяць - 50 грн. <br /> Назавжди - 250 грн.
            </h1>
            <p>
              Під платіж, вкажіть Ваш discord, щоб з вами зв'язався Адміністратор!
              Очікуйте відповіді протягом 24-48годин!
            </p>
          </Info>
          <ButtonContainer>
            <ButtonWrapper>
              <a
                target="_blank"
                href="https://send.monobank.ua/jar/UbQzFQ5u7"
                rel="noreferrer"
              >
                Купити прохідку
              </a>
            </ButtonWrapper>
            <ButtonWrapper>
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLScYLIipjEeJG3FLRG-1jtfjYGGahLSLQiYROPfp6ZDK0WOgAQ/viewform"
                rel="noreferrer"
              >
                Денна прохідка
              </a>
            </ButtonWrapper>
          </ButtonContainer>
        </Container>
      </ContainerWrapper>
    </SettingsModalsLayout>
  )
}

export default ModalPay
