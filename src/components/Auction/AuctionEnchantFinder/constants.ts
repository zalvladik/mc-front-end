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

type itemTypesEnchantsFinderTranslationsT = {
  [key: string]: string
}

export const itemTypesEnchantsFinderTranslations: itemTypesEnchantsFinderTranslationsT =
  {
    chainmail_helmet: 'Кольчужний шолом',
    leather_helmet: 'Шкіряна шапка',
    diamond_helmet: 'Діамантовий шолом',
    netherite_helmet: 'Незеритовий шолом',
    iron_helmet: 'Залізний шолом',
    golden_helmet: 'Золотий шолом',
    chainmail_chestplate: 'Кольчужний нагрудник',
    leather_chestplate: 'Шкіряна туніка',
    diamond_chestplate: 'Діамантовий нагрудник',
    netherite_chestplate: 'Незеритовий нагрудник',
    iron_chestplate: 'Залізний нагрудник',
    golden_chestplate: 'Золотий нагрудник',
    chainmail_leggings: 'Кольчужні наголінники',
    leather_leggings: 'Шкіряні штани',
    diamond_leggings: 'Діамантові наголінники',
    netherite_leggings: 'Незеритові наголінники',
    iron_leggings: 'Залізні наголінники',
    golden_leggings: 'Золоті наголінники',
    chainmail_boots: 'Кольчужні чоботи',
    leather_boots: 'Шкіряні чоботи',
    diamond_boots: 'Діамантові чоботи',
    netherite_boots: 'Незеритові чоботи',
    iron_boots: 'Залізні чоботи',
    golden_boots: 'Золоті чоботи',
    stone_sword: "Кам'яний меч",
    wooden_sword: "Дерев'яний меч",
    diamond_sword: 'Діамантовий меч',
    netherite_sword: 'Незеритовий меч',
    iron_sword: 'Залізний меч',
    golden_sword: 'Золотий меч',
    stone_pickaxe: "Кам'яне кайло",
    wooden_pickaxe: "Дерев'яне кайло",
    diamond_pickaxe: 'Діамантове кайло',
    netherite_pickaxe: 'Незеритове кайло',
    iron_pickaxe: 'Залізне кайло',
    golden_pickaxe: 'Золоте кайло',
    stone_axe: "Кам'яна сокира",
    wooden_axe: "Дерев'яна сокира",
    diamond_axe: 'Діамантова сокира',
    netherite_axe: 'Незеритова сокира',
    iron_axe: 'Залізна сокира',
    golden_axe: 'Золота сокира',
    stone_hoe: "Кам'яна мотика",
    wooden_hoe: "Дерев'яна мотика",
    diamond_hoe: 'Діамантова мотика',
    netherite_hoe: 'Незеритова мотика',
    iron_hoe: 'Залізна мотика',
    golden_hoe: 'Золота мотика',
    stone_shovel: "Кам'яна лопата",
    wooden_shovel: "Дерев'яна лопата",
    diamond_shovel: 'Діамантова лопата',
    netherite_shovel: 'Незеритова лопата',
    iron_shovel: 'Залізна лопата',
    golden_shovel: 'Золота лопата',
    elytra: 'Елітри',
    crossbow: 'Арбалет',
    bow: 'Лук',
    fishing_rod: 'Вудка',
    trident: 'Тризубець',
    mace: 'Булава',
  }

export const enchantTranslations: { [key: string]: string } = {
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

export const enchantsWithMaxLvl: { [key: string]: number } = {
  [EnchantsEnum.BANE_OF_ARTHROPODS]: 5,
  [EnchantsEnum.BLAST_PROTECTION]: 4,
  [EnchantsEnum.BREACH]: 4,
  [EnchantsEnum.DENSITY]: 5,
  [EnchantsEnum.DEPTH_STRIDER]: 3,
  [EnchantsEnum.EFFICIENCY]: 5,
  [EnchantsEnum.FEATHER_FALLING]: 4,
  [EnchantsEnum.FIRE_ASPECT]: 2,
  [EnchantsEnum.FIRE_PROTECTION]: 4,
  [EnchantsEnum.FORTUNE]: 3,
  [EnchantsEnum.FROST_WALKER]: 2,
  [EnchantsEnum.IMPALING]: 5,
  [EnchantsEnum.KNOCKBACK]: 2,
  [EnchantsEnum.LOOTING]: 3,
  [EnchantsEnum.LOYALTY]: 3,
  [EnchantsEnum.LUCK_OF_THE_SEA]: 3,
  [EnchantsEnum.LURE]: 3,
  [EnchantsEnum.PIERCING]: 4,
  [EnchantsEnum.POWER]: 5,
  [EnchantsEnum.PROJECTILE_PROTECTION]: 4,
  [EnchantsEnum.PROTECTION]: 4,
  [EnchantsEnum.PUNCH]: 2,
  [EnchantsEnum.QUICK_CHARGE]: 3,
  [EnchantsEnum.RESPIRATION]: 3,
  [EnchantsEnum.RIPTIDE]: 3,
  [EnchantsEnum.SHARPNESS]: 5,
  [EnchantsEnum.SMITE]: 5,
  [EnchantsEnum.SOUL_SPEED]: 3,
  [EnchantsEnum.SWEEPING]: 3,
  [EnchantsEnum.SWIFT_SNEAK]: 3,
  [EnchantsEnum.THORNS]: 3,
  [EnchantsEnum.UNBREAKING]: 3,
  [EnchantsEnum.WIND_BURST]: 3,
  [EnchantsEnum.AQUA_AFFINITY]: 1,
  [EnchantsEnum.BINDING_CURSE]: 1,
  [EnchantsEnum.CHANNELING]: 1,
  [EnchantsEnum.VANISHING_CURSE]: 1,
  [EnchantsEnum.SILK_TOUCH]: 1,
  [EnchantsEnum.MENDING]: 1,
  [EnchantsEnum.MULTISHOT]: 1,
  [EnchantsEnum.INFINITY]: 1,
  [EnchantsEnum.FLAME]: 1,
}
