import { useCallback, useEffect, useRef, useState } from 'react'
import debounce from 'lodash.debounce'

export const useRuleCategory = () => {
  const [selected, setSelected] = useState<boolean>(false)
  const [cutomHeight, setCutomHeight] = useState<number>(0)

  const ruleRef = useRef<HTMLUListElement>(null)

  const debouncedResizeHandler = useCallback(
    debounce(() => {
      if (ruleRef.current) setCutomHeight(ruleRef.current.offsetHeight)
    }, 200),
    [],
  )

  useEffect(() => {
    if (ruleRef.current) setCutomHeight(ruleRef.current.offsetHeight)

    window.addEventListener('resize', debouncedResizeHandler)

    return () => {
      window.removeEventListener('resize', debouncedResizeHandler)
      debouncedResizeHandler.cancel()
    }
  }, [debouncedResizeHandler])

  const handleClick = () => {
    setSelected(!selected)
  }

  return { ruleRef, selected, cutomHeight, handleClick }
}
