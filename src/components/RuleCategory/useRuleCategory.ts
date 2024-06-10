import { useEffect, useRef, useState } from 'react'

export const useRuleCategory = () => {
  const [selected, setSelected] = useState<boolean>(false)

  const rulesOverflowRef = useRef<HTMLDivElement>(null)
  const rulesRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (rulesOverflowRef && rulesRef) {
      if (rulesOverflowRef.current && rulesRef.current) {
        if (selected) {
          const { height } = rulesRef.current.getBoundingClientRect()
          rulesOverflowRef.current.style.height = `${height}px`
        }

        if (!selected) {
          rulesOverflowRef.current.style.height = '0px'
        }
      }
    }
  }, [selected])

  return { selected, setSelected, rulesOverflowRef, rulesRef }
}
