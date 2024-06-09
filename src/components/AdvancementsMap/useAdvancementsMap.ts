import { useUserAdvancements } from 'src/hooks/useUserAdvancements'

import schema from 'src/components/AdvancementsMap/schema.json'
import type { Advancement } from 'src/components/AdvancementsMap/types'

export const useAdvancementsMap = (realname: string) => {
  const { data, isLoading } = useUserAdvancements(realname)

  const schemaAdvancements: Record<string, Advancement> = schema

  const advancements = data?.advancements ?? []

  advancements.forEach((item: string) => {
    schemaAdvancements[item].isDone = true
  })

  const userAdvancements = Object.values(schemaAdvancements)

  const body = document.querySelector('body')
  const screenWidth = body ? body.offsetWidth : 0

  const initialPositionX = screenWidth / 2 - 500

  return { userAdvancements, isLoading, screenWidth, initialPositionX }
}
