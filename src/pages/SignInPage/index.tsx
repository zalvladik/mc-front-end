import type { ChangeEvent } from 'react'
import { Controller } from 'react-hook-form'
import {
  ButtonClose,
  Container,
  CrossWrapper,
  Description,
  ErrorMessage,
  FormContainer,
  FormImage,
  InputWrapper,
  StyledDefaultButton,
} from 'src/pages/SignInPage/styles'
import { useSignInPage } from 'src/pages/SignInPage/useSignInPage'

import InputSignIn from 'src/features/InputSignIn'

const SignInPage = (): JSX.Element => {
  const {
    navigate,
    errors,
    control,
    trigger,
    isFormFilled,
    isLoading,
    handleSubmit,
  } = useSignInPage()

  return (
    <Container>
      <FormImage>
        <ButtonClose onClick={() => navigate('/')}>
          <CrossWrapper>
            <div />
            <div />
          </CrossWrapper>
        </ButtonClose>
        <FormContainer>
          <Controller
            name="realname"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputWrapper>
                <InputSignIn
                  placeholder="Нік"
                  value={value}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    trigger('realname')
                    onChange(event.target.value)
                  }}
                />
                {errors.realname ? (
                  <ErrorMessage>{errors.realname.message}</ErrorMessage>
                ) : null}
              </InputWrapper>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputWrapper>
                <InputSignIn
                  placeholder="Пароль"
                  type="password"
                  value={value}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    trigger('password')
                    onChange(event.target.value)
                  }}
                />
                {errors.password ? (
                  <ErrorMessage>{errors.password?.message}</ErrorMessage>
                ) : null}
              </InputWrapper>
            )}
          />

          <StyledDefaultButton
            disabled={isLoading || isFormFilled}
            isLoading={isLoading}
            onClick={handleSubmit}
          >
            Підтвердити
          </StyledDefaultButton>

          <Description>Реєстрація проходить тільки через заявку</Description>
          <Description>Пароль і логін такий же як у вас на сервері</Description>
        </FormContainer>
      </FormImage>
    </Container>
  )
}

export default SignInPage
