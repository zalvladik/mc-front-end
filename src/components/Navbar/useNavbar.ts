import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { RoutesPath } from 'src/router/routes'

export const useNavBar = () => {
  const navigate = useNavigate()
  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)
  const currentPath = window.location.pathname
  const isProfilePage =
    currentPath === RoutesPath.PROFILE || currentPath === RoutesPath.SIGN_IN

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

  return { navigate, isScrollingUp, currentPath, isProfilePage }
}
