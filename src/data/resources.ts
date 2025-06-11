export type Location = {
    x: number
    y: number
    z: number
}

export enum ECategory {
    MINING = 'mining',
    HERBALISM = 'herbalism',
    WOODCRAFTING = 'woodcrafting',
    FISHING = 'fishing',
    MERCHANT = 'merchant',
    OTHER = 'other'
}

export interface ICategory {
  name: string
}

export enum ESpot {
    // ECategory.MINING
    SCATTERING_OF_PEBBLE = 'scattering-of-pebble',
    SILVER_VEIN = 'silver-vein',
    COPPER_VEIN = 'copper-vein',
    GOLD_VEIN = 'gold-vein',
    IRON_VEIN = 'iron-vein',
    SPINEL_VEIN = 'spinel-vein',
    BAUXITE_VEIN = 'bauxite-vein',
    LIMONITE_VEIN = 'limonite-vein',
    AMETRINE_VEIN = 'ametrine-vein',
    JADE_VEIN = 'jade-vein',
    RHYOLITE_VEIN = 'rhyolite-vein',
    CORUNDUM_VEIN = 'corundum-vein',

    // ECategory.HERBALISM
    CHAMPIGNON = 'champignon',
    ROSEHIP = 'rosehip',
    FERN = 'fern',
    GINSENG = 'ginseng',
    NASTURTIUM = 'nasturtium',
    RATTAN = 'rattan',
    CORIANDER = 'coriander',
    ALMOND = 'almond',
    BLUE_ORCHID = 'blue-orchid',
    SNAPDRAGON = 'snapdragon',
    MULBERRY_TREE = 'mulberry-tree',

    // ECategory.WOODCRAFTING
    YOUNG_BAMBOO = 'young-bamboo',
    BAMBOO = 'bamboo',
    PEACH_TREE = 'peach-tree',
    TERMITE_MOUND = 'termite-mound',
    SANDALWOOD = 'sandalwood',
    CEDAR = 'cedar',
    SPRUCE = 'spruce',
    GLOWING_MUSHROOM = 'glowing-mushroom',
    MAPLE = 'maple',
    GOLDEN_OAK = 'golden-oak',
    DEAD_TREE = 'dead-tree',

    // ECategory.FISHING

    // ECategory.MERCHANT
}

export interface ISpot {
  name: string
  category: ECategory
  items: EItem[]
  locations: Location[]
}

export enum EItem {
    // ECategory.MINING
    LIMESTONE = 'limestone',
    PEBBLE = 'pebble',
    SILVER_ORE = 'silver-ore',
    COPPER_ORE = 'copper-ore',
    SANDSTONE = 'sandstone',
    GOLD_ORE = 'gold-ore',
    IRON_ORE = 'iron-ore',
    SPINEL = 'spinel',
    SLATE = 'slate',
    BAUXITE = 'bauxite',
    LIMONITE = 'limonite',
    AMETRINE = 'ametrine',
    GRANITE = 'granite',
    JADE = 'jade',
    RHYOLITE_CHIP = 'rhyolite-chip',
    MARBLE = 'marble',
    CORUNDUM = 'corundum',

    // ECategory.HERBALISM
    MEADOW_COLLECTION = 'meadow-collection',
    CHAMPIGNON = 'champignon',
    ROSEHIP = 'rosehip',
    SWAMP_COLLECTION = 'swamp-collection',
    FERN_LEAVES = 'fern-leaves',
    GINSENG_ROOT = 'ginseng-root',
    NASTURTIUM_BLOSSOM = 'nasturtium-blossom',
    RATTAN_STEMS = 'rattan-stems',
    FIELD_COLLECTION = 'field-collection',
    CORIANDER = 'coriander',
    ALMOND_FLOWERS = 'almond-flowers',
    FOREST_COLLECTION = 'forest-collection',
    RED_FROG = 'red-frog',
    CENTIPEDE = 'centipede',
    GARDEN_COLLECTION = 'garden-collection',
    SILKWORM_PUPA = 'silkworm-pupa',

