import type { Advancement } from 'src/components/AdvancementsMap/types'

import schema from 'src/components/AdvancementsMap/schema.json'
import getUserAdvancements from 'src/hooks/getUserAdvancements'

export const useAdvancementsMap = (realname: string) => {
  const { data, isLoading } = getUserAdvancements(realname)

  const schemaAdvancements: Record<string, Advancement> = schema

  data?.advancements.forEach(item => (schemaAdvancements[item].isDone = true))

  const userAdvancements = Object.values(schemaAdvancements)

  const body = document.querySelector('body')
  const screenWidth = body ? body.offsetWidth : 0

  const initialPositionX = screenWidth / 2 - 500

  return { userAdvancements, isLoading, screenWidth, initialPositionX }
}
