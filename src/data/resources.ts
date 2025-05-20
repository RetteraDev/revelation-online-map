export type Location = {
    x: number
    y: number
    z: number
}


export enum ECategory {
    MINING = 1,
    HERBALISM = 2,
    WOODCRAFTING = 3,
    FISHING = 4,
    MERCHANT = 5,
}

export interface ICategory {
  categoryName: string
  icon?: string;
}



export enum EGatheringSpot {
    // ECategory.MINING
    SCATTERING_OF_PEBBLE = 1,
    SILVER_VEIN = 2,
    COPPER_VEIN = 3,
    GOLD_VEIN = 4,
    IRON_VEIN = 5,
    SPINEL_VEIN = 6,
    BAUXITE_VEIN = 7,
    LIMONITE_VEIN = 8,
    AMETRINE_VEIN = 9,
    JADE_VEIN = 10,
    RHYOLITE_VEIN = 11,
    CORUNDUM_VEIN = 12,

    // ECategory.HERBALISM
    CHAMPIGNON = 13,
    ROSEHIP = 14,
    FERN = 15,
    GINSENG = 16,
    NASTURTIUM = 17,
    RATTAN = 18,
    CORIANDER = 19,
    ALMOND = 20,
    BLUE_ORCHID = 21,
    SNAPDRAGON = 22,
    MULBERRY_TREE = 23,

    // ECategory.WOODCRAFTING
    YOUNG_BAMBOO = 24,
    BAMBOO = 25,
    PEACH_TREE = 26,
    TERMITE_MOUND = 27,
    SANDALWOOD = 28,
    CEDAR = 29,
    SPRUCE = 30,
    GLOWING_MUSHROOM = 31,
    MAPLE = 32,
    GOLDEN_OAK = 33,
    DEAD_TREE = 34,

    // ECategory.FISHING


    // ECategory.MERCHANT
}

export interface IGatheringSpot {
  gatheringSpotName: string
  icon?: string
  category: ECategory
}



export enum EItem {
    // ECategory.MINING
    LIMESTONE = 1,
    PEBBLE = 2,
    SILVER_ORE = 3,
    COPPER_ORE = 4,
    SANDSTONE = 5,
    GOLD_ORE = 6,
    IRON_ORE = 7,
    SPINEL = 8,
    SLATE = 9,
    BAUXITE = 10,
    LIMONITE = 11,
    AMETRINE = 12,
    GRANITE = 13,
    JADE = 14,
    RHYOLITE_CHIP = 15,
    MARBLE = 16,
    CORUNDUM = 17,

    // ECategory.HERBALISM
    MEADOW_COLLECTION = 18,
    CHAMPIGNON = 19,
    ROSEHIP = 20,
    SWAMP_COLLECTION = 21,
    FERN_LEAVES = 22,
    GINSENG_ROOT = 23,
    NASTURTIUM_BLOSSOM = 24,
    RATTAN_STEMS = 25,
    FIELD_COLLECTION = 26,
    CORIANDER = 27,
    ALMOND_FLOWERS = 28,
    FOREST_COLLECTION = 29,
    RED_FROG = 30,
    CENTIPEDE = 31,
    GARDEN_COLLECTION = 32,
    SILKWORM_PUPA = 33,

    // ECategory.WOODCRAFTING
    ROTTEN_WOOD = 34,
    BAMBOO_SHOOTS = 35,
    BAMBOO_STALKS = 36,
    ORDINARY_WOOD = 37,
    PEACH_BLOSSOMS = 38,
    TERMITE = 39,
    SANDAL = 40,
    CEDAR_NEEDLES = 41,
    HIGH_QUALITY_WOOD = 42,
    SPRUCE_NEEDLES = 43,
    GLOWING_BERRY = 44,
    VALUABLE_WOOD = 45,
    MAPLE_LEAFS = 46,
    PITCH = 47,
    FIRST_CLASS_WOOD = 48,
    STICKMAN = 49
}

export interface IItem {
  itemName: string
  icon?: string
  price?: number
}


