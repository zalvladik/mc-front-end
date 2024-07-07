import { useEffect, useRef } from 'react'

export const useDefaultButton = () => {
  const textButtonRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (textButtonRef.current && containerRef.current) {
      const containerWidth = containerRef.current.getBoundingClientRect().width
      const textButtonWidth = textButtonRef.current.getBoundingClientRect().width

      if (containerWidth < textButtonWidth) {
        containerRef.current.style.width = `${textButtonWidth + 40}px`
      }
    }
  }, [textButtonRef, containerRef])

  return { textButtonRef, containerRef }
}
