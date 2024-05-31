import { useState } from 'react'

export const useHeroButton = () => {
  const [isClicked, setIsClicked] = useState(false)

  const activator = () => {
    setIsClicked(true)

    setTimeout(() => {
      setIsClicked(false)
    }, 120)
  }

  return { isClicked, activator }
}