    // ECategory.WOODCRAFTING
    ROTTEN_WOOD = 'rotten-wood',
    BAMBOO_SHOOTS = 'bamboo-shoots',
    BAMBOO_STALKS = 'bamboo-stalks',
    ORDINARY_WOOD = 'ordinary-wood',
    PEACH_BLOSSOMS = 'peach-blossoms',
    TERMITE = 'termite',
    SANDAL = 'sandal',
    CEDAR_NEEDLES = 'cedar-needles',
    HIGH_QUALITY_WOOD = 'high-quality-wood',
    SPRUCE_NEEDLES = 'spruce-needles',
    GLOWING_BERRY = 'glowing-berry',
    VALUABLE_WOOD = 'valuable-wood',
    MAPLE_LEAFS = 'maple-leafs',
    PITCH = 'pitch',
    FIRST_CLASS_WOOD = 'first-class-wood',
    STICKMAN = 'stickman'
}

export interface IItem {
  id: EItem
  name: string
  price?: number
  category: ECategory
  spots?: ESpot[]
}

export const categories: Record<ECategory, ICategory> = {
  [ECategory.MINING]: { name: 'Горное дело' },
  [ECategory.HERBALISM]: { name: 'Травничество' },
  [ECategory.WOODCRAFTING]: { name: 'Заготовка древесины' },
  [ECategory.FISHING]: { name: 'Рыбалка' },
  [ECategory.MERCHANT]: { name: 'Ресурсы у торговцев' },
  [ECategory.OTHER]: { name: 'Прочее' }
};

