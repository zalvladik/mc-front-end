import DefaultButton from 'src/components/DefaultButton'
import DefaultInput from 'src/components/inputs/DefaultInput'

import {
  Breeze,
  Cloud1,
  Cloud2,
  Cloud3,
  Container,
  ContainerWrapper,
  CreateOrderContainer,
  CustomDescriptionPay,
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
  } = useModalPay()

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
              Щоб купити прохідку, вам потрібно оплатити її, і вказати свій нікнейм в
              описі при поповнені банки!
            </p>

            <p>
              Якщо ви хочете щоб вас автоматично добавили на сервер, добавте
              приставку
              <CustomDescriptionPay style={{ color: 'rgb(2, 200, 48)' }}>
                {' '}
                uk-land$
              </CustomDescriptionPay>
              до свого ніку. <br />
              Щоб це виглядало ось так
              <CustomDescriptionPay style={{ color: 'rgb(2, 200, 48)' }}>
                {' '}
                uk-land$
              </CustomDescriptionPay>
              nickname
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

            <DefaultInput
              disabled={isLoading}
              type="text"
              style={{
                fontSize: 24,
                textAlign: 'center',
              }}
              rightIcon={false}
              value={username}
              onChange={handleusernameChange}
              placeholder="Вкажіть ваш нікнейм"
              required
            />

            <a
              href="//send.monobank.ua/jar/2GuvBaak2S"
              target="_blank"
              rel="noreferrer"
            >
              <DefaultButton
                disabled={
                  isLoading ||
                  Boolean(username.length <= 2) ||
                  Boolean(isExistUsername)
                }
                style={{ width: 420 }}
                isLoading={isLoading}
              >
                Купити прохідку
              </DefaultButton>
            </a>
          </CreateOrderContainer>
        </Container>
      </ContainerWrapper>
    </SettingsModalsLayout>
  )
}

export default ModalPay
