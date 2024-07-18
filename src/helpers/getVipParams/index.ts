import { ITEMS_COUNT, LOTS_COUNT, SHULKERS_COUNT } from 'src/constants'
import type { VipParamsT } from 'src/types'
import { VipEnum } from 'src/types'

export const getVipParams = (userVip: VipEnum | null): VipParamsT => {
  if (userVip === null) {
    return {
      vipShulkerCount: SHULKERS_COUNT,
      vipItemCount: ITEMS_COUNT,
      vipLotCount: LOTS_COUNT,
    }
  }

  if (userVip === VipEnum.IRON) {
    return {
      vipShulkerCount: SHULKERS_COUNT * 2,
      vipItemCount: ITEMS_COUNT * 2,
      vipLotCount: LOTS_COUNT * 2,
    }
  }

  if (userVip === VipEnum.GOLDEN) {
    return {
      vipShulkerCount: SHULKERS_COUNT * 4,
      vipItemCount: ITEMS_COUNT * 4,
      vipLotCount: LOTS_COUNT * 4,
    }
  }

  if (userVip === VipEnum.DIAMOND) {
    return {
      vipShulkerCount: SHULKERS_COUNT * 6,
      vipItemCount: ITEMS_COUNT * 6,
      vipLotCount: LOTS_COUNT * 6,
    }
  }

  if (userVip === VipEnum.NETHERITE) {
    return {
      vipShulkerCount: SHULKERS_COUNT * 8,
      vipItemCount: ITEMS_COUNT * 8,
      vipLotCount: LOTS_COUNT * 8,
    }
  }

  return {
    vipShulkerCount: SHULKERS_COUNT,
    vipItemCount: ITEMS_COUNT,
    vipLotCount: LOTS_COUNT,
  }
}