export const categories: Record<ECategory, ICategory> = {
  [ECategory.MINING]: { categoryName: 'Горное дело', icon: '' },
  [ECategory.HERBALISM]: { categoryName: 'Травничество', icon: '' },
  [ECategory.WOODCRAFTING]: { categoryName: 'Заготовка древесины', icon: '' },
  [ECategory.FISHING]: { categoryName: 'Рыбалка', icon: '' },
  [ECategory.MERCHANT]: { categoryName: 'Ресурсы у торговцев', icon: '' }
};

export const gatheringSpots: Record<EGatheringSpot, IGatheringSpot> = {
  // ECategory.MINING
  [EGatheringSpot.SCATTERING_OF_PEBBLE]: { gatheringSpotName: 'Россыпь гальки', icon: '', category: ECategory.MINING },
  [EGatheringSpot.SILVER_VEIN]: { gatheringSpotName: 'Серебряная жила', icon: '', category: ECategory.MINING },
  [EGatheringSpot.COPPER_VEIN]: { gatheringSpotName: 'Медная жила', icon: '', category: ECategory.MINING },
  [EGatheringSpot.GOLD_VEIN]: { gatheringSpotName: 'Золотая жила', icon: '', category: ECategory.MINING },
  [EGatheringSpot.IRON_VEIN]: { gatheringSpotName: 'Железная жила', icon: '', category: ECategory.MINING },
  [EGatheringSpot.SPINEL_VEIN]: { gatheringSpotName: 'Шпинелевая жила', icon: '', category: ECategory.MINING },
  [EGatheringSpot.BAUXITE_VEIN]: { gatheringSpotName: 'Бокситовая жила', icon: '', category: ECategory.MINING },
  [EGatheringSpot.LIMONITE_VEIN]: { gatheringSpotName: 'Лимонитовая жила', icon: '', category: ECategory.MINING },
  [EGatheringSpot.AMETRINE_VEIN]: { gatheringSpotName: 'Аметриновая жила', icon: '', category: ECategory.MINING },
  [EGatheringSpot.JADE_VEIN]: { gatheringSpotName: 'Нефритовая жила', icon: '', category: ECategory.MINING },
  [EGatheringSpot.RHYOLITE_VEIN]: { gatheringSpotName: 'Риолитовая жила', icon: '', category: ECategory.MINING },
  [EGatheringSpot.CORUNDUM_VEIN]: { gatheringSpotName: 'Корундовая жила', icon: '', category: ECategory.MINING },

  // ECategory.HERBALISM
  [EGatheringSpot.CHAMPIGNON]: { gatheringSpotName: 'Шампиньон', icon: '', category: ECategory.HERBALISM },
  [EGatheringSpot.ROSEHIP]: { gatheringSpotName: 'Шиповник', icon: '', category: ECategory.HERBALISM },
  [EGatheringSpot.FERN]: { gatheringSpotName: 'Папоротник', icon: '', category: ECategory.HERBALISM },
  [EGatheringSpot.GINSENG]: { gatheringSpotName: 'Женьшень', icon: '', category: ECategory.HERBALISM },
  [EGatheringSpot.NASTURTIUM]: { gatheringSpotName: 'Настурция', icon: '', category: ECategory.HERBALISM },
  [EGatheringSpot.RATTAN]: { gatheringSpotName: 'Ротанг', icon: '', category: ECategory.HERBALISM },
  [EGatheringSpot.CORIANDER]: { gatheringSpotName: 'Кориандр', icon: '', category: ECategory.HERBALISM },
  [EGatheringSpot.ALMOND]: { gatheringSpotName: 'Миндаль', icon: '', category: ECategory.HERBALISM },
  [EGatheringSpot.BLUE_ORCHID]: { gatheringSpotName: 'Голубая орхидея', icon: '', category: ECategory.HERBALISM },
  [EGatheringSpot.SNAPDRAGON]: { gatheringSpotName: 'Львиный зев', icon: '', category: ECategory.HERBALISM },
  [EGatheringSpot.MULBERRY_TREE]: { gatheringSpotName: 'Тутовое дерево', icon: '', category: ECategory.HERBALISM },

  // ECategory.WOODCRAFTING
  [EGatheringSpot.YOUNG_BAMBOO]: { gatheringSpotName: 'Молодой бамбук', icon: '', category: ECategory.WOODCRAFTING },
  [EGatheringSpot.BAMBOO]: { gatheringSpotName: 'Бамбук', icon: '', category: ECategory.WOODCRAFTING },
  [EGatheringSpot.PEACH_TREE]: { gatheringSpotName: 'Персиковое дерево', icon: '', category: ECategory.WOODCRAFTING },
  [EGatheringSpot.TERMITE_MOUND]: { gatheringSpotName: 'Термитник', icon: '', category: ECategory.WOODCRAFTING },
  [EGatheringSpot.SANDALWOOD]: { gatheringSpotName: 'Сандаловое дерево', icon: '', category: ECategory.WOODCRAFTING },
  [EGatheringSpot.CEDAR]: { gatheringSpotName: 'Кедр', icon: '', category: ECategory.WOODCRAFTING },
  [EGatheringSpot.SPRUCE]: { gatheringSpotName: 'Ель', icon: '', category: ECategory.WOODCRAFTING },
  [EGatheringSpot.GLOWING_MUSHROOM]: { gatheringSpotName: 'Светящийся гриб', icon: '', category: ECategory.WOODCRAFTING },
  [EGatheringSpot.MAPLE]: { gatheringSpotName: 'Клен', icon: '', category: ECategory.WOODCRAFTING },
  [EGatheringSpot.GOLDEN_OAK]: { gatheringSpotName: 'Золотой дуб', icon: '', category: ECategory.WOODCRAFTING },
  [EGatheringSpot.DEAD_TREE]: { gatheringSpotName: 'Мёртвое дерево', icon: '', category: ECategory.WOODCRAFTING },

  // ECategory.FISHING

  // ECategory.MERCHANT

};

