import { Input, InputWrapper, RightIcon } from 'src/components/DefaultInput/styles'
import type { DefaultInputProps } from 'src/components/DefaultInput/types'

const DefaultInput = ({
  containerStyle,
  rightIcon = true,
  disabled = false,
  rightIconUrl = 'icons_for_ui/search.png',
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
            opacity: disabled ? 0.4 : 1,
            pointerEvents: disabled ? 'none' : 'auto',
            ...style,
          }}
          {...props}
        />
        {rightIcon && (
          <RightIcon
            style={{
              width: rightIconSize,
              height: rightIconSize,
              opacity: disabled ? 0.4 : 1,
              pointerEvents: disabled ? 'none' : 'auto',
              backgroundImage: `url('/assets/${rightIconUrl}')`,
            }}
          />
        )}
      </InputWrapper>
    </div>
  )
}

export default DefaultInput
