import {
  Input,
  InputWrapper,
  RightIcon,
} from 'src/components/inputs/DefaultInput/styles'
import type { DefaultInputProps } from 'src/components/inputs/DefaultInput/types'

const DefaultInput = ({
  containerStyle,
  isVisible = true,
  rightIcon = true,
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
            opacity: isVisible ? 1 : 0,
            pointerEvents: isVisible ? 'auto' : 'none',
            ...style,
          }}
          {...props}
        />
        {rightIcon && (
          <RightIcon
            style={{
              width: rightIconSize,
              height: rightIconSize,
              opacity: isVisible ? 1 : 0,
              pointerEvents: isVisible ? 'auto' : 'none',
              backgroundImage: `url('/assets/${rightIconUrl}')`,
            }}
          />
        )}
      </InputWrapper>
    </div>
  )
}

export default DefaultInput
