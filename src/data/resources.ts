export type Location = {
    x: number
    y: number
    z: number
}

export enum ECategory {
    MINING = 'mining',
    HERBALISM = 'herbalism',
    WOODCRAFTING = 'woodcrafting',
    MERCHANT = 'merchant',
    FISHING = 'fishing',
    SHADOW = 'shadow',
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
    RETAILER = 'retailer',
    M1 = 'm1',
    M2 = 'm2',
    M3 = 'm3',
    M4 = 'm4',
    M5 = 'm5',
    M6 = 'm6',
    M7 = 'm7',
    M8 = 'm8',
    M9 = 'm9',
    M10 = 'm10',
    M11 = 'm11',
    M12 = 'm12',
    M13 = 'm13',

    //ECategory.SHADOW
    SHADOW_1 = 'shadow-1',
    SHADOW_2 = 'shadow-2',
    SHADOW_3 = 'shadow-3',
    SHADOW_4 = 'shadow-4',
    SHADOW_5 = 'shadow-5',
    SHADOW_6 = 'shadow-6',
    SHADOW_7 = 'shadow-7',
    SHADOW_8 = 'shadow-8',
    SHADOW_9 = 'shadow-9',
    SHADOW_10 = 'shadow-10',
    SHADOW_11 = 'shadow-11',
    SHADOW_12 = 'shadow-12',
    SHADOW_13 = 'shadow-13',
    SHADOW_14 = 'shadow-14',
    SHADOW_15 = 'shadow-15',

    //ECategory.OTHER
    PORTAL = 'portal'
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
    MAPLE_LEAF = 'maple-leaf',
    PITCH = 'pitch',
    FIRST_CLASS_WOOD = 'first-class-wood',
    STICKMAN = 'stickman',

    //ECategory.MERCHANT
    SILKWORM_COCOON = 'silkworm-cocoon',
    PORK_TENDERLOIN = 'pork-tenderloin',
    PEARL = 'pearl',
    RAPESEED_OIL = 'rapeseed-oil',
    LAMB_TENDERLOIN = 'lamb-tenderloin',
    LIGHT_FEATHER = 'light-feather',
    HOT_PEPPER = 'hot-pepper',
    DRAFT = 'draft',
    MALT = 'malt',
    WHEAT_FLOUR = 'wheat-flour',
    AMBERGRIS = 'ambergris',
    WOLF_WOOL = 'wolf-wool',
    SOUP_SET = 'soup-set',
    SHELL_FRAGMENT = 'shell-fragment',
    PORK_HAM = 'pork-ham',
    CORAL = 'coral',
    VINEGAR = 'vinegar',
    WALNUTS = 'walnuts',
    LAMB_LEG = 'lamb-leg',
    DOWN_FEATHER = 'down-feather',
    ONION = 'onion',
    BAMBOO_SCROLL = 'bamboo-scroll',
    RICE = 'rice',
    STARCH = 'starch',
    HYACINTH_LIQUEUR = 'hyacinth-liqueur',
    BEEF_TENDERLOIN = 'beef-tenderloin',
    PORK_SHANK = 'pork-shank',
    PORK_OFFAL = 'pork-offal',
    SEASHELL = 'seashell',
    SALT = 'salt',
    PINE_NUTS = 'pine-nuts',
    LAMB_OFFAL = 'lamb-offal',
    MOUNTAIN_HERB_INFUSION = 'mountain-herb-infusion',
    POTATO = 'potato',
    TWINE = 'twine',
    SOYBEANS = 'soybeans',
    BONE_MEAL = 'bone-meal',
    GLASS_BEAD = 'glass-bead',
    BOAR_OFFAL = 'boar-offal',
    SEAWEED = 'seaweed',
    SPICE_MIX = 'spice-mix',
    LAMB_SHOULDER = 'lamb-shoulder',
    HONEY = 'honey',
    INK = 'ink',
    BEANS = 'beans',
    CINNAMON = 'cinnamon',
    SILVER_FUR = 'silver-fur',
    BEEF_OFFAL = 'beef-offal',
    CHICKEN_EGG = 'chicken-egg',
    BAY_LEAF = 'bay-leaf',
    DUCK_FILLET = 'duck-fillet',
    CHICKEN_FILLET = 'chicken-fillet',
    CARPENTRY_GLUE = 'carpentry-glue',
    PHOENIX_FEATHERS = 'phoenix-feathers',

    // ECategory.SHADOW
    SHADOW_1 = 'shadow-1',
    SHADOW_2 = 'shadow-2',
    SHADOW_3 = 'shadow-3',
    SHADOW_4 = 'shadow-4',
    SHADOW_5 = 'shadow-5',
    SHADOW_6 = 'shadow-6',
    SHADOW_7 = 'shadow-7',
    SHADOW_8 = 'shadow-8',
    SHADOW_9 = 'shadow-9',
    SHADOW_10 = 'shadow-10',
    SHADOW_11 = 'shadow-11',
    SHADOW_12 = 'shadow-12',
    SHADOW_13 = 'shadow-13',
    SHADOW_14 = 'shadow-14',
    SHADOW_15 = 'shadow-15',

