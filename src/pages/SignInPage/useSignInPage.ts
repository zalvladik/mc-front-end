import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { validationSchema } from 'src/pages/SignInPage/validationSchema'

import type { SignInFormT } from 'src/pages/SignInPage/types'
import { useNavigate } from 'react-router-dom'
import { useLogin } from 'src/hooks/useLogin'

export const useSignInPage = () => {
  const navigate = useNavigate()

  const {
    handleSubmit,
    trigger,
    formState: { errors },
    control,
  } = useForm<SignInFormT>({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: { realname: 'France', password: '13245France' },
  })

  const { isError, isLoading, mutate } = useLogin()

  const signIn = ({ realname, password }: SignInFormT): void => {
    mutate({ realname, password })
  }

  return {
    navigate,
    errors,
    control,
    trigger,
    isError,
    isLoading,
    handleSubmit: handleSubmit(signIn),
  }
}
