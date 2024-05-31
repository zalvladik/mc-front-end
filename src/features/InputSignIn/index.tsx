import type { InputSignInProps } from 'src/features/InputSignIn/types'

import { Input } from 'src/features/InputSignIn/styles'

const InputSignIn = ({ ...props }: InputSignInProps): JSX.Element => {
  return <Input {...props} />
}

export default InputSignIn