    // ECategory.OTHER
    PORTAL = 'portal'
}

export interface IItem {
  id: EItem
  name: string
  category: ECategory
  spots: ESpot[]
}

export const categories: Record<ECategory, ICategory> = {
  [ECategory.MINING]: { name: 'Горное дело' },
  [ECategory.HERBALISM]: { name: 'Травничество' },
  [ECategory.WOODCRAFTING]: { name: 'Заготовка древесины' },
  [ECategory.MERCHANT]: { name: 'Ресурсы у торговцев' },
  [ECategory.FISHING]: { name: 'Рыбалка' },
  [ECategory.SHADOW]: { name: 'Мир теней' },
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
    items: [EItem.VALUABLE_WOOD, EItem.MAPLE_LEAF],
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

  // ECategory.MERCHANT
  [ESpot.RETAILER]: { 
    name: 'Перекупщик Торговец материалами', 
    category: ECategory.MERCHANT,
    items: [
      EItem.SILKWORM_COCOON,
      EItem.PEARL,
      EItem.LIGHT_FEATHER,
      EItem.DRAFT,
      EItem.AMBERGRIS,
      EItem.SHELL_FRAGMENT,
      EItem.CORAL,
      EItem.DOWN_FEATHER,
      EItem.BAMBOO_SCROLL,
      EItem.HYACINTH_LIQUEUR,
      EItem.TWINE,
      EItem.BONE_MEAL,
      EItem.GLASS_BEAD,
      EItem.CINNAMON,
      EItem.SILVER_FUR,
      EItem.BAY_LEAF,
      EItem.CARPENTRY_GLUE,
      EItem.PHOENIX_FEATHERS
    ],
    locations: [
      {x: 5543, y: -1682, z: 20}, {x: 1705, y: 552, z: 6}, {x: -2797, y: 1169, z: 337},
    ]
  },
  [ESpot.M1]: { 
    name: 'Суланские товары Хоакин', 
    category: ECategory.MERCHANT,
    items: [
      EItem.PORK_TENDERLOIN,
      EItem.PORK_HAM,
      EItem.PORK_SHANK,
      EItem.PORK_OFFAL,
      EItem.CHICKEN_EGG,
      EItem.DUCK_FILLET,
      EItem.CHICKEN_FILLET,
      EItem.CARPENTRY_GLUE,
      EItem.PHOENIX_FEATHERS
    ],
    locations: [
      {x: 5536, y: -1236, z: 56}, {x: 2124, y: 637, z: 6}
    ]
  },
  [ESpot.M2]: { 
    name: 'Товары Фалмари Блисс Серебряный Родник', 
    category: ECategory.MERCHANT,
    items: [
      EItem.PEARL,
      EItem.CORAL,
      EItem.SEASHELL,
      EItem.SEAWEED
    ],
    locations: [
      {x: 5592, y: -2358, z: 17}, {x: 2115, y: 587, z: 3}
    ]
  },
  [ESpot.M3]: { 
    name: 'Товары фракции Боровичок-торговец', 
    category: ECategory.MERCHANT,
    items: [
      EItem.RAPESEED_OIL,
      EItem.VINEGAR,
      EItem.SALT,
      EItem.SPICE_MIX
    ],
    locations: [
      {x: 4960, y: -1923, z: 40}, {x: 2100, y: 575, z: 4}
    ]
  },
  [ESpot.M4]: { 
    name: 'Товары Озерной деревни Лавочница Лейна', 
    category: ECategory.MERCHANT,
    items: [
      EItem.SILKWORM_COCOON,
      EItem.SHELL_FRAGMENT,
      EItem.WALNUTS,
      EItem.PINE_NUTS
    ],
    locations: [
      {x: 5422, y: -303, z: 3}, {x: 2111, y: 657, z: 6}
    ]
  },
  [ESpot.M5]: { 
    name: 'Товары из Сноу-Шу Послушник Хансу', 
    category: ECategory.MERCHANT,
    items: [
      EItem.LAMB_TENDERLOIN,
      EItem.LAMB_LEG,
      EItem.LAMB_OFFAL,
      EItem.LAMB_SHOULDER,
      EItem.BAY_LEAF
    ],
    locations: [
      {x: 4818, y: 1648, z: 28}, {x: 1983, y: 559, z: 6}
    ]
  },
  [ESpot.M6]: { 
    name: 'Товары Крылатых Леланд', 
    category: ECategory.MERCHANT,
    items: [
      EItem.LIGHT_FEATHER,
      EItem.DOWN_FEATHER,
      EItem.MOUNTAIN_HERB_INFUSION
    ],
    locations: [
      {x: 5169, y: 1170, z: 12}, {x: 2166, y: 668, z: 3}
    ]
  },
  [ESpot.M7]: { 
    name: 'Товары фракции Сваури', 
    category: ECategory.MERCHANT,
    items: [
      EItem.HOT_PEPPER,
      EItem.ONION,
      EItem.POTATO,
      EItem.HONEY
    ],
    locations: [
      {x: 4519, y: 869, z: 19}, {x: 1994, y: 516, z: 6}
    ]
  },
  [ESpot.M8]: { 
    name: 'Товары фракции Наставник Буань', 
    category: ECategory.MERCHANT,
    items: [
      EItem.DRAFT,
      EItem.BAMBOO_SCROLL,
      EItem.INK,
      EItem.TWINE
    ],
    locations: [
      {x: 4764, y: 136, z: 151}, {x: 2004, y: 563, z: 6}
    ]
  },
  [ESpot.M9]: { 
    name: 'Товары Кноттля Венки Полная Сумка', 
    category: ECategory.MERCHANT,
    items: [
      EItem.MALT,
      EItem.RICE,
      EItem.SOYBEANS,
      EItem.BEANS
    ],
    locations: [
      {x: 273, y: 1808, z: 24}, {x: 2059, y: 561, z: 6}
    ]
  },
  [ESpot.M10]: { 
    name: 'Товары Астериона Люлан', 
    category: ECategory.MERCHANT,
    items: [
      EItem.WHEAT_FLOUR,
      EItem.STARCH,
      EItem.BONE_MEAL,
      EItem.CINNAMON
    ],
    locations: [
      {x: 2041, y: 562, z: 6}
    ]
  },
  [ESpot.M11]: { 
    name: 'Товары Девятихвостых Свелли', 
    category: ECategory.MERCHANT,
    items: [
      EItem.AMBERGRIS,
      EItem.HYACINTH_LIQUEUR,
      EItem.GLASS_BEAD,
      EItem.SILVER_FUR
    ],
    locations: [
      {x: 574, y: 3900, z: 35}, {x: 1941, y: 534, z: 6}
    ]
  },
  [ESpot.M12]: { 
    name: 'Товары Северных волков Шанья', 
    category: ECategory.MERCHANT,
    items: [
      EItem.WOLF_WOOL
    ],
    locations: [
      {x: -2855, y: -1344, z: 30}, {x: 2031, y: 656, z: 6}
    ]
  },
  [ESpot.M13]: { 
    name: 'Товары Калахара Интендант Гилард', 
    category: ECategory.MERCHANT,
    items: [
      EItem.SOUP_SET,
      EItem.BEEF_TENDERLOIN,
      EItem.BOAR_OFFAL,
      EItem.BEEF_OFFAL
    ],
    locations: [
      {x: -2794, y: 1122, z: 338}, {x: 2064, y: 639, z: 6}
    ]
  },

  // ECategory.FISHING

  
  // ECategory.SHADOW
  [ESpot.SHADOW_1]: { 
    name: 'Мир теней 1 ур.', 
    category: ECategory.SHADOW,
    items: [],
    locations: []
  },
  [ESpot.SHADOW_2]: { 
      name: 'Мир теней 2 ур.', 
      category: ECategory.SHADOW,
      items: [],
      locations: []
  },
  [ESpot.SHADOW_3]: { 
      name: 'Мир теней 3 ур.', 
      category: ECategory.SHADOW,
      items: [],
      locations: []
  },
  [ESpot.SHADOW_4]: { 
      name: 'Мир теней 4 ур.', 
      category: ECategory.SHADOW,
      items: [],
      locations: []
  },
  [ESpot.SHADOW_5]: { 
      name: 'Мир теней 5 ур.', 
      category: ECategory.SHADOW,
      items: [],
      locations: []
  },
  [ESpot.SHADOW_6]: { 
      name: 'Мир теней 6 ур.', 
      category: ECategory.SHADOW,
      items: [],
      locations: []
  },
  [ESpot.SHADOW_7]: { 
      name: 'Мир теней 7 ур.', 
      category: ECategory.SHADOW,
      items: [],
      locations: []
  },
  [ESpot.SHADOW_8]: { 
      name: 'Мир теней 8 ур.', 
      category: ECategory.SHADOW,
      items: [],
      locations: []
  },
  [ESpot.SHADOW_9]: { 
      name: 'Мир теней 9 ур.', 
      category: ECategory.SHADOW,
      items: [],
      locations: []
  },
  [ESpot.SHADOW_10]: { 
      name: 'Мир теней 10 ур.', 
      category: ECategory.SHADOW,
      items: [],
      locations: []
  },
  [ESpot.SHADOW_11]: { 
      name: 'Мир теней 11 ур.', 
      category: ECategory.SHADOW,
      items: [],
      locations: []
  },
  [ESpot.SHADOW_12]: { 
      name: 'Мир теней 12 ур.', 
      category: ECategory.SHADOW,
      items: [],
      locations: []
  },
  [ESpot.SHADOW_13]: { 
      name: 'Мир теней 13 ур.', 
      category: ECategory.SHADOW,
      items: [],
      locations: []
  },
  [ESpot.SHADOW_14]: { 
      name: 'Мир теней 14 ур.', 
      category: ECategory.SHADOW,
      items: [],
      locations: []
  },
  [ESpot.SHADOW_15]: { 
      name: 'Мир теней 15 ур.', 
      category: ECategory.SHADOW,
      items: [],
      locations: []
  },

  // ECategory.OTHER
  [ESpot.PORTAL]: { 
    name: 'Портал', 
    category: ECategory.OTHER,
    items: [],
    locations: [
      {x: 5939, y: -1781, z: 10}, {x: 5360, y: -1534, z: 3}, {x: 5473, y: -1984, z: 9},
      {x: 5454, y: -1191, z: 111}, {x: 4367, y: -1866, z: 36}, {x: 5405, y: -2435, z: 3},
      {x: 5184, y: -2745, z: 21}, {x: 5843, y: -2978, z: 1}, {x: 4950, y: -2491, z: 43},
      {x: 5123, y: -1967, z: 35}, {x: 4106, y: -1010, z: 2}, {x: 5587, y: -665, z: 1},
      {x: 5351, y: -80, z: 13}, {x: 4807, y: 136, z: 143}, {x: 4775, y: 1390, z: 13},
      {x: 3275, y: 246, z: 80}, {x: 1929, y: 200, z: 56}, {x: 2127, y: 573, z: 3},
      {x: 1573, y: 1352, z: 133}, {x: 2078, y: 1527, z: 183}, {x: 903, y: -418, z: 12},
      {x: 219, y: 256, z: 52}, {x: 172, y: 1822, z: 18}, {x: -1349, y: 3270, z: 1},
      {x: 403, y: 3712, z: 16}, {x: -2304, y: 872, z: 80}, {x: -2672, y: 886, z: 233},
      {x: -2986, y: 955, z: 241}, {x: -1593, y: -791, z: 23}, {x: -1853, y: -129, z: 13},
      {x: -604, y: 55, z: 27}, {x: -1885, y: -3303, z: 19}, {x: -1177, y: -2436, z: 51},
      {x: 195, y: -1895, z: 0}, {x: 2814, y: -475, z: -22}, {x: 1760, y: -1920, z: -67},
      {x: -2768, y: -3742, z: 262}, {x: -3412, y: -3478, z: 91}, {x: 674, y: -2820, z: -50},
      {x: -44, y: -3300, z: -140}, {x: 5098, y: 2896, z: 278}, {x: -2711, y: 3145, z: -18},
      {x: -6095, y: 2899, z: 122}, {x: -3642, y: 202, z: 234}, {x: -4688, y: -3664, z: -142},
      {x: -4720, y: -3662, z: 8}, {x: -446, y: -3761, z: -288}, {x: 1700, y: -3265, z: 29},
      {x: 3399, y: -1884, z: 16}, {x: 3249, y: -269, z: 147}
    ]
  },
};

