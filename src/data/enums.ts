// Нумерация новых категорий - (0-9a-zA-Z)- - максимум 62 категории
export enum ECategory {
    MINING = '0-',              // Горное дело
    HERBALISM = '1-' ,          // Травничество
    WOODCRAFTING = '2-',        // Заготовка древесины
    MERCHANT = '3-',            // Ресурсы у торговцев
    FISHING = '4-',             // Рыбалка
    SHADOW = '5-',              // Мир теней
    STRANGE_PLACE = '6-',       // Странные местечки
    WONDERFUL_VIEWS = '7-',     // Чудесные виды
    BEAUTY_OF_THE_WORLD = '8-', // Красоты мира
    OTHER = '9-',               // Прочее
}

// Нумерация новых классов точек ресурсов может быть любой, не используется в списках и фильтре
export enum ESpot {
    // ECategory.MINING
    SCATTERING_OF_PEBBLE,
    SILVER_VEIN,
    COPPER_VEIN,
    GOLD_VEIN,
    IRON_VEIN,
    SPINEL_VEIN,
    BAUXITE_VEIN,
    LIMONITE_VEIN,
    AMETRINE_VEIN,
    JADE_VEIN,
    RHYOLITE_VEIN,
    CORUNDUM_VEIN,

    // ECategory.HERBALISM
    CHAMPIGNON,
    ROSEHIP,
    FERN,
    GINSENG,
    NASTURTIUM,
    RATTAN,
    CORIANDER,
    ALMOND,
    BLUE_ORCHID,
    SNAPDRAGON,
    MULBERRY_TREE,

    // ECategory.WOODCRAFTING
    BAMBOO,
    PEACH_TREE,
    TERMITE_MOUND,
    SANDALWOOD,
    CEDAR,
    SPRUCE,
    GLOWING_MUSHROOM,
    MAPLE,
    GOLDEN_OAK,
    DEAD_TREE,

    // ECategory.MERCHANT
    RETAILER,
    M1,
    M2,
    M3,
    M4,
    M5,
    M6,
    M7,
    M8,
    M9,
    M10,
    M11,
    M12,
    M13,

    // ECategory.FISHING

    //ECategory.SHADOW
    SHADOW_1,
    SHADOW_2,
    SHADOW_3,
    SHADOW_4,
    SHADOW_5,
    SHADOW_6,
    SHADOW_7,
    SHADOW_8,
    SHADOW_9,
    SHADOW_10,
    SHADOW_11,
    SHADOW_12,
    SHADOW_13,
    SHADOW_14,
    SHADOW_15,

    //ECategory.OTHER
    PORTAL
}

// Нумерация новых ресурсов - (категория)(0-9a-zA-Z) - максимум 62 ресурса в категории
export enum EItem {
    // ECategory.MINING
    LIMESTONE = '00',
    PEBBLE = '01',
    SILVER_ORE = '02',
    COPPER_ORE = '03',
    SANDSTONE = '04',
    GOLD_ORE = '05',
    IRON_ORE = '06',
    SPINEL = '07',
    SLATE = '08',
    BAUXITE = '09',
    LIMONITE = '0a',
    AMETRINE = '0b',
    GRANITE = '0c',
    JADE = '0d',
    RHYOLITE_CHIP = '0e',
    MARBLE = '0f',
    CORUNDUM = '0g',

    // ECategory.HERBALISM
    MEADOW_COLLECTION = '10',
    CHAMPIGNON = '11',
    ROSEHIP = '12',
    SWAMP_COLLECTION = '13',
    FERN_LEAVES = '14',
    GINSENG_ROOT = '15',
    NASTURTIUM_BLOSSOM = '16',
    RATTAN_STEMS = '17',
    FIELD_COLLECTION = '18',
    CORIANDER = '19',
    ALMOND_FLOWERS = '1a',
    FOREST_COLLECTION = '1b',
    RED_FROG = '1c',
    CENTIPEDE = '1d',
    GARDEN_COLLECTION = '1e',
    SILKWORM_PUPA = '1f',

    // ECategory.WOODCRAFTING
    ROTTEN_WOOD = '20',
    BAMBOO_SHOOTS = '21',
    BAMBOO_STALKS = '22',
    ORDINARY_WOOD = '23',
    PEACH_BLOSSOMS = '24',
    TERMITE = '25',
    SANDAL = '26',
    CEDAR_NEEDLES = '27',
    HIGH_QUALITY_WOOD = '28',
    SPRUCE_NEEDLES = '29',
    GLOWING_BERRY = '2a',
    VALUABLE_WOOD = '2b',
    MAPLE_LEAF = '2c',
    PITCH = '2d',
    FIRST_CLASS_WOOD = '2e',
    STICKMAN = '2f',

    // ECategory.MERCHANT
    SILKWORM_COCOON = '30',
    PORK_TENDERLOIN = '31',
    PEARL = '32',
    RAPESEED_OIL = '33',
    LAMB_TENDERLOIN = '34',
    LIGHT_FEATHER = '35',
    HOT_PEPPER = '36',
    DRAFT = '37',
    MALT = '38',
    WHEAT_FLOUR = '39',
    AMBERGRIS = '3a',
    WOLF_WOOL = '3b',
    SOUP_SET = '3c',
    SHELL_FRAGMENT = '3d',
    PORK_HAM = '3e',
    CORAL = '3f',
    VINEGAR = '3g',
    WALNUTS = '3h',
    LAMB_LEG = '3i',
    DOWN_FEATHER = '3j',
    ONION = '3k',
    BAMBOO_SCROLL = '3l',
    RICE = '3m',
    STARCH = '3n',
    HYACINTH_LIQUEUR = '3o',
    BEEF_TENDERLOIN = '3p',
    PORK_SHANK = '3q',
    PORK_OFFAL = '3r',
    SEASHELL = '3s',
    SALT = '3t',
    PINE_NUTS = '3u',
    LAMB_OFFAL = '3v',
    MOUNTAIN_HERB_INFUSION = '3w',
    POTATO = '3x',
    TWINE = '3y',
    SOYBEANS = '3z',
    BONE_MEAL = '3A',
    GLASS_BEAD = '3B',
    BOAR_OFFAL = '3C',
    SEAWEED = '3D',
    SPICE_MIX = '3E',
    LAMB_SHOULDER = '3F',
    HONEY = '3G',
    INK = '3H',
    BEANS = '3I',
    CINNAMON = '3J',
    SILVER_FUR = '3K',
    BEEF_OFFAL = '3L',
    CHICKEN_EGG = '3M',
    BAY_LEAF = '3N',
    DUCK_FILLET = '3O',
    CHICKEN_FILLET = '3P',
    CARPENTRY_GLUE = '3Q',
    PHOENIX_FEATHERS = '3R',

    // ECategory.SHADOW
    SHADOW_1 = '50',
    SHADOW_2 = '51',
    SHADOW_3 = '52',
    SHADOW_4 = '53',
    SHADOW_5 = '54',
    SHADOW_6 = '55',
    SHADOW_7 = '56',
    SHADOW_8 = '57',
    SHADOW_9 = '58',
    SHADOW_10 = '59',
    SHADOW_11 = '5a',
    SHADOW_12 = '5b',
    SHADOW_13 = '5c',
    SHADOW_14 = '5d',
    SHADOW_15 = '5e',

    // ECategory.OTHER
    PORTAL = '90'
}
