import { useEffect } from 'react'

import {
  Border,
  ContentWrapper,
  ToastImageContainer,
  ToastText,
  Wrapper,
} from 'src/features/Toast/styles'
import type { ToastProps } from 'src/features/Toast/types'

const Toast = ({
  width,
  height,
  fontSize,
  message,
  isOpen,
  autoHideDuration,
  status,
  onClose,
}: ToastProps): JSX.Element => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, autoHideDuration)

      return () => clearTimeout(timer)
    }

    return undefined
  }, [isOpen, autoHideDuration, onClose])

  return (
    <Wrapper
      className={`${isOpen ? 'visible' : 'vanish'}`}
      onClick={() => onClose()}
    >
      <Border style={{ width, height }}>
        <div className="angle angle_left_top" />
        <div className="angle angle_left_bottom" />
        <div className="angle angle_right_top" />
        <div className="angle angle_right_bottom" />
        <div className="border border_top" />
        <div className="border border_right" />
        <div className="border border_bottom" />
        <div className="border border_left" />

        <ContentWrapper>
          <ToastImageContainer>
            <div
              style={{ backgroundImage: `url('/assets/toast_parts/${status}.png')` }}
            />
          </ToastImageContainer>
          <ToastText>
            <div>
              {message.map((item, i) => (
                <div style={{ fontSize }} key={i}>
                  {item}
                </div>
              ))}
            </div>
          </ToastText>
        </ContentWrapper>
      </Border>
    </Wrapper>
  )
}

export default Toast
