import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  username: yup.string().required('Напишіть  нік').min(5, 'Нік закороткий'),

  password: yup.string().required('Напишіть  пароль').min(5, 'Пароль закороткий'),
})
