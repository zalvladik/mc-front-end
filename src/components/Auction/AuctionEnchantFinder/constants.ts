export enum EnchantsTypesEnum {
  NOTHING,
  HELMET,
  CHESTPLATE,
  LEGGINGS,
  BOOTS,
  ELYTRA,
  SWORD,
  AXE,
  TRIDENT,
  MACE,
  PICKAXE,
  SHOVEL,
  HOE,
  BOW,
  CROSSBOW,
  FISHING_ROD,
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

export enum ItemMaterialEnum {
  LEATHER = 'leather',
  CHAINMAIL = 'chainmail',
  IRON = 'iron',
  GOLDEN = 'golden',
  DIAMOND = 'diamond',
  NETHERITE = 'netherite',
}

export type ArmorMaterialT =
  | 'leather'
  | 'iron'
  | 'golden'
  | 'diamond'
  | 'netherite'
  | 'chainmail'

export type WeaponAndToolsMaterialT =
  | 'wooden'
  | 'iron'
  | 'golden'
  | 'diamond'
  | 'netherite'

export const armorMaterials: ArmorMaterialT[] = [
  'leather',
  'chainmail',
  'iron',
  'golden',
  'diamond',
  'netherite',
]

export const weaponAndToolsMaterial: WeaponAndToolsMaterialT[] = [
  'wooden',
  'iron',
  'golden',
  'diamond',
  'netherite',
]

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

export const enchantVariables = {
  [EnchantsTypesEnum.HELMET]: [EnchantsEnum.AQUA_AFFINITY, EnchantsEnum.RESPIRATION],
  [EnchantsTypesEnum.CHESTPLATE]: [],
  [EnchantsTypesEnum.LEGGINGS]: [EnchantsEnum.SWIFT_SNEAK],
  [EnchantsTypesEnum.BOOTS]: [
    EnchantsEnum.DEPTH_STRIDER,
    EnchantsEnum.FROST_WALKER,
    EnchantsEnum.FEATHER_FALLING,
    EnchantsEnum.SOUL_SPEED,
  ],
  [EnchantsTypesEnum.ELYTRA]: [EnchantsEnum.BINDING_CURSE],
  [EnchantsTypesEnum.SWORD]: [
    [EnchantsEnum.BANE_OF_ARTHROPODS, EnchantsEnum.SMITE, EnchantsEnum.SWEEPING],
    EnchantsEnum.FIRE_ASPECT,
    EnchantsEnum.KNOCKBACK,
    EnchantsEnum.LOOTING,
  ],
  [EnchantsTypesEnum.AXE]: [
    [EnchantsEnum.SHARPNESS, EnchantsEnum.BANE_OF_ARTHROPODS, EnchantsEnum.SMITE],
  ],
  [EnchantsTypesEnum.TRIDENT]: [
    [EnchantsEnum.CHANNELING, EnchantsEnum.LOYALTY, EnchantsEnum.RIPTIDE],
    EnchantsEnum.IMPALING,
  ],
  [EnchantsTypesEnum.MACE]: [],
  [EnchantsTypesEnum.PICKAXE]: [],
  [EnchantsTypesEnum.SHOVEL]: [],
  [EnchantsTypesEnum.HOE]: [],
  [EnchantsTypesEnum.BOW]: [
    [EnchantsEnum.INFINITY, EnchantsEnum.MENDING],
    EnchantsEnum.FLAME,
    EnchantsEnum.POWER,
    EnchantsEnum.PUNCH,
  ],
  [EnchantsTypesEnum.CROSSBOW]: [
    [EnchantsEnum.MULTISHOT, EnchantsEnum.PIERCING],
    EnchantsEnum.QUICK_CHARGE,
  ],
  [EnchantsTypesEnum.FISHING_ROD]: [EnchantsEnum.LUCK_OF_THE_SEA, EnchantsEnum.LURE],
  all: [EnchantsEnum.MENDING, EnchantsEnum.UNBREAKING],
  armor: [
    [
      EnchantsEnum.BLAST_PROTECTION,
      EnchantsEnum.FIRE_PROTECTION,
      EnchantsEnum.PROJECTILE_PROTECTION,
      EnchantsEnum.PROTECTION,
    ],
    EnchantsEnum.THORNS,
  ],
  tools: [[EnchantsEnum.FORTUNE, EnchantsEnum.SILK_TOUCH], EnchantsEnum.EFFICIENCY],
}

export const enchantTranslations = {
  [EnchantsEnum.BANE_OF_ARTHROPODS]: 'Загибель членистоногих',
  [EnchantsEnum.BLAST_PROTECTION]: 'Захист від вибухів',
  [EnchantsEnum.BREACH]: 'Пробивання',
  [EnchantsEnum.DENSITY]: 'Щільність',
  [EnchantsEnum.DEPTH_STRIDER]: 'Глибинний бігун',
  [EnchantsEnum.EFFICIENCY]: 'Ефективність',
  [EnchantsEnum.FEATHER_FALLING]: 'Невагомість',
  [EnchantsEnum.FIRE_ASPECT]: 'Сила вогню',
  [EnchantsEnum.FIRE_PROTECTION]: 'Захист від вогню',
  [EnchantsEnum.FORTUNE]: 'Удача',
  [EnchantsEnum.FROST_WALKER]: 'Льодохід',
  [EnchantsEnum.IMPALING]: 'Протикання',
  [EnchantsEnum.KNOCKBACK]: 'Відкидання',
  [EnchantsEnum.LOOTING]: 'Грабунок',
  [EnchantsEnum.LOYALTY]: 'Вірність',
  [EnchantsEnum.LUCK_OF_THE_SEA]: 'Морська фортуна',
  [EnchantsEnum.LURE]: 'Приманка',
  [EnchantsEnum.PIERCING]: 'Пронизування',
  [EnchantsEnum.POWER]: 'Сила',
  [EnchantsEnum.PROJECTILE_PROTECTION]: 'Захист від снарядів',
  [EnchantsEnum.PROTECTION]: 'Захист',
  [EnchantsEnum.PUNCH]: 'Удар',
  [EnchantsEnum.QUICK_CHARGE]: 'Швидке заряджання',
  [EnchantsEnum.RESPIRATION]: 'Дихання',
  [EnchantsEnum.RIPTIDE]: 'Тягун',
  [EnchantsEnum.SHARPNESS]: 'Гострота',
  [EnchantsEnum.SMITE]: 'Небесна кара',
  [EnchantsEnum.SOUL_SPEED]: 'Швидкість душ',
  [EnchantsEnum.SWEEPING]: 'Нищівне лезо',
  [EnchantsEnum.SWIFT_SNEAK]: 'Біг крадькома',
  [EnchantsEnum.THORNS]: 'Шипи',
  [EnchantsEnum.UNBREAKING]: 'Незламність',
  [EnchantsEnum.WIND_BURST]: 'Порив вітру',
  [EnchantsEnum.AQUA_AFFINITY]: 'Рідність води',
  [EnchantsEnum.BINDING_CURSE]: "Прокляття прив'язування",
  [EnchantsEnum.CHANNELING]: 'Блискавиця',
  [EnchantsEnum.VANISHING_CURSE]: 'Прокляття зникнення',
  [EnchantsEnum.SILK_TOUCH]: 'Шовковий дотик',
  [EnchantsEnum.MENDING]: 'Лагодження',
  [EnchantsEnum.MULTISHOT]: 'Мультипостріл',
  [EnchantsEnum.INFINITY]: 'Нескінченність',
  [EnchantsEnum.FLAME]: "Полум'я",
}
