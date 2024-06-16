import { useMemo, useState } from 'react'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import useGetAllUsers from 'src/hooks/useGetAllUsers'

import { Modals } from 'src/features/Modals/constants'

const useWikiPage = () => {
  const { onOpen } = useModals()
  const [value, setValue] = useState<string>('')
  const [option, setOption] = useState<string>('optionToDown')
  const { data, isLoading } = useGetAllUsers()

  const toAdvancements = (realname: string) => {
    onOpen({ name: Modals.ADVANCEMENTS, data: { realname } })
  }

  const sorteredData = useMemo(() => {
    const copyData = data

    switch (option) {
      case 'optionToTop':
        return copyData?.sort((a, b) => a.rating - b.rating)
      case 'optionToDown':
        return copyData?.sort((a, b) => b.rating - a.rating)
      case 'optionAbc': {
        const otherNames: any[] = []

        const result = copyData
          ?.filter(item => {
            if (!Number.isNaN(+item.realname[0]) || item.realname[0] === '_') {
              otherNames.push(item)

              return false
            }

            return true
          })
          .sort((a, b) => a.realname.localeCompare(b.realname))
          .concat(otherNames)

        return result
      }
      case 'optionCba':
        return copyData?.sort((a, b) => b.realname.localeCompare(a.realname))
      default:
        return copyData
    }
  }, [option, data])

  const filteredData = sorteredData?.filter((item: any) =>
    item.realname.toLowerCase().includes(value.toLowerCase()),
  )

  return {
    data: filteredData,
    value,
    option,
    isLoading,
    toAdvancements,
    setValue,
    setOption,
  }
}

export default useWikiPage
