export type ItemCategoryFilterProps = {
  setSelectedCaterogies: (value: string[]) => void
  selectedCaterogies: string[]
  sizeItem?: number
  isNeedShulkerCategory?: boolean
}

export type UseItemCategoryFilterProps = {
  setSelectedCaterogies: (value: string[]) => void
  selectedCaterogies: string[]
  isNeedShulkerCategory?: boolean
}
