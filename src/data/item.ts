import { ECategory, EItem, ESpot } from "./enums"


export interface IItem {
  name: string
  category: ECategory
  spots: ESpot[]
  icon?: string
  hide?: boolean
}

export const items: Record<string, IItem> = {

// ECategory.MINING

    [EItem.AMETRINE]: {
      name: 'Аметрин',
      category: ECategory.MINING,
      icon: 'ametrine',
      spots: [ESpot.AMETRINE_VEIN]
    },
    [EItem.BAUXITE]: {
      name: 'Боксит',
      category: ECategory.MINING,
      icon: 'bauxite',
      spots: [ESpot.BAUXITE_VEIN]
    },
    [EItem.PEBBLE]: {
      name: 'Галька',
      icon: 'pebble',
      category: ECategory.MINING,
      spots: [ESpot.SCATTERING_OF_PEBBLE]
    },
    [EItem.GRANITE]: {
      name: 'Гранит',
      category: ECategory.MINING,
      icon: 'granite',
      spots: [
          ESpot.JADE_VEIN,
          ESpot.RHYOLITE_VEIN
      ]
    },
    [EItem.IRON_ORE]: {
      name: 'Железная руда',
      category: ECategory.MINING,
      icon: 'iron-ore',
      spots: [ESpot.IRON_VEIN]
    },
    [EItem.GOLD_ORE]: {
      name: 'Золотая руда',
      category: ECategory.MINING,
      icon: 'gold-ore',
      spots: [ESpot.GOLD_VEIN]
    },
    [EItem.LIMESTONE]: {
      name: 'Известняк',
      category: ECategory.MINING,
      icon: 'limestone',
      spots: [
          ESpot.SCATTERING_OF_PEBBLE,
          ESpot.SILVER_VEIN,
          ESpot.COPPER_VEIN
      ]
    },
    [EItem.CORUNDUM]: {
      name: 'Корунд',
      category: ECategory.MINING,
      icon: 'corundum',
      spots: [ESpot.CORUNDUM_VEIN]
    },
    [EItem.LIMONITE]: {
      name: 'Лимонит',
      category: ECategory.MINING,
      icon: 'limonite',
      spots: [ESpot.LIMONITE_VEIN]
    },
    [EItem.COPPER_ORE]: {
      name: 'Медная руда',
      category: ECategory.MINING,
      icon: 'copper-ore',
      spots: [ESpot.COPPER_VEIN]
    },
    [EItem.MARBLE]: {
      name: 'Мрамор',
      category: ECategory.MINING,
      icon: 'marble',
      spots: [ESpot.CORUNDUM_VEIN]
    },
    [EItem.JADE]: {
      name: 'Нефрит',
      category: ECategory.MINING,
      icon: 'jade',
      spots: [ESpot.JADE_VEIN]
    },
    [EItem.SANDSTONE]: {
      name: 'Песчаник',
      category: ECategory.MINING,
      icon: 'sandstone',
      spots: [
          ESpot.GOLD_VEIN,
          ESpot.IRON_VEIN,
          ESpot.SPINEL_VEIN
      ]
    },
    [EItem.RHYOLITE_CHIP]: {
      name: 'Риолитовая крошка',
      category: ECategory.MINING,
      icon: 'rhyolite-chip',
      spots: [ESpot.RHYOLITE_VEIN]
    },
    [EItem.SILVER_ORE]: {
      name: 'Серебряная руда',
      category: ECategory.MINING,
      icon: 'silver-ore',
      spots: [ESpot.SILVER_VEIN]
    },
    [EItem.SLATE]: {
      name: 'Сланец',
      category: ECategory.MINING,
      icon: 'slate',
      spots: [
          ESpot.BAUXITE_VEIN,
          ESpot.LIMONITE_VEIN,
          ESpot.AMETRINE_VEIN
      ]
    },
    [EItem.SPINEL]: {
      name: 'Шпинель',
      category: ECategory.MINING,
      icon: 'spinel',
      spots: [ESpot.SPINEL_VEIN]
    },

// ECategory.HERBALISM

    [EItem.SWAMP_COLLECTION]: {
      name: 'Болотный сбор',
      category: ECategory.HERBALISM,
      icon: 'swamp-collection',
      spots: [
          ESpot.FERN,
          ESpot.RATTAN
      ]
    },
    [EItem.GINSENG_ROOT]: {
      name: 'Корень женьшеня',
      category: ECategory.HERBALISM,
      icon: 'ginseng-root',
      spots: [ESpot.GINSENG]
    },
    [EItem.CORIANDER]: {
      name: 'Кориандр',
      category: ECategory.HERBALISM,
      icon: 'coriander',
      spots: [ESpot.CORIANDER]
    },
    [EItem.RED_FROG]: {
      name: 'Красная лягушка',
      category: ECategory.HERBALISM,
      icon: 'red-frog',
      spots: [ESpot.BLUE_ORCHID]
    },
    [EItem.SILKWORM_PUPA]: {
      name: 'Куколка шелкопряда',
      category: ECategory.HERBALISM,
      icon: 'silkworm-pupa',
      spots: [ESpot.MULBERRY_TREE]
    },
    [EItem.FOREST_COLLECTION]: {
      name: 'Лесной сбор',
      category: ECategory.HERBALISM,
      icon: 'forest-collection',
      spots: [ESpot.BLUE_ORCHID]
    },
    [EItem.FERN_LEAVES]: {
      name: 'Листья папоротника',
      category: ECategory.HERBALISM,
      icon: 'fern-leaves',
      spots: [ESpot.FERN]
    },
    [EItem.MEADOW_COLLECTION]: {
      name: 'Луговой сбор',
      category: ECategory.HERBALISM,
      icon: 'meadow-collection',
      spots: [
          ESpot.CHAMPIGNON,
          ESpot.ROSEHIP
      ]
    },
    [EItem.FIELD_COLLECTION]: {
      name: 'Полевой сбор',
      category: ECategory.HERBALISM,
      icon: 'field-collection',
      spots: [
          ESpot.CORIANDER,
          ESpot.ALMOND,
          ESpot.SNAPDRAGON
      ]
    },
    [EItem.GARDEN_COLLECTION]: {
      name: 'Садовый сбор',
      category: ECategory.HERBALISM,
      icon: 'garden-collection',
      spots: [ESpot.MULBERRY_TREE]
    },
    [EItem.CENTIPEDE]: {
      name: 'Многоножка',
      category: ECategory.HERBALISM,
      icon: 'centipede',
      spots: [ESpot.SNAPDRAGON]
    },
    [EItem.RATTAN_STEMS]: {
      name: 'Стебли ротанга',
      category: ECategory.HERBALISM,
      icon: 'rattan-stems',
      spots: [ESpot.RATTAN]
    },
    [EItem.NASTURTIUM_BLOSSOM]: {
      name: 'Цветок настурции',
      category: ECategory.HERBALISM,
      icon: 'nasturtium-blossom',
      spots: [ESpot.NASTURTIUM]
    },
    [EItem.ALMOND_FLOWERS]: {
      name: 'Цветы миндаля',
      category: ECategory.HERBALISM,
      icon: 'almond-flowers',
      spots: [ESpot.ALMOND]
    },
    [EItem.CHAMPIGNON]: {
      name: 'Шампиньон',
      category: ECategory.HERBALISM,
      icon: 'champignon',
      spots: [ESpot.CHAMPIGNON]
    },
    [EItem.ROSEHIP]: {
      name: 'Шиповник',
      category: ECategory.HERBALISM,
      icon: 'rosehip',
      spots: [ESpot.ROSEHIP]
    },

// ECategory.WOODCRAFTING

    [EItem.ROTTEN_WOOD]: {
      name: 'Гнилая древесина',
      category: ECategory.WOODCRAFTING,
      icon: 'rotten-wood',
      spots: [
          ESpot.YOUNG_BAMBOO,
          ESpot.BAMBOO
      ]
    },
    [EItem.SPRUCE_NEEDLES]: {
      name: 'Еловые иголки',
      category: ECategory.WOODCRAFTING,
      icon: 'spruce-needles',
      spots: [ESpot.SPRUCE]
    },
    [EItem.HIGH_QUALITY_WOOD]: {
      name: 'Качественная древесина',
      category: ECategory.WOODCRAFTING,
      icon: 'high-quality-wood',
      spots: [
          ESpot.SPRUCE,
          ESpot.GLOWING_MUSHROOM
      ]
    },
    [EItem.CEDAR_NEEDLES]: {
      name: 'Кедровые иголки',
      category: ECategory.WOODCRAFTING,
      icon: 'cedar-needles',
      spots: [ESpot.CEDAR]
    },
    [EItem.MAPLE_LEAF]: {
      name: 'Кленовый лист',
      category: ECategory.WOODCRAFTING,
      icon: 'maple-leaf',
      spots: [ESpot.MAPLE]
    },
    [EItem.ORDINARY_WOOD]: {
      name: 'Обычная древесина',
      category: ECategory.WOODCRAFTING,
      icon: 'ordinary-wood',
      spots: [
          ESpot.PEACH_TREE,
          ESpot.TERMITE_MOUND,
          ESpot.SANDALWOOD,
          ESpot.CEDAR
      ]
    },
    [EItem.FIRST_CLASS_WOOD]: {
      name: 'Первосортная древесина',
      category: ECategory.WOODCRAFTING,
      icon: 'first-class-wood',
      spots: [ESpot.DEAD_TREE]
    },
    [EItem.BAMBOO_SHOOTS]: {
      name: 'Побеги бамбука',
      category: ECategory.WOODCRAFTING,
      icon: 'bamboo-shoots',
      spots: [ESpot.YOUNG_BAMBOO]
    },
    [EItem.SANDAL]: {
      name: 'Сандал',
      category: ECategory.WOODCRAFTING,
      icon: 'sandal',
      spots: [ESpot.SANDALWOOD]
    },
    [EItem.GLOWING_BERRY]: {
      name: 'Светящаяся ягода',
      category: ECategory.WOODCRAFTING,
      icon: 'glowing-berry',
      spots: [ESpot.GLOWING_MUSHROOM]
    },
    [EItem.PITCH]: {
      name: 'Смола',
      category: ECategory.WOODCRAFTING,
      icon: 'pitch',
      spots: [ESpot.GOLDEN_OAK]
    },
    [EItem.BAMBOO_STALKS]: {
      name: 'Стебли бамбука',
      category: ECategory.WOODCRAFTING,
      icon: 'bamboo-stalks',
      spots: [ESpot.BAMBOO]
    },
    [EItem.TERMITE]: {
      name: 'Термит',
      category: ECategory.WOODCRAFTING,
      icon: 'termite',
      spots: [ESpot.TERMITE_MOUND]
    },
    [EItem.PEACH_BLOSSOMS]: {
      name: 'Цветы персика',
      category: ECategory.WOODCRAFTING,
      icon: 'peach-blossoms',
      spots: [ESpot.PEACH_TREE]
    },
    [EItem.VALUABLE_WOOD]: {
      name: 'Ценная древесина',
      category: ECategory.WOODCRAFTING,
      icon: 'valuable-wood',
      spots: [
          ESpot.MAPLE,
          ESpot.GOLDEN_OAK
      ]
    },
    [EItem.STICKMAN]: {
      name: 'Палочник',
      category: ECategory.WOODCRAFTING,
      icon: 'stickman',
      spots: [ESpot.DEAD_TREE]
    },
    
//ECategory.MERCHANT

    [EItem.SILKWORM_COCOON]: {
      name: 'Кокон шелкопряда',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M4]
    },
    [EItem.PORK_TENDERLOIN]: {
      name: 'Свиная вырезка',
      category: ECategory.MERCHANT,
      spots: [ESpot.M1]
    },
    [EItem.PEARL]: {
      name: 'Жемчужина',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M2]
    },
    [EItem.RAPESEED_OIL]: {
      name: 'Рапсовое масло',
      category: ECategory.MERCHANT,
      spots: [ESpot.M3]
    },
    [EItem.LAMB_TENDERLOIN]: {
      name: 'Баранья вырезка',
      category: ECategory.MERCHANT,
      spots: [ESpot.M5]
    },
    [EItem.LIGHT_FEATHER]: {
      name: 'Легкое перышко',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M6]
    },
    [EItem.HOT_PEPPER]: {
      name: 'Острый перец',
      category: ECategory.MERCHANT,
      spots: [ESpot.M7]
    },
    [EItem.DRAFT]: {
      name: 'Черновик',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M8]
    },
    [EItem.MALT]: {
      name: 'Солод',
      category: ECategory.MERCHANT,
      spots: [ESpot.M9]
    },
    [EItem.WHEAT_FLOUR]: {
      name: 'Пшеничная мука',
      category: ECategory.MERCHANT,
      spots: [ESpot.M10]
    },
    [EItem.AMBERGRIS]: {
      name: 'Амбра',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M11]
    },
    [EItem.WOLF_WOOL]: {
      name: 'Волчья шерсть',
      category: ECategory.MERCHANT,
      spots: [ESpot.M12]
    },
    [EItem.SOUP_SET]: {
      name: 'Суповой набор',
      category: ECategory.MERCHANT,
      spots: [ESpot.M13]
    },
    [EItem.SHELL_FRAGMENT]: {
      name: 'Кусочек панциря',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M4]
    },
    [EItem.PORK_HAM]: {
      name: 'Свиной окорок',
      category: ECategory.MERCHANT,
      spots: [ESpot.M1]
    },
    [EItem.CORAL]: {
      name: 'Коралл',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M2]
    },
    [EItem.VINEGAR]: {
      name: 'Уксус',
      category: ECategory.MERCHANT,
      spots: [ESpot.M3]
    },
    [EItem.WALNUTS]: {
      name: 'Грецкие орехи',
      category: ECategory.MERCHANT,
      spots: [ESpot.M4]
    },
    [EItem.LAMB_LEG]: {
      name: 'Баранья нога',
      category: ECategory.MERCHANT,
      spots: [ESpot.M5]
    },
    [EItem.DOWN_FEATHER]: {
      name: 'Пуховое перышко',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M6]
    },
    [EItem.ONION]: {
      name: 'Репчатый лук',
      category: ECategory.MERCHANT,
      spots: [ESpot.M7]
    },
    [EItem.BAMBOO_SCROLL]: {
      name: 'Бамбуковый свиток',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M8]
    },
    [EItem.RICE]: {
      name: 'Рис',
      category: ECategory.MERCHANT,
      spots: [ESpot.M9]
    },
    [EItem.STARCH]: {
      name: 'Крахмал',
      category: ECategory.MERCHANT,
      spots: [ESpot.M10]
    },
    [EItem.HYACINTH_LIQUEUR]: {
      name: 'Гиацинтовый ликер',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M11]
    },
    [EItem.BEEF_TENDERLOIN]: {
      name: 'Говяжья вырезка',
      category: ECategory.MERCHANT,
      spots: [ESpot.M13]
    },
    [EItem.PORK_SHANK]: {
      name: 'Свиные голяшки',
      category: ECategory.MERCHANT,
      spots: [ESpot.M1]
    },
    [EItem.SEASHELL]: {
      name: 'Ракушка',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M2]
    },
    [EItem.SALT]: {
      name: 'Соль',
      category: ECategory.MERCHANT,
      spots: [ESpot.M3]
    },
    [EItem.PINE_NUTS]: {
      name: 'Кедровые орешки',
      category: ECategory.MERCHANT,
      spots: [ESpot.M4]
    },
    [EItem.LAMB_OFFAL]: {
      name: 'Бараньи потроха',
      category: ECategory.MERCHANT,
      spots: [ESpot.M5]
    },
    [EItem.MOUNTAIN_HERB_INFUSION]: {
      name: 'Настой горных трав',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M6]
    },
    [EItem.POTATO]: {
      name: 'Картофель',
      category: ECategory.MERCHANT,
      spots: [ESpot.M7]
    },
    [EItem.TWINE]: {
      name: 'Бечевка',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M8]
    },
    [EItem.SOYBEANS]: {
      name: 'Соевые бобы',
      category: ECategory.MERCHANT,
      spots: [ESpot.M9]
    },
    [EItem.BONE_MEAL]: {
      name: 'Костная мука',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M10]
    },
    [EItem.GLASS_BEAD]: {
      name: 'Стеклянная бусина',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M11]
    },
    [EItem.BOAR_OFFAL]: {
      name: 'Потроха вепря',
      category: ECategory.MERCHANT,
      spots: [ESpot.M13]
    },
    [EItem.PORK_OFFAL]: {
      name: 'Потроха вепря',
      category: ECategory.MERCHANT,
      spots: [ESpot.M1]
    },
    [EItem.SEAWEED]: {
      name: 'Морские водоросли',
      category: ECategory.MERCHANT,
      spots: [ESpot.M2]
    },
    [EItem.SPICE_MIX]: {
      name: 'Смесь приправ',
      category: ECategory.MERCHANT,
      spots: [ESpot.M3]
    },
    [EItem.LAMB_SHOULDER]: {
      name: 'Баранья лопатка',
      category: ECategory.MERCHANT,
      spots: [ESpot.M5]
    },
    [EItem.HONEY]: {
      name: 'Мед',
      category: ECategory.MERCHANT,
      spots: [ESpot.M7]
    },
    [EItem.INK]: {
      name: 'Чернила',
      category: ECategory.MERCHANT,
      spots: [ESpot.M8]
    },
    [EItem.BEANS]: {
      name: 'Фасоль',
      category: ECategory.MERCHANT,
      spots: [ESpot.M9]
    },
    [EItem.CINNAMON]: {
      name: 'Корица',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M10]
    },
    [EItem.SILVER_FUR]: {
      name: 'Серебристый мех',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M11]
    },
    [EItem.BEEF_OFFAL]: {
      name: 'Говяжьи потроха',
      category: ECategory.MERCHANT,
      spots: [ESpot.M13]
    },
    [EItem.CHICKEN_EGG]: {
      name: 'Куриное яйцо',
      category: ECategory.MERCHANT,
      spots: [ESpot.M1]
    },
    [EItem.BAY_LEAF]: {
      name: 'Лавровый лист',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M5]
    },
    [EItem.DUCK_FILLET]: {
      name: 'Утиное филе',
      category: ECategory.MERCHANT,
      spots: [ESpot.M1]
    },
    [EItem.CHICKEN_FILLET]: {
      name: 'Куриное филе',
      category: ECategory.MERCHANT,
      spots: [ESpot.M1]
    },
    [EItem.CARPENTRY_GLUE]: {
      name: 'Столярный клей',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M1]
    },
    [EItem.PHOENIX_FEATHERS]: {
      name: 'Перья Феникса',
      category: ECategory.MERCHANT,
      spots: [ESpot.RETAILER, ESpot.M1]
    },

    //ECategory.SHADOW
    [EItem.SHADOW_1]: {
      name: 'Уровень 1',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_1],
      icon: 'shadow-1'
    },
    [EItem.SHADOW_2]: {
      name: 'Уровень 2',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_2],
      icon: 'shadow-2'
    },
    [EItem.SHADOW_3]: {
      name: 'Уровень 3',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_3],
      icon: 'shadow-3'
    },
    [EItem.SHADOW_4]: {
      name: 'Уровень 4',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_4],
      icon: 'shadow-4'
    },
    [EItem.SHADOW_5]: {
      name: 'Уровень 5',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_5],
      icon: 'shadow-5'
    },
    [EItem.SHADOW_6]: {
      name: 'Уровень 6',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_6],
      icon: 'shadow-6'
    },
    [EItem.SHADOW_7]: {
      name: 'Уровень 7',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_7],
      icon: 'shadow-7'
    },
    [EItem.SHADOW_8]: {
      name: 'Уровень 8',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_8],
      icon: 'shadow-8'
    },
    [EItem.SHADOW_9]: {
      name: 'Уровень 9',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_9],
      icon: 'shadow-9'
    },
    [EItem.SHADOW_10]: {
      name: 'Уровень 10',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_10],
      icon: 'shadow-10'
    },
    [EItem.SHADOW_11]: {
      name: 'Уровень 11',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_11],
      icon: 'shadow-11'
    },
    [EItem.SHADOW_12]: {
      name: 'Уровень 12',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_12],
      icon: 'shadow-12'
    },
    [EItem.SHADOW_13]: {
      name: 'Уровень 13',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_13],
      icon: 'shadow-13'
    },
    [EItem.SHADOW_14]: {
      name: 'Уровень 14',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_14],
      icon: 'shadow-14'
    },
    [EItem.SHADOW_15]: {
      name: 'Уровень 15',
      category: ECategory.SHADOW,
      spots: [ESpot.SHADOW_15],
      icon: 'shadow-15'
    },

    //ECategory.OTHER
    [EItem.PORTAL]: {
      name: 'Портал',
      category: ECategory.OTHER,
      icon: 'portal',
      spots: [ESpot.PORTAL]
    }
};
