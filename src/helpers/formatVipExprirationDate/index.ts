import type { FormatVipExprirationDateT } from 'src/helpers/formatVipExprirationDate/types'
import { UkrainianMonths } from 'src/types'

export const formatVipExpirationDate = (
  dateStr: Date,
): FormatVipExprirationDateT => {
  const date = new Date(dateStr)
  const day = new Date(date).getDate()
  const month = UkrainianMonths[date.getMonth()]
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  return { day, month, hours, minutes, seconds }
}
