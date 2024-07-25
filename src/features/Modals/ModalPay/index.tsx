import DefaultInput from 'src/components/DefaultInput'

import {
  Breeze,
  ByeButton,
  Cloud1,
  Cloud2,
  Cloud3,
  Container,
  ContainerWrapper,
  CreateOrderContainer,
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
  const {
    category,
    rules,
    handleusernameChange,
    username,
    isExistUsername,
    isLoading,
    toUnicode,
  } = useModalPay()

  const url = `https://send.monobank.ua/jar/2GuvBaak2S?a=100&t=uk-land$${toUnicode(username)}`

  const buttonIsDisabled =
    isLoading || Boolean(username.length <= 2) || Boolean(isExistUsername)

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
            <p style={{ fontSize: 24, color: 'whitegray' }}>Ціна: 100₴</p>

            <p>
              Вас автоматично добавить у whitelist сервера.
              <br />
              Якщо виникнуть проблеми то зверніться до адміністрації.
            </p>
            <p style={{ color: 'rgb(213, 11, 58)' }}>
              Не міняйне коментарій до оплати, він потрібен для автоматичного
              добавлення на сервер.
            </p>

            <p>Хорошої гри!</p>
          </Info>

          <CreateOrderContainer>
            <p
              style={{
                opacity: username.length >= 3 ? 1 : 0,
                color: isExistUsername ? 'rgb(213, 11, 58)' : 'rgb(2, 200, 48)',
              }}
            >
              {isExistUsername
                ? 'Гравець з таким ніком уже існує'
                : 'Цей нікнейм вільний'}
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <DefaultInput
                disabled={isLoading}
                type="text"
                style={{
                  fontSize: 18,
                  textAlign: 'center',
                }}
                rightIcon={false}
                value={username}
                onChange={handleusernameChange}
                placeholder="Вкажіть ваш нікнейм"
                required
              />

              <ByeButton
                href={url}
                style={{
                  opacity: buttonIsDisabled ? 0.4 : 1,
                  pointerEvents: buttonIsDisabled ? 'none' : 'auto',
                }}
                target="_blank"
                rel="noreferrer"
              >
                <div>Купити прохідку</div>
              </ByeButton>
            </div>
          </CreateOrderContainer>
        </Container>
      </ContainerWrapper>
    </SettingsModalsLayout>
  )
}

export default ModalPay
