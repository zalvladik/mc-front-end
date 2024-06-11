import { Input } from 'src/components/inputs/DefaultInput/styles'
import type { DefaultInputProps } from 'src/components/inputs/DefaultInput/types'

const DefaultInput = ({ ...props }: DefaultInputProps): JSX.Element => {
  return <Input {...props} />
}

export default DefaultInput