export const items: Record<EItem, IItem> = {
    // ECategory.MINING
    [EItem.LIMESTONE]: { itemName: 'Известняк', icon: '' },
    [EItem.PEBBLE]: { itemName: 'Галька', icon: '' },
    [EItem.SILVER_ORE]: { itemName: 'Серебряная руда', icon: '' },
    [EItem.COPPER_ORE]: { itemName: 'Медная руда', icon: '' },
    [EItem.SANDSTONE]: { itemName: 'Песчаник', icon: '' },
    [EItem.GOLD_ORE]: { itemName: 'Золотая руда', icon: '' },
    [EItem.IRON_ORE]: { itemName: 'Железная руда', icon: '' },
    [EItem.SPINEL]: { itemName: 'Шпинель', icon: '' },
    [EItem.SLATE]: { itemName: 'Сланец', icon: '' },
    [EItem.BAUXITE]: { itemName: 'Боксит', icon: '' },
    [EItem.LIMONITE]: { itemName: 'Лимонит', icon: '' },
    [EItem.AMETRINE]: { itemName: 'Аметрин', icon: '' },
    [EItem.GRANITE]: { itemName: 'Гранит', icon: '' },
    [EItem.JADE]: { itemName: 'Нефрит', icon: '' },
    [EItem.RHYOLITE_CHIP]: { itemName: 'Риолитовая крошка', icon: '' },
    [EItem.MARBLE]: { itemName: 'Мрамор', icon: '' },
    [EItem.CORUNDUM]: { itemName: 'Корунд', icon: '' }, 

    // ECategory.HERBALISM
    [EItem.MEADOW_COLLECTION]: { itemName: 'Луговой сбор', icon: '' },
    [EItem.CHAMPIGNON]: { itemName: 'Шампиньон', icon: '' },
    [EItem.ROSEHIP]: { itemName: 'Шиповник', icon: '' },
    [EItem.SWAMP_COLLECTION]: { itemName: 'Болотный сбор', icon: '' },
    [EItem.FERN_LEAVES]: { itemName: 'Листья папоротника', icon: '' },
    [EItem.GINSENG_ROOT]: { itemName: 'Корень женьшеня', icon: '' },
    [EItem.NASTURTIUM_BLOSSOM]: { itemName: 'Цветок настурции', icon: '' },
    [EItem.RATTAN_STEMS]: { itemName: 'Стебли ротанга', icon: '' },
    [EItem.FIELD_COLLECTION]: { itemName: 'Полевой сбор', icon: '' },
    [EItem.CORIANDER]: { itemName: 'Кориандр', icon: '' },
    [EItem.ALMOND_FLOWERS]: { itemName: 'Цветы миндаля', icon: '' },
    [EItem.FOREST_COLLECTION]: { itemName: 'Лесной сбор', icon: '' },
    [EItem.RED_FROG]: { itemName: 'Красная лягушка', icon: '' },
    [EItem.CENTIPEDE]: { itemName: 'Многоножка', icon: '' },
    [EItem.GARDEN_COLLECTION]: { itemName: 'Садовый сбор', icon: '' },
    [EItem.SILKWORM_PUPA]: { itemName: 'Куколка шелкопряда', icon: '' },

    // ECategory.WOODCRAFTING
    [EItem.ROTTEN_WOOD]: { itemName: 'Гнилая древесина', icon: '' },
    [EItem.BAMBOO_SHOOTS]: { itemName: 'Побеги бамбука', icon: '' },
    [EItem.BAMBOO_STALKS]: { itemName: 'Стебли бамбука', icon: '' },
    [EItem.ORDINARY_WOOD]: { itemName: 'Обычная древесина', icon: '' },
    [EItem.PEACH_BLOSSOMS]: { itemName: 'Цветы персика', icon: '' },
    [EItem.TERMITE]: { itemName: 'Термит', icon: '' },
    [EItem.SANDAL]: { itemName: 'Сандал', icon: '' },
    [EItem.CEDAR_NEEDLES]: { itemName: 'Кедровые иголки', icon: '' },
    [EItem.HIGH_QUALITY_WOOD]: { itemName: 'Качественная древесина', icon: '' },
    [EItem.SPRUCE_NEEDLES]: { itemName: 'Еловые иголки', icon: '' },
    [EItem.GLOWING_BERRY]: { itemName: 'Светящаяся ягода', icon: '' },
    [EItem.VALUABLE_WOOD]: { itemName: 'Ценная древесина', icon: '' },
    [EItem.MAPLE_LEAFS]: { itemName: 'Кленовый лист', icon: '' },
    [EItem.PITCH]: { itemName: 'Смола', icon: '' },
    [EItem.FIRST_CLASS_WOOD]: { itemName: 'Первосортная древесина', icon: '' },
    [EItem.STICKMAN]: { itemName: 'Чучело', icon: '' }

    // ECategory.FISHING

    // ECategory.MERCHANT

};


