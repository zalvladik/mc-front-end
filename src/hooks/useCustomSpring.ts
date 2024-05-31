import { useSpring } from '@react-spring/web'
import { useEffect, useState } from 'react'

export const useCustomSpring = (componentId: string) => {
  const [isVisible, setIsVisible] = useState(false)

  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0%)' : 'translateY(30%)',
    config: {
      duration: 500,
    },
  })

  const handleScroll = () => {
    const element = document.getElementById(componentId)

    if (element) {
      const rect = element.getBoundingClientRect()
      setIsVisible(rect.top < window.innerHeight)
    }
  }

  useEffect(() => {
    if (isVisible) {
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isVisible, componentId])

  return springProps
}
