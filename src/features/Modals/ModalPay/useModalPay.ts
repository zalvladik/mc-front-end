import type { ChangeEvent } from 'react'
import { useState } from 'react'
import { useGetUserWhitelist } from 'src/hooks/useGetUserWhitelist'
import rulesForPay from 'src/locales/rulesForPay.json'

export const useModalPay = () => {
  const [username, setUsername] = useState<string>('')

  const handleusernameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value === '') {
      setUsername('')

      return
    }

    const newUsername = event.target.value
    const validPattern = /^[a-zA-Z0-9_.-]{1,16}$/

    if (!validPattern.test(newUsername)) return

    if (event.target.value.length > 16) return

    setUsername(String(event.target.value))
  }

  const [[category, rules]] = Object.entries(rulesForPay)

  const { data = [], isLoading } = useGetUserWhitelist()

  const isExistUsername = data?.find(
    item => item.toLowerCase() === username.toLowerCase(),
  )

  return {
    category,
    rules,
    data,
    isLoading,
    handleusernameChange,
    username,
    isExistUsername,
  }
}
