import {
  Input,
  InputWrapper,
  RightIcon,
} from 'src/components/inputs/DefaultInput/styles'
import type { DefaultInputProps } from 'src/components/inputs/DefaultInput/types'

const DefaultInput = ({
  containerStyle,
  isVisible = true,
  searchIcon = true,
  rightIconSize = 32,
  style,
  ...props
}: DefaultInputProps): JSX.Element => {
  return (
    <div style={containerStyle}>
      <InputWrapper>
        <Input
          className="defaultInput"
          style={{
            opacity: isVisible ? 1 : 0,
            pointerEvents: isVisible ? 'auto' : 'none',
            ...style,
          }}
          {...props}
        />
        {searchIcon && (
          <RightIcon
            style={{
              width: rightIconSize,
              height: rightIconSize,
              opacity: isVisible ? 1 : 0,
              pointerEvents: isVisible ? 'auto' : 'none',
            }}
          />
        )}
      </InputWrapper>
    </div>
  )
}

export default DefaultInput