export const spots: Record<ESpot, ISpot> = {
  // ECategory.MINING
  [ESpot.SCATTERING_OF_PEBBLE]: {
    name: 'Россыпь гальки',
    category: ECategory.MINING,
    items: [EItem.LIMESTONE, EItem.PEBBLE],
    locations: [
      { x: 5262, y: -1488, z: 0 }, { x: 5730, y: -1739, z: 0 }, { x: 5742, y: -1506, z: 3 },
      { x: 5765, y: -5, z: 0 }, { x: 5778, y: -1673, z: 0 }, { x: 5778, y: -1770, z: 46 },
      { x: 5792, y: -1809, z: 2 }, { x: 5831, y: -1547, z: 49 }, { x: 5894, y: 40, z: 14 },
      { x: 5909, y: -234, z: 4 }, { x: 5909, y: -1817, z: 0 }, { x: 5912, y: 9, z: 0 },
      { x: 5915, y: -1609, z: 32 }, { x: 5918, y: -303, z: 16 }, { x: 5920, y: 362, z: 2 },
      { x: 5926, y: -1617, z: 28 }, { x: 5927, y: -303, z: 2 }, { x: 5944, y: -6, z: 0 },
      { x: 5976, y: 137, z: 2 }, { x: 5981, y: 174, z: 28 }, { x: 6006, y: 386, z: 11 },
      { x: 6008, y: 333, z: 0 }, { x: 6024, y: -41, z: 9 }, { x: 6026, y: -333, z: 3 },
      { x: 6027, y: 239, z: 6 }, { x: 6029, y: -1901, z: 0 }, { x: 6031, y: -62, z: 4 },
      { x: 6038, y: 850, z: 13 }, { x: 6041, y: -345, z: 2 }, { x: 6041, y: -371, z: 36 },
      { x: 6120, y: -442, z: 13 }, { x: 6129, y: -501, z: 0 }, { x: 6173, y: 480, z: 0 }
    ]
  },
  [ESpot.SILVER_VEIN]: { 
    name: 'Серебряная жила', 
    category: ECategory.MINING,
    items: [EItem.LIMESTONE, EItem.SILVER_ORE],
    locations: [
      { x: 4113, y: -1922, z: 131 }, { x: 4141, y: -1672, z: 122 }, { x: 4144, y: -1612, z: 139 },
      { x: 4164, y: -1704, z: 104 }, { x: 4181, y: -1783, z: 135 }, { x: 4195, y: -1977, z: 46 },
      { x: 4199, y: -2082, z: 64 }, { x: 4203, y: -1933, z: 54 }, { x: 4225, y: -1856, z: 41 },
      { x: 4232, y: -1825, z: 51 }, { x: 4236, y: -1694, z: 106 }, { x: 4241, y: -2089, z: 90 },
      { x: 4249, y: -2004, z: 45 }, { x: 4257, y: -1767, z: 51 }, { x: 4258, y: -1880, z: 39 },
      { x: 4262, y: -2079, z: 67 }, { x: 4264, y: -1890, z: 40 }, { x: 4266, y: -1740, z: 83 },
      { x: 4273, y: -2090, z: 116 }, { x: 4280, y: -1650, z: 92 }, { x: 4293, y: -2065, z: 64 },
      { x: 4299, y: -2077, z: 95 }, { x: 4307, y: -1641, z: 131 }, { x: 4311, y: -2029, z: 45 },
      { x: 4321, y: -1582, z: 135 }, { x: 4328, y: -1922, z: 35 }, { x: 4338, y: -2007, z: 55 },
      { x: 4352, y: -1962, z: 40 }, { x: 4378, y: -1816, z: 40 }, { x: 4391, y: -1842, z: 42 },
      { x: 4392, y: -1712, z: 62 }, { x: 4393, y: -1708, z: 74 }, { x: 4394, y: -1762, z: 59 },
      { x: 4407, y: -1689, z: 81 }, { x: 4407, y: -1916, z: 50 }, { x: 4415, y: -1880, z: 35 },
      { x: 4416, y: -1941, z: 85 }, { x: 4422, y: -1767, z: 80 }, { x: 4225, y: -1688, z: 49 },
      { x: 4425, y: -1915, z: 44 }, { x: 4468, y: -1877, z: 60 }, { x: 4493, y: -1707, z: 74 },
      { x: 4500, y: -1750, z: 63 }, { x: 4528, y: -1787, z: 61 }, { x: 4529, y: -1938, z: 59 },
      { x: 4541, y: -1859, z: 65 }, { x: 4577, y: -1890, z: 60 }, { x: 4625, y: -1806, z: 74 },
      { x: 4633, y: -1771, z: 118 }, { x: 4646, y: -1743, z: 124 }
    ]
  },
  [ESpot.COPPER_VEIN]: { 
    name: 'Медная жила', 
    category: ECategory.MINING,
    items: [EItem.LIMESTONE, EItem.COPPER_ORE],
    locations: [
      { x: 495, y: 2159, z: 13 }, { x: 544, y: 2060, z: -20 }, { x: 658, y: 1891, z: 73 },
      { x: 1462, y: 1045, z: -117 }, { x: 5273, y: -2619, z: 29 }, { x: 5285, y: -2638, z: 42 },
      { x: 5379, y: -2461, z: 21 }, { x: 5380, y: -2388, z: 4 }, { x: 5390, y: -2298, z: 24 },
      { x: 5410, y: -2205, z: 31 }, { x: 5432, y: -2531, z: 21 }, { x: 5435, y: -2596, z: 67 },
      { x: 5443, y: -2716, z: 1 }, { x: 5449, y: -2587, z: 14 }, { x: 5473, y: -2709, z: 58 },
      { x: 5489, y: -2647, z: 48 }, { x: 5493, y: -2339, z: 0 }
    ]
  },
  [ESpot.GOLD_VEIN]: { 
    name: 'Золотая жила', 
    category: ECategory.MINING,
    items: [EItem.SANDSTONE, EItem.GOLD_ORE],
    locations: [
      { x: 1286, y: 321, z: 8 }, { x: 4035, y: 1295, z: 32 }, { x: 4187, y: 1138, z: 5 }
    ]
  },
  [ESpot.IRON_VEIN]: { 
    name: 'Железная жила', 
    category: ECategory.MINING,
    items: [EItem.SANDSTONE, EItem.IRON_ORE],
    locations: [
      { x: 822, y: 621, z: -263 }, { x: 999, y: 524, z: 0 }
    ]
  },
  [ESpot.SPINEL_VEIN]: { 
    name: 'Шпинелевая жила', 
    category: ECategory.MINING,
    items: [EItem.SANDSTONE, EItem.SPINEL],
    locations: [
      { x: 593, y: 1914, z: 55 }
    ]
  },
  [ESpot.BAUXITE_VEIN]: { 
    name: 'Бокситовая жила', 
    category: ECategory.MINING,
    items: [EItem.SLATE, EItem.BAUXITE],
    locations: [
      { x: -182, y: -311, z: 2 }
    ]
  },
  [ESpot.LIMONITE_VEIN]: { 
    name: 'Лимонитовая жила', 
    category: ECategory.MINING,
    items: [EItem.SLATE, EItem.LIMONITE],
    locations: [
      { x: -2260, y: 403, z: 217 }
    ]
  },
  [ESpot.AMETRINE_VEIN]: { 
    name: 'Аметриновая жила', 
    category: ECategory.MINING,
    items: [EItem.SLATE, EItem.AMETRINE],
    locations: [
      { x: -1163, y: 939, z: 326 }
    ]
  },
  [ESpot.JADE_VEIN]: { 
    name: 'Нефритовая жила', 
    category: ECategory.MINING,
    items: [EItem.GRANITE, EItem.JADE],
    locations: [
      { x: 2915, y: 169, z: 152 }
    ]
  },
  [ESpot.RHYOLITE_VEIN]: { 
    name: 'Риолитовая жила', 
    category: ECategory.MINING,
    items: [EItem.GRANITE, EItem.RHYOLITE_CHIP],
    locations: [
      { x: -2948, y: -1196, z: 161 }
    ]
  },
  [ESpot.CORUNDUM_VEIN]: { 
    name: 'Корундовая жила', 
    category: ECategory.MINING,
    items: [EItem.MARBLE, EItem.CORUNDUM],
    locations: [
      { x: -2248, y: -50, z: 160 }
    ]
  },

  // ECategory.HERBALISM
  [ESpot.CHAMPIGNON]: { 
    name: 'Шампиньон', 
    category: ECategory.HERBALISM,
    items: [EItem.MEADOW_COLLECTION, EItem.CHAMPIGNON],
    locations: [
      { x: 5225, y: -1998, z: 29 }
    ]
  },
  [ESpot.ROSEHIP]: { 
    name: 'Шиповник', 
    category: ECategory.HERBALISM,
    items: [EItem.MEADOW_COLLECTION, EItem.ROSEHIP],
    locations: [
      { x: 5107, y: -1437, z: 2 }, { x: 5227, y: -1632, z: 1 }
    ]
  },
  [ESpot.FERN]: { 
    name: 'Папоротник', 
    category: ECategory.HERBALISM,
    items: [EItem.SWAMP_COLLECTION, EItem.FERN_LEAVES],
    locations: []
  },
  [ESpot.GINSENG]: { 
    name: 'Женьшень', 
    category: ECategory.HERBALISM,
    items: [EItem.GINSENG_ROOT],
    locations: []
  },
  [ESpot.NASTURTIUM]: { 
    name: 'Настурция', 
    category: ECategory.HERBALISM,
    items: [EItem.NASTURTIUM_BLOSSOM],
    locations: []
  },
  [ESpot.RATTAN]: { 
    name: 'Ротанг', 
    category: ECategory.HERBALISM,
    items: [EItem.SWAMP_COLLECTION, EItem.RATTAN_STEMS],
    locations: []
  },
  [ESpot.CORIANDER]: { 
    name: 'Кориандр', 
    category: ECategory.HERBALISM,
    items: [EItem.FIELD_COLLECTION, EItem.CORIANDER],
    locations: []
  },
  [ESpot.ALMOND]: { 
    name: 'Миндаль', 
    category: ECategory.HERBALISM,
    items: [EItem.FIELD_COLLECTION, EItem.ALMOND_FLOWERS],
    locations: []
  },
  [ESpot.BLUE_ORCHID]: { 
    name: 'Голубая орхидея', 
    category: ECategory.HERBALISM,
    items: [EItem.FOREST_COLLECTION, EItem.RED_FROG],
    locations: []
  },
  [ESpot.SNAPDRAGON]: { 
    name: 'Львиный зев', 
    category: ECategory.HERBALISM,
    items: [EItem.FIELD_COLLECTION, EItem.CENTIPEDE],
    locations: []
  },
  [ESpot.MULBERRY_TREE]: { 
    name: 'Тутовое дерево', 
    category: ECategory.HERBALISM,
    items: [EItem.GARDEN_COLLECTION, EItem.SILKWORM_PUPA],
    locations: []
  },

  // ECategory.WOODCRAFTING
  [ESpot.YOUNG_BAMBOO]: { 
    name: 'Молодой бамбук', 
    category: ECategory.WOODCRAFTING,
    items: [EItem.ROTTEN_WOOD, EItem.BAMBOO_SHOOTS],
    locations: []
  },
  [ESpot.BAMBOO]: { 
    name: 'Бамбук', 
    category: ECategory.WOODCRAFTING,
    items: [EItem.ROTTEN_WOOD, EItem.BAMBOO_STALKS],
    locations: [
      { x: 5796, y: -1133, z: 25 }
    ]
  },
  [ESpot.PEACH_TREE]: { 
    name: 'Персиковое дерево', 
    category: ECategory.WOODCRAFTING,
    items: [EItem.ORDINARY_WOOD, EItem.PEACH_BLOSSOMS],
    locations: [
      { x: 5242, y: -1464, z: 0 }, { x: 5258, y: -1675, z: 1 }, { x: 5294, y: -1944, z: 7 }
    ]
  },
  [ESpot.TERMITE_MOUND]: { 
    name: 'Термитник', 
    category: ECategory.WOODCRAFTING,
    items: [EItem.ORDINARY_WOOD, EItem.TERMITE],
    locations: []
  },
  [ESpot.SANDALWOOD]: { 
    name: 'Сандаловое дерево', 
    category: ECategory.WOODCRAFTING,
    items: [EItem.ORDINARY_WOOD, EItem.SANDAL],
    locations: []
  },
  [ESpot.CEDAR]: { 
    name: 'Кедр', 
    category: ECategory.WOODCRAFTING,
    items: [EItem.ORDINARY_WOOD, EItem.CEDAR_NEEDLES],
    locations: []
  },
  [ESpot.SPRUCE]: { 
    name: 'Ель', 
    category: ECategory.WOODCRAFTING,
    items: [EItem.HIGH_QUALITY_WOOD, EItem.SPRUCE_NEEDLES],
    locations: []
  },
  [ESpot.GLOWING_MUSHROOM]: { 
    name: 'Светящийся гриб', 
    category: ECategory.WOODCRAFTING,
    items: [EItem.HIGH_QUALITY_WOOD, EItem.GLOWING_BERRY],
    locations: []
  },
  [ESpot.MAPLE]: { 
    name: 'Клен', 
    category: ECategory.WOODCRAFTING,
    items: [EItem.VALUABLE_WOOD, EItem.MAPLE_LEAFS],
    locations: []
  },
  [ESpot.GOLDEN_OAK]: { 
    name: 'Золотой дуб', 
    category: ECategory.WOODCRAFTING,
    items: [EItem.VALUABLE_WOOD, EItem.PITCH],
    locations: []
  },
  [ESpot.DEAD_TREE]: { 
    name: 'Мёртвое дерево', 
    category: ECategory.WOODCRAFTING,
    items: [EItem.FIRST_CLASS_WOOD, EItem.STICKMAN],
    locations: []
  },

  // ECategory.FISHING

  // ECategory.MERCHANT
};

