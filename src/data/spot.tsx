import { ECategory, EItem, ESpot } from "./enums"


export interface ISpot {
  name: string
  category: ECategory
  drop: EItem[]
  icon?: string
  hide?: boolean
}

export const spots: Record<string, ISpot> = {
  // ECategory.MINING
  [ESpot.SCATTERING_OF_PEBBLE]: {
    name: 'Россыпь гальки',
    category: ECategory.MINING,
    drop: [EItem.LIMESTONE, EItem.PEBBLE],
    icon: 'scattering-of-pebble'
  },
  [ESpot.SILVER_VEIN]: {
    name: 'Серебряная жила', 
    category: ECategory.MINING,
    drop: [EItem.LIMESTONE, EItem.SILVER_ORE],
    icon: 'silver-vein'
  },
  [ESpot.COPPER_VEIN]: { 
    name: 'Медная жила', 
    category: ECategory.MINING,
    drop: [EItem.LIMESTONE, EItem.COPPER_ORE],
    icon: 'copper-vein'
  },
  [ESpot.GOLD_VEIN]: {
    name: 'Золотая жила', 
    category: ECategory.MINING,
    drop: [EItem.SANDSTONE, EItem.GOLD_ORE],
    icon: 'gold-vein'
  },
  [ESpot.IRON_VEIN]: {
    name: 'Железная жила', 
    category: ECategory.MINING,
    drop: [EItem.SANDSTONE, EItem.IRON_ORE],
    icon: 'iron-vein'
  },
  [ESpot.SPINEL_VEIN]: {
    name: 'Шпинелевая жила', 
    category: ECategory.MINING,
    drop: [EItem.SANDSTONE, EItem.SPINEL],
    icon: 'spinel-vein'
  },
  [ESpot.BAUXITE_VEIN]: {
    name: 'Бокситовая жила', 
    category: ECategory.MINING,
    drop: [EItem.SLATE, EItem.BAUXITE],
    icon: 'bauxite-vein'
  },
  [ESpot.LIMONITE_VEIN]: {
    name: 'Лимонитовая жила', 
    category: ECategory.MINING,
    drop: [EItem.SLATE, EItem.LIMONITE],
    icon: 'limonite-vein'
  },
  [ESpot.AMETRINE_VEIN]: {
    name: 'Аметриновая жила', 
    category: ECategory.MINING,
    drop: [EItem.SLATE, EItem.AMETRINE],
    icon: 'ametrine-vein'
  },
  [ESpot.JADE_VEIN]: {
    name: 'Нефритовая жила', 
    category: ECategory.MINING,
    drop: [EItem.GRANITE, EItem.JADE],
    icon: 'jade-vein'
  },
  [ESpot.RHYOLITE_VEIN]: {
    name: 'Риолитовая жила', 
    category: ECategory.MINING,
    drop: [EItem.GRANITE, EItem.RHYOLITE_CHIP],
    icon: 'rhyolite-vein'
  },
  [ESpot.CORUNDUM_VEIN]: {
    name: 'Корундовая жила', 
    category: ECategory.MINING,
    drop: [EItem.MARBLE, EItem.CORUNDUM],
    icon: 'corundum-vein'
  },

// ECategory.HERBALISM

  [ESpot.CHAMPIGNON]: {
    name: 'Шампиньон', 
    category: ECategory.HERBALISM,
    drop: [EItem.MEADOW_COLLECTION, EItem.CHAMPIGNON],
    icon: 'champignon-spot'
  },
  [ESpot.ROSEHIP]: {
    name: 'Шиповник', 
    category: ECategory.HERBALISM,
    drop: [EItem.MEADOW_COLLECTION, EItem.ROSEHIP],
    icon: 'rosehip-spot'
  },
  [ESpot.FERN]: {
    name: 'Папоротник', 
    category: ECategory.HERBALISM,
    drop: [EItem.SWAMP_COLLECTION, EItem.FERN_LEAVES],
    icon: 'fern'
  },
  [ESpot.GINSENG]: {
    name: 'Женьшень', 
    category: ECategory.HERBALISM,
    drop: [EItem.GINSENG_ROOT],
    icon: 'ginseng'
  },
  [ESpot.NASTURTIUM]: {
    name: 'Настурция', 
    category: ECategory.HERBALISM,
    drop: [EItem.NASTURTIUM_BLOSSOM],
    icon: 'nasturtium'
  },
  [ESpot.RATTAN]: {
    name: 'Ротанг', 
    category: ECategory.HERBALISM,
    drop: [EItem.SWAMP_COLLECTION, EItem.RATTAN_STEMS],
    icon: 'rattan'
  },
  [ESpot.CORIANDER]: {
    name: 'Кориандр', 
    category: ECategory.HERBALISM,
    drop: [EItem.FIELD_COLLECTION, EItem.CORIANDER],
    icon: 'coriander-spot'
  },
  [ESpot.ALMOND]: {
    name: 'Миндаль', 
    category: ECategory.HERBALISM,
    drop: [EItem.FIELD_COLLECTION, EItem.ALMOND_FLOWERS],
    icon: 'almond'
  },
  [ESpot.BLUE_ORCHID]: {
    name: 'Голубая орхидея', 
    category: ECategory.HERBALISM,
    drop: [EItem.FOREST_COLLECTION, EItem.RED_FROG],
    icon: 'blue-orchid'
  },
  [ESpot.SNAPDRAGON]: {
    name: 'Львиный зев', 
    category: ECategory.HERBALISM,
    drop: [EItem.FIELD_COLLECTION, EItem.CENTIPEDE],
    icon: 'snapdragon'
  },
  [ESpot.MULBERRY_TREE]: {
    name: 'Тутовое дерево', 
    category: ECategory.HERBALISM,
    drop: [EItem.GARDEN_COLLECTION, EItem.SILKWORM_PUPA],
    icon: 'mulberry-tree'
  },

  // ECategory.WOODCRAFTING
  [ESpot.YOUNG_BAMBOO]: {
    name: 'Молодой бамбук', 
    category: ECategory.WOODCRAFTING,
    drop: [EItem.ROTTEN_WOOD, EItem.BAMBOO_SHOOTS],
    icon: 'young-bamboo'
  },
  [ESpot.BAMBOO]: {
    name: 'Бамбук', 
    category: ECategory.WOODCRAFTING,
    drop: [EItem.ROTTEN_WOOD, EItem.BAMBOO_STALKS],
    icon: 'bamboo'
  },
  [ESpot.PEACH_TREE]: {
    name: 'Персиковое дерево', 
    category: ECategory.WOODCRAFTING,
    drop: [EItem.ORDINARY_WOOD, EItem.PEACH_BLOSSOMS],
    icon: 'peach-tree'
  },
  [ESpot.TERMITE_MOUND]: {
    name: 'Термитник', 
    category: ECategory.WOODCRAFTING,
    drop: [EItem.ORDINARY_WOOD, EItem.TERMITE],
    icon: 'termite-mound'
  },
  [ESpot.SANDALWOOD]: {
    name: 'Сандаловое дерево', 
    category: ECategory.WOODCRAFTING,
    drop: [EItem.ORDINARY_WOOD, EItem.SANDAL],
    icon: 'sandalwood'
  },
  [ESpot.CEDAR]: {
    name: 'Кедр', 
    category: ECategory.WOODCRAFTING,
    drop: [EItem.ORDINARY_WOOD, EItem.CEDAR_NEEDLES],
    icon: 'cedar'
  },
  [ESpot.SPRUCE]: {
    name: 'Ель', 
    category: ECategory.WOODCRAFTING,
    drop: [EItem.HIGH_QUALITY_WOOD, EItem.SPRUCE_NEEDLES],
    icon: 'spruce'
  },
  [ESpot.GLOWING_MUSHROOM]: {
    name: 'Светящийся гриб', 
    category: ECategory.WOODCRAFTING,
    drop: [EItem.HIGH_QUALITY_WOOD, EItem.GLOWING_BERRY],
    icon: 'glowing-mushroom'
  },
  [ESpot.MAPLE]: {
    name: 'Клен', 
    category: ECategory.WOODCRAFTING,
    drop: [EItem.VALUABLE_WOOD, EItem.MAPLE_LEAF],
    icon: 'maple'
  },
  [ESpot.GOLDEN_OAK]: {
    name: 'Золотой дуб', 
    category: ECategory.WOODCRAFTING,
    drop: [EItem.VALUABLE_WOOD, EItem.PITCH],
    icon: 'golden-oak'
  },
  [ESpot.DEAD_TREE]: {
    name: 'Мёртвое дерево', 
    category: ECategory.WOODCRAFTING,
    drop: [EItem.FIRST_CLASS_WOOD, EItem.STICKMAN],
    icon: 'dead-tree'
  },

// ECategory.MERCHANT

  [ESpot.RETAILER]: {
    name: 'Перекупщик Торговец материалами', 
    category: ECategory.MERCHANT,
    drop: [
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
    icon: 'merchant'
  },
  [ESpot.M1]: {
    name: 'Суланские товары Хоакин', 
    category: ECategory.MERCHANT,
    drop: [
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
    icon: 'merchant'
  },
  [ESpot.M2]: {
    name: 'Товары Фалмари Блисс Серебряный Родник', 
    category: ECategory.MERCHANT,
    drop: [
      EItem.PEARL,
      EItem.CORAL,
      EItem.SEASHELL,
      EItem.SEAWEED
    ],
    icon: 'merchant'
  },
  [ESpot.M3]: {
    name: 'Товары фракции Боровичок-торговец', 
    category: ECategory.MERCHANT,
    drop: [
      EItem.RAPESEED_OIL,
      EItem.VINEGAR,
      EItem.SALT,
      EItem.SPICE_MIX
    ],
    icon: 'merchant'
  },
  [ESpot.M4]: {
    name: 'Товары Озерной деревни Лавочница Лейна', 
    category: ECategory.MERCHANT,
    drop: [
      EItem.SILKWORM_COCOON,
      EItem.SHELL_FRAGMENT,
      EItem.WALNUTS,
      EItem.PINE_NUTS
    ],
    icon: 'merchant'
  },
  [ESpot.M5]: {
    name: 'Товары из Сноу-Шу Послушник Хансу', 
    category: ECategory.MERCHANT,
    drop: [
      EItem.LAMB_TENDERLOIN,
      EItem.LAMB_LEG,
      EItem.LAMB_OFFAL,
      EItem.LAMB_SHOULDER,
      EItem.BAY_LEAF
    ],
    icon: 'merchant'
  },
  [ESpot.M6]: {
    name: 'Товары Крылатых Леланд', 
    category: ECategory.MERCHANT,
    drop: [
      EItem.LIGHT_FEATHER,
      EItem.DOWN_FEATHER,
      EItem.MOUNTAIN_HERB_INFUSION
    ],
    icon: 'merchant'
  },
  [ESpot.M7]: {
    name: 'Товары фракции Сваури', 
    category: ECategory.MERCHANT,
    drop: [
      EItem.HOT_PEPPER,
      EItem.ONION,
      EItem.POTATO,
      EItem.HONEY
    ],
    icon: 'merchant'
  },
  [ESpot.M8]: {
    name: 'Товары фракции Наставник Буань', 
    category: ECategory.MERCHANT,
    drop: [
      EItem.DRAFT,
      EItem.BAMBOO_SCROLL,
      EItem.INK,
      EItem.TWINE
    ],
    icon: 'merchant'
  },
  [ESpot.M9]: {
    name: 'Товары Кноттля Венки Полная Сумка', 
    category: ECategory.MERCHANT,
    drop: [
      EItem.MALT,
      EItem.RICE,
      EItem.SOYBEANS,
      EItem.BEANS
    ],
    icon: 'merchant'
  },
  [ESpot.M10]: {
    name: 'Товары Астериона Люлан', 
    category: ECategory.MERCHANT,
    drop: [
      EItem.WHEAT_FLOUR,
      EItem.STARCH,
      EItem.BONE_MEAL,
      EItem.CINNAMON
    ],
    icon: 'merchant'
  },
  [ESpot.M11]: {
    name: 'Товары Девятихвостых Свелли', 
    category: ECategory.MERCHANT,
    drop: [
      EItem.AMBERGRIS,
      EItem.HYACINTH_LIQUEUR,
      EItem.GLASS_BEAD,
      EItem.SILVER_FUR
    ],
    icon: 'merchant'
  },
  [ESpot.M12]: {
    name: 'Товары Северных волков Шанья', 
    category: ECategory.MERCHANT,
    drop: [
      EItem.WOLF_WOOL
    ],
    icon: 'merchant'
  },
  [ESpot.M13]: {
    name: 'Товары Калахара Интендант Гилард', 
    category: ECategory.MERCHANT,
    drop: [
      EItem.SOUP_SET,
      EItem.BEEF_TENDERLOIN,
      EItem.BOAR_OFFAL,
      EItem.BEEF_OFFAL
    ],
    icon: 'merchant'
  },

  // ECategory.FISHING

  // ECategory.SHADOW
  [ESpot.SHADOW_1]: {
    name: 'Мир теней 1 ур.', 
    category: ECategory.SHADOW,
    drop: []
  },
  [ESpot.SHADOW_2]: {
    name: 'Мир теней 2 ур.', 
    category: ECategory.SHADOW,
    drop: []
  },
  [ESpot.SHADOW_3]: {
    name: 'Мир теней 3 ур.', 
    category: ECategory.SHADOW,
    drop: []
  },
  [ESpot.SHADOW_4]: {
    name: 'Мир теней 4 ур.', 
    category: ECategory.SHADOW,
    drop: []
  },
  [ESpot.SHADOW_5]: {
    name: 'Мир теней 5 ур.', 
    category: ECategory.SHADOW,
    drop: []
  },
  [ESpot.SHADOW_6]: {
    name: 'Мир теней 6 ур.', 
    category: ECategory.SHADOW,
    drop: []
  },
  [ESpot.SHADOW_7]: {
    name: 'Мир теней 7 ур.', 
    category: ECategory.SHADOW,
    drop: []
  },
  [ESpot.SHADOW_8]: {
    name: 'Мир теней 8 ур.', 
    category: ECategory.SHADOW,
    drop: []
  },
  [ESpot.SHADOW_9]: {
    name: 'Мир теней 9 ур.', 
    category: ECategory.SHADOW,
    drop: []
  },
  [ESpot.SHADOW_10]: {
    name: 'Мир теней 10 ур.', 
    category: ECategory.SHADOW,
    drop: []
  },
  [ESpot.SHADOW_11]: {
    name: 'Мир теней 11 ур.', 
    category: ECategory.SHADOW,
    drop: []
  },
  [ESpot.SHADOW_12]: {
    name: 'Мир теней 12 ур.', 
    category: ECategory.SHADOW,
    drop: []
  },
  [ESpot.SHADOW_13]: {
    name: 'Мир теней 13 ур.', 
    category: ECategory.SHADOW,
    drop: []
  },
  [ESpot.SHADOW_14]: {
    name: 'Мир теней 14 ур.', 
    category: ECategory.SHADOW,
    drop: []
  },
  [ESpot.SHADOW_15]: {
    name: 'Мир теней 15 ур.', 
    category: ECategory.SHADOW,
    drop: []
  },

  // ECategory.OTHER
  [ESpot.PORTAL]: {
    name: 'Портал', 
    category: ECategory.OTHER,
    drop: [],
    icon: 'portal'
  }
};
