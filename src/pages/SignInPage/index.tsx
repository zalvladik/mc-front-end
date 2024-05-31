import { ChangeEvent } from 'react'
import { Controller } from 'react-hook-form'
import InputSignIn from 'src/features/InputSignIn'
import {
  Container,
  InputWrapper,
  ButtonSubmit,
  FormContainer,
  ErrorMessage,
  FormImage,
  ButtonClose,
  CrossWrapper,
  Description,
} from 'src/pages/SignInPage/styles'
import { useSignInPage } from 'src/pages/SignInPage/useSignInPage'

const SignInPage = (): JSX.Element => {
  const { navigate, errors, control, trigger, isLoading, handleSubmit } =
    useSignInPage()

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

          <ButtonSubmit disabled={isLoading} onClick={handleSubmit}>
            Підтвердити
          </ButtonSubmit>
          <Description>Реєстрація проходить тільки через заявку</Description>
          <Description>Пароль і логін такий же як у вас на сервері</Description>
        </FormContainer>
      </FormImage>
    </Container>
  )
}

export default SignInPage
