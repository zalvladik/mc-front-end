import { Input } from 'src/components/inputs/DefaultInput/styles'
import type { DefaultInputProps } from 'src/components/inputs/DefaultInput/types'

const DefaultInput = ({
  isVisible = true,
  style,
  ...props
}: DefaultInputProps): JSX.Element => {
  return (
    <Input
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'none' : 'auto',
        ...style,
      }}
      {...props}
    />
  )
}

export default DefaultInput
