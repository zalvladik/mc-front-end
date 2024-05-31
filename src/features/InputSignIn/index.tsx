import { Input } from 'src/features/InputSignIn/styles'

import type { InputSignInProps } from 'src/features/InputSignIn/types'

const InputSignIn = ({ ...props }: InputSignInProps): JSX.Element => {
  return <Input {...props}></Input>
}

export default InputSignIn
