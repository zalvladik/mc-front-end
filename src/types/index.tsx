import type { ReactNode } from 'react'

export type ValueOf<T extends string> = `${T}`

export type UnionToIntersection<U> = (
  U extends object ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never

export type ReactChildrenT = {
  children: ReactNode
}

export type ErrorResponse = {
  messages: string[]
}

export enum ItemTypesEnchantsFinderEnum {
  HELMET = 'helmet',
  CHESTPLATE = 'chestplate',
  LEGGINGS = 'leggings',
  BOOTS = 'boots',
  ELYTRA = 'elytra',
  SWORD = 'sword',
  AXE = 'axe',
  TRIDENT = 'trident',
  MACE = 'mace',
  PICKAXE = 'pickaxe',
  SHOVEL = 'shovel',
  HOE = 'hoe',
  BOW = 'bow',
  CROSSBOW = 'crossbow',
  FISHING_ROD = 'fishing_rod',
}

export enum ArmorMaterialEnum {
  LEATHER = 'leather',
  CHAINMAIL = 'chainmail',
  IRON = 'iron',
  GOLDEN = 'golden',
  DIAMOND = 'diamond',
  NETHERITE = 'netherite',
}

export enum SwordAndToolsMaterialEnum {
  WOODEN = 'wooden',
  IRON = 'iron',
  GOLDEN = 'golden',
  DIAMOND = 'diamond',
  NETHERITE = 'netherite',
}

export enum EnchantsTypesEnum {
  HELMET = 'helmet',
  CHESTPLATE = 'chestplate',
  LEGGINGS = 'leggings',
  BOOTS = 'boots',
  ELYTRA = 'elytra',
  SWORD = 'sword',
  AXE = 'axe',
  TRIDENT = 'trident',
  MACE = 'mace',
  PICKAXE = 'pickaxe',
  SHOVEL = 'shovel',
  HOE = 'hoe',
  BOW = 'bow',
  CROSSBOW = 'crossbow',
  FISHING_ROD = 'fishing_rod',
}

export enum EnchantsEnum {
  BANE_OF_ARTHROPODS = 'bane_of_arthropods',
  BLAST_PROTECTION = 'blast_protection',
  BREACH = 'breach',
  DENSITY = 'density',
  DEPTH_STRIDER = 'depth_strider',
  EFFICIENCY = 'efficiency',
  FEATHER_FALLING = 'feather_falling',
  FIRE_ASPECT = 'fire_aspect',
  FIRE_PROTECTION = 'fire_protection',
  FORTUNE = 'fortune',
  FROST_WALKER = 'frost_walker',
  IMPALING = 'impaling',
  KNOCKBACK = 'knockback',
  LOOTING = 'looting',
  LOYALTY = 'loyalty',
  LUCK_OF_THE_SEA = 'luck_of_the_sea',
  LURE = 'lure',
  PIERCING = 'piercing',
  POWER = 'power',
  PROJECTILE_PROTECTION = 'projectile_protection',
  PROTECTION = 'protection',
  PUNCH = 'punch',
  QUICK_CHARGE = 'quick_charge',
  RESPIRATION = 'respiration',
  RIPTIDE = 'riptide',
  SHARPNESS = 'sharpness',
  SMITE = 'smite',
  SOUL_SPEED = 'soul_speed',
  SWEEPING = 'sweeping',
  SWIFT_SNEAK = 'swift_sneak',
  THORNS = 'thorns',
  UNBREAKING = 'unbreaking',
  WIND_BURST = 'wind_burst',
  AQUA_AFFINITY = 'aqua_affinity',
  BINDING_CURSE = 'binding_curse',
  CHANNELING = 'channeling',
  VANISHING_CURSE = 'vanishing_curse',
  SILK_TOUCH = 'silk_touch',
  MENDING = 'mending',
  MULTISHOT = 'multishot',
  INFINITY = 'infinity',
  FLAME = 'flame',
}

export enum VipEnum {
  IRON = 'iron',
  GOLDEN = 'golden',
  DIAMOND = 'diamond',
  NETHERITE = 'netherite',
}

export type VipParamsT = {
  vipShulkerCount: number
  vipItemCount: number
  vipLotCount: number
}
