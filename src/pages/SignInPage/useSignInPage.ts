import { yupResolver } from '@hookform/resolvers/yup'

import { useForm, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useLogin } from 'src/hooks/useLogin'
import type { SignInFormT } from 'src/pages/SignInPage/types'
import { validationSchema } from 'src/pages/SignInPage/validationSchema'

export const useSignInPage = () => {
  const navigate = useNavigate()

  const {
    handleSubmit,
    trigger,
    formState: { errors, isValid },
    control,
  } = useForm<SignInFormT>({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: { realname: '', password: '' },
  })

  const { isError, isLoading, mutate } = useLogin()

  const signIn = ({ realname, password }: SignInFormT): void => {
    mutate({ realname, password })
  }

  const formValues = useWatch({
    control,
  })

  const isFormFilled = formValues.realname && formValues.password

  return {
    navigate,
    errors,
    control,
    trigger,
    isError,
    isLoading,
    isFormFilled: !isFormFilled || !isValid,
    handleSubmit: handleSubmit(signIn),
  }
}