// Точки на карте
export interface IMapPoint {
    mapPointid: number;
    gatheringSpotId: EGatheringSpot;
    location: Location;
    isActive?: boolean; // Может быть когда-то будет использоваться, если будет API
}

export const mapPoints: IMapPoint[] = [
    {
        mapPointid: 1,
        gatheringSpotId: EGatheringSpot.COPPER_VEIN,
        location: { x: 100, y: 200, z: 0 },
    },
    {
        mapPointid: 2,
        gatheringSpotId: EGatheringSpot.COPPER_VEIN,
        location: { x: 150, y: 250, z: 0 },
    },
    {
        mapPointid: 3,
        gatheringSpotId: EGatheringSpot.IRON_VEIN,
        location: { x: 300, y: 400, z: 0 },
    }
]


// В какой жиле/нипе что можно найти
export interface IGatheringSpotItem {
  gatheringSpotId: EGatheringSpot;
  itemId: EItem;
}

export const gatheringSpotItems: IGatheringSpotItem[] = [
    // ECategory.MINING
    { gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, itemId: EItem.LIMESTONE },
    { gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, itemId: EItem.PEBBLE },

    { gatheringSpotId: EGatheringSpot.SILVER_VEIN, itemId: EItem.LIMESTONE },
    { gatheringSpotId: EGatheringSpot.SILVER_VEIN, itemId: EItem.SILVER_ORE },

    { gatheringSpotId: EGatheringSpot.COPPER_VEIN, itemId: EItem.LIMESTONE },
    { gatheringSpotId: EGatheringSpot.COPPER_VEIN, itemId: EItem.COPPER_ORE },

    { gatheringSpotId: EGatheringSpot.GOLD_VEIN, itemId: EItem.SANDSTONE },
    { gatheringSpotId: EGatheringSpot.GOLD_VEIN, itemId: EItem.GOLD_ORE },

    { gatheringSpotId: EGatheringSpot.IRON_VEIN, itemId: EItem.SANDSTONE },
    { gatheringSpotId: EGatheringSpot.IRON_VEIN, itemId: EItem.IRON_ORE },

    { gatheringSpotId: EGatheringSpot.SPINEL_VEIN, itemId: EItem.SANDSTONE },
    { gatheringSpotId: EGatheringSpot.SPINEL_VEIN, itemId: EItem.SPINEL },

    { gatheringSpotId: EGatheringSpot.BAUXITE_VEIN, itemId: EItem.SLATE },
    { gatheringSpotId: EGatheringSpot.BAUXITE_VEIN, itemId: EItem.BAUXITE },

    { gatheringSpotId: EGatheringSpot.LIMONITE_VEIN, itemId: EItem.SLATE },
    { gatheringSpotId: EGatheringSpot.LIMONITE_VEIN, itemId: EItem.LIMONITE },

    { gatheringSpotId: EGatheringSpot.AMETRINE_VEIN, itemId: EItem.SLATE },
    { gatheringSpotId: EGatheringSpot.AMETRINE_VEIN, itemId: EItem.AMETRINE },

    { gatheringSpotId: EGatheringSpot.JADE_VEIN, itemId: EItem.GRANITE },
    { gatheringSpotId: EGatheringSpot.JADE_VEIN, itemId: EItem.JADE },

    { gatheringSpotId: EGatheringSpot.RHYOLITE_VEIN, itemId: EItem.GRANITE },
    { gatheringSpotId: EGatheringSpot.RHYOLITE_VEIN, itemId: EItem.RHYOLITE_CHIP },

    { gatheringSpotId: EGatheringSpot.CORUNDUM_VEIN, itemId: EItem.MARBLE },
    { gatheringSpotId: EGatheringSpot.CORUNDUM_VEIN, itemId: EItem.CORUNDUM },

    // ECategory.HERBALISM
    { gatheringSpotId: EGatheringSpot.CHAMPIGNON, itemId: EItem.MEADOW_COLLECTION },
    { gatheringSpotId: EGatheringSpot.CHAMPIGNON, itemId: EItem.CHAMPIGNON },

    { gatheringSpotId: EGatheringSpot.ROSEHIP, itemId: EItem.MEADOW_COLLECTION },
    { gatheringSpotId: EGatheringSpot.ROSEHIP, itemId: EItem.ROSEHIP },

    { gatheringSpotId: EGatheringSpot.FERN, itemId: EItem.SWAMP_COLLECTION },
    { gatheringSpotId: EGatheringSpot.FERN, itemId: EItem.FERN_LEAVES },

    { gatheringSpotId: EGatheringSpot.GINSENG, itemId: EItem.GINSENG_ROOT },

    { gatheringSpotId: EGatheringSpot.NASTURTIUM, itemId: EItem.NASTURTIUM_BLOSSOM },

    { gatheringSpotId: EGatheringSpot.RATTAN, itemId: EItem.SWAMP_COLLECTION },
    { gatheringSpotId: EGatheringSpot.RATTAN, itemId: EItem.RATTAN_STEMS },

    { gatheringSpotId: EGatheringSpot.CORIANDER, itemId: EItem.FIELD_COLLECTION },
    { gatheringSpotId: EGatheringSpot.CORIANDER, itemId: EItem.CORIANDER },

    { gatheringSpotId: EGatheringSpot.ALMOND, itemId: EItem.FIELD_COLLECTION },
    { gatheringSpotId: EGatheringSpot.ALMOND, itemId: EItem.ALMOND_FLOWERS },

    { gatheringSpotId: EGatheringSpot.BLUE_ORCHID, itemId: EItem.FOREST_COLLECTION },
    { gatheringSpotId: EGatheringSpot.BLUE_ORCHID, itemId: EItem.RED_FROG },

    { gatheringSpotId: EGatheringSpot.SNAPDRAGON, itemId: EItem.FIELD_COLLECTION },
    { gatheringSpotId: EGatheringSpot.SNAPDRAGON, itemId: EItem.CENTIPEDE },

    { gatheringSpotId: EGatheringSpot.MULBERRY_TREE, itemId: EItem.GARDEN_COLLECTION },
    { gatheringSpotId: EGatheringSpot.MULBERRY_TREE, itemId: EItem.SILKWORM_PUPA },


    // ECategory.WOODCRAFTING
    { gatheringSpotId: EGatheringSpot.YOUNG_BAMBOO, itemId: EItem.ROTTEN_WOOD },
    { gatheringSpotId: EGatheringSpot.YOUNG_BAMBOO, itemId: EItem.BAMBOO_SHOOTS },

    { gatheringSpotId: EGatheringSpot.BAMBOO, itemId: EItem.ROTTEN_WOOD },
    { gatheringSpotId: EGatheringSpot.BAMBOO, itemId: EItem.BAMBOO_STALKS },

    { gatheringSpotId: EGatheringSpot.PEACH_TREE, itemId: EItem.ORDINARY_WOOD },
    { gatheringSpotId: EGatheringSpot.PEACH_TREE, itemId: EItem.PEACH_BLOSSOMS },

    { gatheringSpotId: EGatheringSpot.TERMITE_MOUND, itemId: EItem.ORDINARY_WOOD },
    { gatheringSpotId: EGatheringSpot.TERMITE_MOUND, itemId: EItem.TERMITE },

    { gatheringSpotId: EGatheringSpot.SANDALWOOD, itemId: EItem.ORDINARY_WOOD },
    { gatheringSpotId: EGatheringSpot.SANDALWOOD, itemId: EItem.SANDAL },

    { gatheringSpotId: EGatheringSpot.CEDAR, itemId: EItem.ORDINARY_WOOD },
    { gatheringSpotId: EGatheringSpot.CEDAR, itemId: EItem.CEDAR_NEEDLES },

    { gatheringSpotId: EGatheringSpot.SPRUCE, itemId: EItem.HIGH_QUALITY_WOOD },
    { gatheringSpotId: EGatheringSpot.SPRUCE, itemId: EItem.SPRUCE_NEEDLES },

    { gatheringSpotId: EGatheringSpot.GLOWING_MUSHROOM, itemId: EItem.HIGH_QUALITY_WOOD },
    { gatheringSpotId: EGatheringSpot.GLOWING_MUSHROOM, itemId: EItem.GLOWING_BERRY },

    { gatheringSpotId: EGatheringSpot.MAPLE, itemId: EItem.VALUABLE_WOOD },
    { gatheringSpotId: EGatheringSpot.MAPLE, itemId: EItem.MAPLE_LEAFS },

    { gatheringSpotId: EGatheringSpot.GOLDEN_OAK, itemId: EItem.VALUABLE_WOOD },
    { gatheringSpotId: EGatheringSpot.GOLDEN_OAK, itemId: EItem.PITCH },

    { gatheringSpotId: EGatheringSpot.DEAD_TREE, itemId: EItem.FIRST_CLASS_WOOD },
    { gatheringSpotId: EGatheringSpot.DEAD_TREE, itemId: EItem.STICKMAN },

    // ECategory.FISHING

    // ECategory.MERCHANT

];
