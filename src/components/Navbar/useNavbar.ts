import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavBar = () => {
  const navigate = useNavigate()

  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)

  const currentPath = window.location.pathname

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    const isScrollingUp = prevScrollPos > currentScrollPos

    if (currentScrollPos < 100) {
      setIsScrollingUp(true)

      return
    }

    setIsScrollingUp(isScrollingUp)
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  return {
    navigate,
    isScrollingUp,
    currentPath,
  }
}