export const items: Record<EItem, IItem> = {
    // ECategory.MINING
    [EItem.AMETRINE]: {
      id: EItem.AMETRINE,
      name: 'Аметрин',
      category: ECategory.MINING,
      spots: [ESpot.AMETRINE_VEIN]
    },
    [EItem.BAUXITE]: {
      id: EItem.BAUXITE,
      name: 'Боксит',
      category: ECategory.MINING,
      spots: [ESpot.BAUXITE_VEIN]
    },
    [EItem.PEBBLE]: {
      id: EItem.PEBBLE,
      name: 'Галька',
      category: ECategory.MINING,
      spots: [ESpot.SCATTERING_OF_PEBBLE]
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
    [EItem.IRON_ORE]: {
      id: EItem.IRON_ORE,
      name: 'Железная руда',
      category: ECategory.MINING,
      spots: [ESpot.IRON_VEIN]
    },
    [EItem.GOLD_ORE]: {
      id: EItem.GOLD_ORE,
      name: 'Золотая руда',
      category: ECategory.MINING,
      spots: [ESpot.GOLD_VEIN]
    },
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
    [EItem.CORUNDUM]: {
      id: EItem.CORUNDUM,
      name: 'Корунд',
      category: ECategory.MINING,
      spots: [ESpot.CORUNDUM_VEIN]
    },
    [EItem.LIMONITE]: {
      id: EItem.LIMONITE,
      name: 'Лимонит',
      category: ECategory.MINING,
      spots: [ESpot.LIMONITE_VEIN]
    },
    [EItem.COPPER_ORE]: {
      id: EItem.COPPER_ORE,
      name: 'Медная руда',
      category: ECategory.MINING,
      spots: [ESpot.COPPER_VEIN]
    },
    [EItem.MARBLE]: {
      id: EItem.MARBLE,
      name: 'Мрамор',
      category: ECategory.MINING,
      spots: [ESpot.CORUNDUM_VEIN]
    },
    [EItem.JADE]: {
      id: EItem.JADE,
      name: 'Нефрит',
      category: ECategory.MINING,
      spots: [ESpot.JADE_VEIN]
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
    [EItem.RHYOLITE_CHIP]: {
      id: EItem.RHYOLITE_CHIP,
      name: 'Риолитовая крошка',
      category: ECategory.MINING,
      spots: [ESpot.RHYOLITE_VEIN]
    },
    [EItem.SILVER_ORE]: {
      id: EItem.SILVER_ORE,
      name: 'Серебряная руда',
      category: ECategory.MINING,
      spots: [ESpot.SILVER_VEIN]
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
    [EItem.SPINEL]: {
      id: EItem.SPINEL,
      name: 'Шпинель',
      category: ECategory.MINING,
      spots: [ESpot.SPINEL_VEIN]
    },

    // ECategory.HERBALISM
    [EItem.SWAMP_COLLECTION]: {
      id: EItem.SWAMP_COLLECTION,
      name: 'Болотный сбор',
      category: ECategory.HERBALISM,
      spots: [
          ESpot.FERN,
          ESpot.RATTAN
      ]
    },
    [EItem.GINSENG_ROOT]: {
      id: EItem.GINSENG_ROOT,
      name: 'Корень женьшеня',
      category: ECategory.HERBALISM,
      spots: [ESpot.GINSENG]
    },
    [EItem.CORIANDER]: {
      id: EItem.CORIANDER,
      name: 'Кориандр',
      category: ECategory.HERBALISM,
      spots: [ESpot.CORIANDER]
    },
    [EItem.RED_FROG]: {
      id: EItem.RED_FROG,
      name: 'Красная лягушка',
      category: ECategory.HERBALISM,
      spots: [ESpot.BLUE_ORCHID]
    },
    [EItem.SILKWORM_PUPA]: {
      id: EItem.SILKWORM_PUPA,
      name: 'Куколка шелкопряда',
      category: ECategory.HERBALISM,
      spots: [ESpot.MULBERRY_TREE]
    },
    [EItem.FOREST_COLLECTION]: {
      id: EItem.FOREST_COLLECTION,
      name: 'Лесной сбор',
      category: ECategory.HERBALISM,
      spots: [ESpot.BLUE_ORCHID]
    },
    [EItem.FERN_LEAVES]: {
      id: EItem.FERN_LEAVES,
      name: 'Листья папоротника',
      category: ECategory.HERBALISM,
      spots: [ESpot.FERN]
    },
    [EItem.MEADOW_COLLECTION]: {
      id: EItem.MEADOW_COLLECTION,
      name: 'Луговой сбор',
      category: ECategory.HERBALISM,
      spots: [
          ESpot.CHAMPIGNON,
          ESpot.ROSEHIP
      ]
    },
    [EItem.FIELD_COLLECTION]: {
      id: EItem.FIELD_COLLECTION,
      name: 'Полевой сбор',
      category: ECategory.HERBALISM,
      spots: [
          ESpot.CORIANDER,
          ESpot.ALMOND,
          ESpot.SNAPDRAGON
      ]
    },
    [EItem.GARDEN_COLLECTION]: {
      id: EItem.GARDEN_COLLECTION,
      name: 'Садовый сбор',
      category: ECategory.HERBALISM,
      spots: [ESpot.MULBERRY_TREE]
    },
    [EItem.CENTIPEDE]: {
      id: EItem.CENTIPEDE,
      name: 'Многоножка',
      category: ECategory.HERBALISM,
      spots: [ESpot.SNAPDRAGON]
    },
    [EItem.RATTAN_STEMS]: {
      id: EItem.RATTAN_STEMS,
      name: 'Стебли ротанга',
      category: ECategory.HERBALISM,
      spots: [ESpot.RATTAN]
    },
    [EItem.NASTURTIUM_BLOSSOM]: {
      id: EItem.NASTURTIUM_BLOSSOM,
      name: 'Цветок настурции',
      category: ECategory.HERBALISM,
      spots: [ESpot.NASTURTIUM]
    },
    [EItem.ALMOND_FLOWERS]: {
      id: EItem.ALMOND_FLOWERS,
      name: 'Цветы миндаля',
      category: ECategory.HERBALISM,
      spots: [ESpot.ALMOND]
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

    // ECategory.WOODCRAFTING
    [EItem.ROTTEN_WOOD]: {
      id: EItem.ROTTEN_WOOD,
      name: 'Гнилая древесина',
      category: ECategory.WOODCRAFTING,
      spots: [
          ESpot.YOUNG_BAMBOO,
          ESpot.BAMBOO
      ]
    },
    [EItem.SPRUCE_NEEDLES]: {
      id: EItem.SPRUCE_NEEDLES,
      name: 'Еловые иголки',
      category: ECategory.WOODCRAFTING,
      spots: [ESpot.SPRUCE]
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
    [EItem.CEDAR_NEEDLES]: {
      id: EItem.CEDAR_NEEDLES,
      name: 'Кедровые иголки',
      category: ECategory.WOODCRAFTING,
      spots: [ESpot.CEDAR]
    },
    [EItem.MAPLE_LEAF]: {
      id: EItem.MAPLE_LEAF,
      name: 'Кленовый лист',
      category: ECategory.WOODCRAFTING,
      spots: [ESpot.MAPLE]
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
    [EItem.FIRST_CLASS_WOOD]: {
      id: EItem.FIRST_CLASS_WOOD,
      name: 'Первосортная древесина',
      category: ECategory.WOODCRAFTING,
      spots: [ESpot.DEAD_TREE]
    },
    [EItem.BAMBOO_SHOOTS]: {
      id: EItem.BAMBOO_SHOOTS,
      name: 'Побеги бамбука',
      category: ECategory.WOODCRAFTING,
      spots: [ESpot.YOUNG_BAMBOO]
    },
    [EItem.SANDAL]: {
      id: EItem.SANDAL,
      name: 'Сандал',
      category: ECategory.WOODCRAFTING,
      spots: [ESpot.SANDALWOOD]
    },
    [EItem.GLOWING_BERRY]: {
      id: EItem.GLOWING_BERRY,
      name: 'Светящаяся ягода',
      category: ECategory.WOODCRAFTING,
      spots: [ESpot.GLOWING_MUSHROOM]
    },
    [EItem.PITCH]: {
      id: EItem.PITCH,
      name: 'Смола',
      category: ECategory.WOODCRAFTING,
      spots: [ESpot.GOLDEN_OAK]
    },
    [EItem.BAMBOO_STALKS]: {
      id: EItem.BAMBOO_STALKS,
      name: 'Стебли бамбука',
      category: ECategory.WOODCRAFTING,
      spots: [ESpot.BAMBOO]
    },
    [EItem.TERMITE]: {
      id: EItem.TERMITE,
      name: 'Термит',
      category: ECategory.WOODCRAFTING,
      spots: [ESpot.TERMITE_MOUND]
    },
    [EItem.PEACH_BLOSSOMS]: {
      id: EItem.PEACH_BLOSSOMS,
      name: 'Цветы персика',
      category: ECategory.WOODCRAFTING,
      spots: [ESpot.PEACH_TREE]
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
    [EItem.STICKMAN]: {
      id: EItem.STICKMAN,
      name: 'Палочник',
      category: ECategory.WOODCRAFTING,
      spots: [ESpot.DEAD_TREE]
    },
    
    //ECategory.MERCHANT
    [EItem.SILKWORM_COCOON]: {
      id: EItem.SILKWORM_COCOON,
      name: 'Кокон шелкопряда',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M4]
    },
    [EItem.PORK_TENDERLOIN]: {
      id: EItem.PORK_TENDERLOIN,
      name: 'Свиная вырезка',
      category: ECategory.MERCHANT,
      spots: [ESpot.M1]
    },
    [EItem.PEARL]: {
      id: EItem.PEARL,
      name: 'Жемчужина',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M2]
    },
    [EItem.RAPESEED_OIL]: {
      id: EItem.RAPESEED_OIL,
      name: 'Рапсовое масло',
      category: ECategory.MERCHANT,
      spots: [ESpot.M3]
    },
    [EItem.LAMB_TENDERLOIN]: {
      id: EItem.LAMB_TENDERLOIN,
      name: 'Баранья вырезка',
      category: ECategory.MERCHANT,
      spots: [ESpot.M5]
    },
    [EItem.LIGHT_FEATHER]: {
      id: EItem.LIGHT_FEATHER,
      name: 'Легкое перышко',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M6]
    },
    [EItem.HOT_PEPPER]: {
      id: EItem.HOT_PEPPER,
      name: 'Острый перец',
      category: ECategory.MERCHANT,
      spots: [ESpot.M7]
    },
    [EItem.DRAFT]: {
      id: EItem.DRAFT,
      name: 'Черновик',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M8]
    },
    [EItem.MALT]: {
      id: EItem.MALT,
      name: 'Солод',
      category: ECategory.MERCHANT,
      spots: [ESpot.M9]
    },
    [EItem.WHEAT_FLOUR]: {
      id: EItem.WHEAT_FLOUR,
      name: 'Пшеничная мука',
      category: ECategory.MERCHANT,
      spots: [ESpot.M10]
    },
    [EItem.AMBERGRIS]: {
      id: EItem.AMBERGRIS,
      name: 'Амбра',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M11]
    },
    [EItem.WOLF_WOOL]: {
      id: EItem.WOLF_WOOL,
      name: 'Волчья шерсть',
      category: ECategory.MERCHANT,
      spots: [ESpot.M12]
    },
    [EItem.SOUP_SET]: {
      id: EItem.SOUP_SET,
      name: 'Суповой набор',
      category: ECategory.MERCHANT,
      spots: [ESpot.M13]
    },
    [EItem.SHELL_FRAGMENT]: {
      id: EItem.SHELL_FRAGMENT,
      name: 'Кусочек панциря',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M4]
    },
    [EItem.PORK_HAM]: {
      id: EItem.PORK_HAM,
      name: 'Свиной окорок',
      category: ECategory.MERCHANT,
      spots: [ESpot.M1]
    },
    [EItem.CORAL]: {
      id: EItem.CORAL,
      name: 'Коралл',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M2]
    },
    [EItem.VINEGAR]: {
      id: EItem.VINEGAR,
      name: 'Уксус',
      category: ECategory.MERCHANT,
      spots: [ESpot.M3]
    },
    [EItem.WALNUTS]: {
      id: EItem.WALNUTS,
      name: 'Грецкие орехи',
      category: ECategory.MERCHANT,
      spots: [ESpot.M4]
    },
    [EItem.LAMB_LEG]: {
      id: EItem.LAMB_LEG,
      name: 'Баранья нога',
      category: ECategory.MERCHANT,
      spots: [ESpot.M5]
    },
    [EItem.DOWN_FEATHER]: {
      id: EItem.DOWN_FEATHER,
      name: 'Пуховое перышко',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M6]
    },
    [EItem.ONION]: {
      id: EItem.ONION,
      name: 'Репчатый лук',
      category: ECategory.MERCHANT,
      spots: [ESpot.M7]
    },
    [EItem.BAMBOO_SCROLL]: {
      id: EItem.BAMBOO_SCROLL,
      name: 'Бамбуковый свиток',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M8]
    },
    [EItem.RICE]: {
      id: EItem.RICE,
      name: 'Рис',
      category: ECategory.MERCHANT,
      spots: [ESpot.M9]
    },
    [EItem.STARCH]: {
      id: EItem.STARCH,
      name: 'Крахмал',
      category: ECategory.MERCHANT,
      spots: [ESpot.M10]
    },
    [EItem.HYACINTH_LIQUEUR]: {
      id: EItem.HYACINTH_LIQUEUR,
      name: 'Гиацинтовый ликер',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M11]
    },
    [EItem.BEEF_TENDERLOIN]: {
      id: EItem.BEEF_TENDERLOIN,
      name: 'Говяжья вырезка',
      category: ECategory.MERCHANT,
      spots: [ESpot.M13]
    },
    [EItem.PORK_SHANK]: {
      id: EItem.PORK_SHANK,
      name: 'Свиные голяшки',
      category: ECategory.MERCHANT,
      spots: [ESpot.M1]
    },
    [EItem.SEASHELL]: {
      id: EItem.SEASHELL,
      name: 'Ракушка',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M2]
    },
    [EItem.SALT]: {
      id: EItem.SALT,
      name: 'Соль',
      category: ECategory.MERCHANT,
      spots: [ESpot.M3]
    },
    [EItem.PINE_NUTS]: {
      id: EItem.PINE_NUTS,
      name: 'Кедровые орешки',
      category: ECategory.MERCHANT,
      spots: [ESpot.M4]
    },
    [EItem.LAMB_OFFAL]: {
      id: EItem.LAMB_OFFAL,
      name: 'Бараньи потроха',
      category: ECategory.MERCHANT,
      spots: [ESpot.M5]
    },
    [EItem.MOUNTAIN_HERB_INFUSION]: {
      id: EItem.MOUNTAIN_HERB_INFUSION,
      name: 'Настой горных трав',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M6]
    },
    [EItem.POTATO]: {
      id: EItem.POTATO,
      name: 'Картофель',
      category: ECategory.MERCHANT,
      spots: [ESpot.M7]
    },
    [EItem.TWINE]: {
      id: EItem.TWINE,
      name: 'Бечевка',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M8]
    },
    [EItem.SOYBEANS]: {
      id: EItem.SOYBEANS,
      name: 'Соевые бобы',
      category: ECategory.MERCHANT,
      spots: [ESpot.M9]
    },
    [EItem.BONE_MEAL]: {
      id: EItem.BONE_MEAL,
      name: 'Костная мука',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M10]
    },
    [EItem.GLASS_BEAD]: {
      id: EItem.GLASS_BEAD,
      name: 'Стеклянная бусина',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M11]
    },
    [EItem.BOAR_OFFAL]: {
      id: EItem.BOAR_OFFAL,
      name: 'Потроха вепря',
      category: ECategory.MERCHANT,
      spots: [ESpot.M13]
    },
    [EItem.PORK_OFFAL]: {
      id: EItem.PORK_OFFAL,
      name: 'Потроха вепря',
      category: ECategory.MERCHANT,
      spots: [ESpot.M1]
    },
    [EItem.SEAWEED]: {
      id: EItem.SEAWEED,
      name: 'Морские водоросли',
      category: ECategory.MERCHANT,
      spots: [ESpot.M2]
    },
    [EItem.SPICE_MIX]: {
      id: EItem.SPICE_MIX,
      name: 'Смесь приправ',
      category: ECategory.MERCHANT,
      spots: [ESpot.M3]
    },
    [EItem.LAMB_SHOULDER]: {
      id: EItem.LAMB_SHOULDER,
      name: 'Баранья лопатка',
      category: ECategory.MERCHANT,
      spots: [ESpot.M5]
    },
    [EItem.HONEY]: {
      id: EItem.HONEY,
      name: 'Мед',
      category: ECategory.MERCHANT,
      spots: [ESpot.M7]
    },
    [EItem.INK]: {
      id: EItem.INK,
      name: 'Чернила',
      category: ECategory.MERCHANT,
      spots: [ESpot.M8]
    },
    [EItem.BEANS]: {
      id: EItem.BEANS,
      name: 'Фасоль',
      category: ECategory.MERCHANT,
      spots: [ESpot.M9]
    },
    [EItem.CINNAMON]: {
      id: EItem.CINNAMON,
      name: 'Корица',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M10]
    },
    [EItem.SILVER_FUR]: {
      id: EItem.SILVER_FUR,
      name: 'Серебристый мех',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M11]
    },
    [EItem.BEEF_OFFAL]: {
      id: EItem.BEEF_OFFAL,
      name: 'Говяжьи потроха',
      category: ECategory.MERCHANT,
      spots: [ESpot.M13]
    },
    [EItem.CHICKEN_EGG]: {
      id: EItem.CHICKEN_EGG,
      name: 'Куриное яйцо',
      category: ECategory.MERCHANT,
      spots: [ESpot.M1]
    },
    [EItem.BAY_LEAF]: {
      id: EItem.BAY_LEAF,
      name: 'Лавровый лист',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M5]
    },
    [EItem.DUCK_FILLET]: {
      id: EItem.DUCK_FILLET,
      name: 'Утиное филе',
      category: ECategory.MERCHANT,
      spots: [ESpot.M1]
    },
    [EItem.CHICKEN_FILLET]: {
      id: EItem.CHICKEN_FILLET,
      name: 'Куриное филе',
      category: ECategory.MERCHANT,
      spots: [ESpot.M1]
    },
    [EItem.CARPENTRY_GLUE]: {
      id: EItem.CARPENTRY_GLUE,
      name: 'Столярный клей',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M1]
    },
    [EItem.PHOENIX_FEATHERS]: {
      id: EItem.PHOENIX_FEATHERS,
      name: 'Перья Феникса',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M1]
    },

    //ECategory.SHADOW
    [EItem.SHADOW_1]: {
      id: EItem.SHADOW_1,
      name: 'Уровень 1',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_1]
    },
    [EItem.SHADOW_2]: {
      id: EItem.SHADOW_2,
      name: 'Уровень 2',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_2]
    },
    [EItem.SHADOW_3]: {
      id: EItem.SHADOW_3,
      name: 'Уровень 3',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_3]
    },
    [EItem.SHADOW_4]: {
      id: EItem.SHADOW_4,
      name: 'Уровень 4',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_4]
    },
    [EItem.SHADOW_5]: {
      id: EItem.SHADOW_5,
      name: 'Уровень 5',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_5]
    },
    [EItem.SHADOW_6]: {
      id: EItem.SHADOW_6,
      name: 'Уровень 6',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_6]
    },
    [EItem.SHADOW_7]: {
      id: EItem.SHADOW_7,
      name: 'Уровень 7',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_7]
    },
    [EItem.SHADOW_8]: {
      id: EItem.SHADOW_8,
      name: 'Уровень 8',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_8]
    },
    [EItem.SHADOW_9]: {
      id: EItem.SHADOW_9,
      name: 'Уровень 9',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_9]
    },
    [EItem.SHADOW_10]: {
      id: EItem.SHADOW_10,
      name: 'Уровень 10',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_10]
    },
    [EItem.SHADOW_11]: {
      id: EItem.SHADOW_11,
      name: 'Уровень 11',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_11]
    },
    [EItem.SHADOW_12]: {
      id: EItem.SHADOW_12,
      name: 'Уровень 12',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_12]
    },
    [EItem.SHADOW_13]: {
      id: EItem.SHADOW_13,
      name: 'Уровень 13',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_13]
    },
    [EItem.SHADOW_14]: {
      id: EItem.SHADOW_14,
      name: 'Уровень 14',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_14]
    },
    [EItem.SHADOW_15]: {
      id: EItem.SHADOW_15,
      name: 'Уровень 15',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_15]
    },

    //ECategory.OTHER
    [EItem.PORTAL]: {
      id: EItem.PORTAL,
      name: 'Портал',
      category: ECategory.OTHER,
      spots: [ESpot.PORTAL]
    }
};
