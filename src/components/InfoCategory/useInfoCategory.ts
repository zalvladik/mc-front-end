import { useState } from 'react'

export const useInfoCategory = () => {
  const [selected, setSelected] = useState<boolean>(false)

  const handleClick = () => {
    setSelected(!selected)
  }

  return { selected, handleClick }
}
