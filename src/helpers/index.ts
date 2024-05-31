import { LocalStorageKey } from 'src/constants'
import type { ValueOf } from 'src/types'

export const copyText = (text: string) => {
  if (!navigator.clipboard.writeText) {
    return Promise.reject('The Clipboard API is not available.')
  }

  return navigator.clipboard.writeText(text)
}

const processDataFromStorage = <T>(data: string): T | string => {
  try {
    const parsedData = JSON.parse(data)

    if (typeof parsedData === 'object' && parsedData !== null) {
      return parsedData
    }
  } catch {
    /* empty */
  }

  return data || ''
}

export const getFromLocalStorage = <T = string>(
  key: ValueOf<LocalStorageKey>,
): T => {
  const data = localStorage.getItem(key) || ''

  return processDataFromStorage<T>(data) as T
}

export const millisecondsToDate = (milliseconds: number | string): string => {
  const date = new Date(Number(milliseconds))

  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  const formattedDateTime = `${year}-${month}-${day}`

  return formattedDateTime
}

export const millisecondsToTime = (milliseconds: number | string): string => {
  const date = new Date(Number(milliseconds))

  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  const formattedDateTime = `${hours}:${minutes}:${seconds}`

  return formattedDateTime
}

export const moneyCalculator = (count: number): string => {
  if (count <= 64) {
    return `У вас &b${count}⟡ шт. алмазної руди`
  } else {
    const remainder: number = count % 64
    return `[ ${Math.floor((count - remainder) / 64)}ст. ${remainder}шт. ]`
  }
}

export const moneyCalculatorShulker = (count: number): string => {
  const shulkers: number = count / 1728.0
  return `[ ${shulkers.toFixed(2)} ]`
}