export const items: Record<EItem, IItem> = {
    [EItem.LIMESTONE]: {
        id: EItem.LIMESTONE,
        name: 'Известняк',
        category: ECategory.MINING,
        spots: [
            ESpot.SCATTERING_OF_PEBBLE,
            ESpot.SILVER_VEIN,
            ESpot.COPPER_VEIN
        ]
    },
    [EItem.PEBBLE]: {
        id: EItem.PEBBLE,
        name: 'Галька',
        category: ECategory.MINING,
        spots: [ESpot.SCATTERING_OF_PEBBLE]
    },
    [EItem.SILVER_ORE]: {
        id: EItem.SILVER_ORE,
        name: 'Серебряная руда',
        category: ECategory.MINING,
        spots: [ESpot.SILVER_VEIN]
    },
    [EItem.COPPER_ORE]: {
        id: EItem.COPPER_ORE,
        name: 'Медная руда',
        category: ECategory.MINING,
        spots: [ESpot.COPPER_VEIN]
    },
    [EItem.SANDSTONE]: {
        id: EItem.SANDSTONE,
        name: 'Песчаник',
        category: ECategory.MINING,
        spots: [
            ESpot.GOLD_VEIN,
            ESpot.IRON_VEIN,
            ESpot.SPINEL_VEIN
        ]
    },
    [EItem.GOLD_ORE]: {
        id: EItem.GOLD_ORE,
        name: 'Золотая руда',
        category: ECategory.MINING,
        spots: [ESpot.GOLD_VEIN]
    },
    [EItem.IRON_ORE]: {
        id: EItem.IRON_ORE,
        name: 'Железная руда',
        category: ECategory.MINING,
        spots: [ESpot.IRON_VEIN]
    },
    [EItem.SPINEL]: {
        id: EItem.SPINEL,
        name: 'Шпинель',
        category: ECategory.MINING,
        spots: [ESpot.SPINEL_VEIN]
    },
    [EItem.SLATE]: {
        id: EItem.SLATE,
        name: 'Сланец',
        category: ECategory.MINING,
        spots: [
            ESpot.BAUXITE_VEIN,
            ESpot.LIMONITE_VEIN,
            ESpot.AMETRINE_VEIN
        ]
    },
    [EItem.BAUXITE]: {
        id: EItem.BAUXITE,
        name: 'Боксит',
        category: ECategory.MINING,
        spots: [ESpot.BAUXITE_VEIN]
    },
    [EItem.LIMONITE]: {
        id: EItem.LIMONITE,
        name: 'Лимонит',
        category: ECategory.MINING,
        spots: [ESpot.LIMONITE_VEIN]
    },
    [EItem.AMETRINE]: {
        id: EItem.AMETRINE,
        name: 'Аметрин',
        category: ECategory.MINING,
        spots: [ESpot.AMETRINE_VEIN]
    },
    [EItem.GRANITE]: {
        id: EItem.GRANITE,
        name: 'Гранит',
        category: ECategory.MINING,
        spots: [
            ESpot.JADE_VEIN,
            ESpot.RHYOLITE_VEIN
        ]
    },
    [EItem.JADE]: {
        id: EItem.JADE,
        name: 'Нефрит',
        category: ECategory.MINING,
        spots: [ESpot.JADE_VEIN]
    },
    [EItem.RHYOLITE_CHIP]: {
        id: EItem.RHYOLITE_CHIP,
        name: 'Риолитовая крошка',
        category: ECategory.MINING,
        spots: [ESpot.RHYOLITE_VEIN]
    },
    [EItem.MARBLE]: {
        id: EItem.MARBLE,
        name: 'Мрамор',
        category: ECategory.MINING,
        spots: [ESpot.CORUNDUM_VEIN]
    },
    [EItem.CORUNDUM]: {
        id: EItem.CORUNDUM,
        name: 'Корунд',
        category: ECategory.MINING,
        spots: [ESpot.CORUNDUM_VEIN]
    },
    [EItem.MEADOW_COLLECTION]: {
        id: EItem.MEADOW_COLLECTION,
        name: 'Луговая коллекция',
        category: ECategory.HERBALISM,
        spots: [
            ESpot.CHAMPIGNON,
            ESpot.ROSEHIP
        ]
    },
    [EItem.CHAMPIGNON]: {
        id: EItem.CHAMPIGNON,
        name: 'Шампиньон',
        category: ECategory.HERBALISM,
        spots: [ESpot.CHAMPIGNON]
    },
    [EItem.ROSEHIP]: {
        id: EItem.ROSEHIP,
        name: 'Шиповник',
        category: ECategory.HERBALISM,
        spots: [ESpot.ROSEHIP]
    },
    [EItem.SWAMP_COLLECTION]: {
        id: EItem.SWAMP_COLLECTION,
        name: 'Болотная коллекция',
        category: ECategory.HERBALISM,
        spots: [
            ESpot.FERN,
            ESpot.RATTAN
        ]
    },
    [EItem.FERN_LEAVES]: {
        id: EItem.FERN_LEAVES,
        name: 'Листья папоротника',
        category: ECategory.HERBALISM,
        spots: [ESpot.FERN]
    },
    [EItem.GINSENG_ROOT]: {
        id: EItem.GINSENG_ROOT,
        name: 'Корень женьшеня',
        category: ECategory.HERBALISM,
        spots: [ESpot.GINSENG]
    },
    [EItem.NASTURTIUM_BLOSSOM]: {
        id: EItem.NASTURTIUM_BLOSSOM,
        name: 'Цветок настурции',
        category: ECategory.HERBALISM,
        spots: [ESpot.NASTURTIUM]
    },
    [EItem.RATTAN_STEMS]: {
        id: EItem.RATTAN_STEMS,
        name: 'Стебли ротанга',
        category: ECategory.HERBALISM,
        spots: [ESpot.RATTAN]
    },
    [EItem.FIELD_COLLECTION]: {
        id: EItem.FIELD_COLLECTION,
        name: 'Полевая коллекция',
        category: ECategory.HERBALISM,
        spots: [
            ESpot.CORIANDER,
            ESpot.ALMOND,
            ESpot.SNAPDRAGON
        ]
    },
    [EItem.CORIANDER]: {
        id: EItem.CORIANDER,
        name: 'Кориандр',
        category: ECategory.HERBALISM,
        spots: [ESpot.CORIANDER]
    },
    [EItem.ALMOND_FLOWERS]: {
        id: EItem.ALMOND_FLOWERS,
        name: 'Цветы миндаля',
        category: ECategory.HERBALISM,
        spots: [ESpot.ALMOND]
    },
    [EItem.FOREST_COLLECTION]: {
        id: EItem.FOREST_COLLECTION,
        name: 'Лесная коллекция',
        category: ECategory.HERBALISM,
        spots: [ESpot.BLUE_ORCHID]
    },
    [EItem.RED_FROG]: {
        id: EItem.RED_FROG,
        name: 'Красная лягушка',
        category: ECategory.HERBALISM,
        spots: [ESpot.BLUE_ORCHID]
    },
    [EItem.CENTIPEDE]: {
        id: EItem.CENTIPEDE,
        name: 'Сороконожка',
        category: ECategory.HERBALISM,
        spots: [ESpot.SNAPDRAGON]
    },
    [EItem.GARDEN_COLLECTION]: {
        id: EItem.GARDEN_COLLECTION,
        name: 'Садовная коллекция',
        category: ECategory.HERBALISM,
        spots: [ESpot.MULBERRY_TREE]
    },
    [EItem.SILKWORM_PUPA]: {
        id: EItem.SILKWORM_PUPA,
        name: 'Куколка шелкопряда',
        category: ECategory.HERBALISM,
        spots: [ESpot.MULBERRY_TREE]
    },
    [EItem.ROTTEN_WOOD]: {
        id: EItem.ROTTEN_WOOD,
        name: 'Гнилая древесина',
        category: ECategory.WOODCRAFTING,
        spots: [
            ESpot.YOUNG_BAMBOO,
            ESpot.BAMBOO
        ]
    },
    [EItem.BAMBOO_SHOOTS]: {
        id: EItem.BAMBOO_SHOOTS,
        name: 'Побеги бамбука',
        category: ECategory.WOODCRAFTING,
        spots: [ESpot.YOUNG_BAMBOO]
    },
    [EItem.BAMBOO_STALKS]: {
        id: EItem.BAMBOO_STALKS,
        name: 'Стебли бамбука',
        category: ECategory.WOODCRAFTING,
        spots: [ESpot.BAMBOO]
    },
    [EItem.ORDINARY_WOOD]: {
        id: EItem.ORDINARY_WOOD,
        name: 'Обычная древесина',
        category: ECategory.WOODCRAFTING,
        spots: [
            ESpot.PEACH_TREE,
            ESpot.TERMITE_MOUND,
            ESpot.SANDALWOOD,
            ESpot.CEDAR
        ]
    },
    [EItem.PEACH_BLOSSOMS]: {
        id: EItem.PEACH_BLOSSOMS,
        name: 'Цветы персика',
        category: ECategory.WOODCRAFTING,
        spots: [ESpot.PEACH_TREE]
    },
    [EItem.TERMITE]: {
        id: EItem.TERMITE,
        name: 'Термиты',
        category: ECategory.WOODCRAFTING,
        spots: [ESpot.TERMITE_MOUND]
    },
    [EItem.SANDAL]: {
        id: EItem.SANDAL,
        name: 'Сандал',
        category: ECategory.WOODCRAFTING,
        spots: [ESpot.SANDALWOOD]
    },
    [EItem.CEDAR_NEEDLES]: {
        id: EItem.CEDAR_NEEDLES,
        name: 'Хвоя кедра',
        category: ECategory.WOODCRAFTING,
        spots: [ESpot.CEDAR]
    },
    [EItem.HIGH_QUALITY_WOOD]: {
        id: EItem.HIGH_QUALITY_WOOD,
        name: 'Качественная древесина',
        category: ECategory.WOODCRAFTING,
        spots: [
            ESpot.SPRUCE,
            ESpot.GLOWING_MUSHROOM
        ]
    },
    [EItem.SPRUCE_NEEDLES]: {
        id: EItem.SPRUCE_NEEDLES,
        name: 'Хвоя ели',
        category: ECategory.WOODCRAFTING,
        spots: [ESpot.SPRUCE]
    },
    [EItem.GLOWING_BERRY]: {
        id: EItem.GLOWING_BERRY,
        name: 'Светящаяся ягода',
        category: ECategory.WOODCRAFTING,
        spots: [ESpot.GLOWING_MUSHROOM]
    },
    [EItem.VALUABLE_WOOD]: {
        id: EItem.VALUABLE_WOOD,
        name: 'Ценная древесина',
        category: ECategory.WOODCRAFTING,
        spots: [
            ESpot.MAPLE,
            ESpot.GOLDEN_OAK
        ]
    },
    [EItem.MAPLE_LEAFS]: {
        id: EItem.MAPLE_LEAFS,
        name: 'Кленовые листья',
        category: ECategory.WOODCRAFTING,
        spots: [ESpot.MAPLE]
    },
    [EItem.PITCH]: {
        id: EItem.PITCH,
        name: 'Смола',
        category: ECategory.WOODCRAFTING,
        spots: [ESpot.GOLDEN_OAK]
    },
    [EItem.FIRST_CLASS_WOOD]: {
        id: EItem.FIRST_CLASS_WOOD,
        name: 'Первоклассная древесина',
        category: ECategory.WOODCRAFTING,
        spots: [ESpot.DEAD_TREE]
    },
    [EItem.STICKMAN]: {
        id: EItem.STICKMAN,
        name: 'Чучело',
        category: ECategory.WOODCRAFTING,
        spots: [ESpot.DEAD_TREE]
    }
};
