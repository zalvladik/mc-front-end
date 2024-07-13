import { useAuction } from 'src/contexts/AuctionProvider/useAuction'

export const useAuctionControlletFilter = () => {
  const { filterListParams, setFilterListParams } = useAuction()

  const { didNeedIdentical, didNeedShulkers, didNeedUserLots, didMoneyToUp } =
    filterListParams

  const getImgSelectForFilter = (isSelected: boolean) => {
    return isSelected
      ? '/assets/icons_for_ui/confirm.png'
      : '/assets/icons_for_ui/cancel.png'
  }

  const buttonFilterList = [
    {
      description: 'Шукати предмети в шалкерах?',
      urlImg: '/assets/shulkers/shulker_box.webp',
      isSelected: didNeedShulkers,
      onClick: () => {
        setFilterListParams({
          ...filterListParams,
          didNeedShulkers: !didNeedShulkers,
        })
      },
    },
    {
      description: 'Показувати ваші лоти?',
      urlImg: '/assets/items_for_ui/player_head.png',
      isSelected: didNeedUserLots,
      onClick: () => {
        setFilterListParams({
          ...filterListParams,
          didNeedUserLots: !didNeedUserLots,
        })
      },
    },
    {
      description: 'Пошук ідентичного предмета?',
      urlImg: '/assets/items_for_ui/zombie_chiken.webp',
      isSelected: didNeedIdentical,
      onClick: () => {
        setFilterListParams({
          ...filterListParams,
          didNeedIdentical: !didNeedIdentical,
        })
      },
    },
  ]

  return {
    buttonFilterList,
    getImgSelectForFilter,
    didMoneyToUp,
    setFilterListParams,
    filterListParams,
  }
}
