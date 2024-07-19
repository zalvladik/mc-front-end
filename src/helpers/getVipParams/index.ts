import {
  ITEMS_COUNT,
  LOTS_COUNT,
  SHULKERS_COUNT,
  vipMultipliers,
} from 'src/constants'
import type { VipEnum, VipParamsT } from 'src/types'

export const getVipParams = (userVip: VipEnum | null): VipParamsT => {
  const multiplier = userVip ? vipMultipliers[userVip] : 1

  return {
    vipShulkerCount: SHULKERS_COUNT * multiplier,
    vipItemCount: ITEMS_COUNT * multiplier,
    vipLotCount: LOTS_COUNT * multiplier,
  }
}
