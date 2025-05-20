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
    mapPointId: number;
    gatheringSpotId: EGatheringSpot;
    location: Location;
    isActive?: boolean; // Может быть когда-то будет использоваться, если будет API
}

export const mapPoints: IMapPoint[] = [
    // ECategory.MINING - SCATTERING_OF_PEBBLE (Галька)
    { mapPointId: 1, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5262, y: -1488, z: 0 } },
    { mapPointId: 2, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5730, y: -1739, z: 0 } },
    { mapPointId: 3, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5742, y: -1506, z: 3 } },
    { mapPointId: 4, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5765, y: -5, z: 0 } },
    { mapPointId: 5, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5778, y: -1673, z: 0 } },
    { mapPointId: 6, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5778, y: -1770, z: 46 } },
    { mapPointId: 7, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5792, y: -1809, z: 2 } },
    { mapPointId: 8, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5831, y: -1547, z: 49 } },
    { mapPointId: 9, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5894, y: 40, z: 14 } },
    { mapPointId: 10, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5909, y: -234, z: 4 } },
    { mapPointId: 11, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5909, y: -1817, z: 0 } },
    { mapPointId: 12, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5912, y: 9, z: 0 } },
    { mapPointId: 13, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5915, y: -1609, z: 32 } },
    { mapPointId: 14, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5918, y: -303, z: 16 } },
    { mapPointId: 15, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5920, y: 362, z: 2 } },
    { mapPointId: 16, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5926, y: -1617, z: 28 } },
    { mapPointId: 17, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5927, y: -303, z: 2 } },
    { mapPointId: 18, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5944, y: -6, z: 0 } },
    { mapPointId: 19, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5976, y: 137, z: 2 } },
    { mapPointId: 20, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 5981, y: 174, z: 28 } },
    { mapPointId: 21, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 6006, y: 386, z: 11 } },
    { mapPointId: 22, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 6008, y: 333, z: 0 } },
    { mapPointId: 23, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 6024, y: -41, z: 9 } },
    { mapPointId: 24, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 6026, y: -333, z: 3 } },
    { mapPointId: 25, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 6027, y: 239, z: 6 } },
    { mapPointId: 26, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 6029, y: -1901, z: 0 } },
    { mapPointId: 27, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 6031, y: -62, z: 4 } },
    { mapPointId: 28, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 6038, y: 850, z: 13 } },
    { mapPointId: 29, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 6041, y: -345, z: 2 } },
    { mapPointId: 30, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 6041, y: -371, z: 36 } },
    { mapPointId: 31, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 6120, y: -442, z: 13 } },
    { mapPointId: 32, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 6129, y: -501, z: 0 } },
    { mapPointId: 33, gatheringSpotId: EGatheringSpot.SCATTERING_OF_PEBBLE, location: { x: 6173, y: 480, z: 0 } },

    // ECategory.MINING - SILVER_VEIN (Серебро)
    { mapPointId: 34, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4113, y: -1922, z: 131 } },
    { mapPointId: 35, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4141, y: -1672, z: 122 } },
    { mapPointId: 36, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4144, y: -1612, z: 139 } },
    { mapPointId: 37, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4164, y: -1704, z: 104 } },
    { mapPointId: 38, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4181, y: -1783, z: 135 } },
    { mapPointId: 39, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4195, y: -1977, z: 46 } },
    { mapPointId: 40, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4199, y: -2082, z: 64 } },
    { mapPointId: 41, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4203, y: -1933, z: 54 } },
    { mapPointId: 42, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4225, y: -1856, z: 41 } },
    { mapPointId: 43, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4232, y: -1825, z: 51 } },
    { mapPointId: 44, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4236, y: -1694, z: 106 } },
    { mapPointId: 45, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4241, y: -2089, z: 90 } },
    { mapPointId: 46, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4249, y: -2004, z: 45 } },
    { mapPointId: 47, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4257, y: -1767, z: 51 } },
    { mapPointId: 48, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4258, y: -1880, z: 39 } },
    { mapPointId: 49, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4262, y: -2079, z: 67 } },
    { mapPointId: 50, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4264, y: -1890, z: 40 } },
    { mapPointId: 51, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4266, y: -1740, z: 83 } },
    { mapPointId: 52, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4273, y: -2090, z: 116 } },
    { mapPointId: 53, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4280, y: -1650, z: 92 } },
    { mapPointId: 54, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4293, y: -2065, z: 64 } },
    { mapPointId: 55, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4299, y: -2077, z: 95 } },
    { mapPointId: 56, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4307, y: -1641, z: 131 } },
    { mapPointId: 57, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4311, y: -2029, z: 45 } },
    { mapPointId: 58, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4321, y: -1582, z: 135 } },
    { mapPointId: 59, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4328, y: -1922, z: 35 } },
    { mapPointId: 60, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4338, y: -2007, z: 55 } },
    { mapPointId: 61, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4352, y: -1962, z: 40 } },
    { mapPointId: 62, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4378, y: -1816, z: 40 } },
    { mapPointId: 63, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4391, y: -1842, z: 42 } },
    { mapPointId: 64, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4392, y: -1712, z: 62 } },
    { mapPointId: 65, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4393, y: -1708, z: 74 } },
    { mapPointId: 66, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4394, y: -1762, z: 59 } },
    { mapPointId: 67, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4407, y: -1689, z: 81 } },
    { mapPointId: 68, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4407, y: -1916, z: 50 } },
    { mapPointId: 69, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4415, y: -1880, z: 35 } },
    { mapPointId: 70, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4416, y: -1941, z: 85 } },
    { mapPointId: 71, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4422, y: -1767, z: 80 } },
    { mapPointId: 72, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4225, y: -1688, z: 49 } },
    { mapPointId: 73, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4425, y: -1915, z: 44 } },
    { mapPointId: 74, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4468, y: -1877, z: 60 } },
    { mapPointId: 75, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4493, y: -1707, z: 74 } },
    { mapPointId: 76, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4500, y: -1750, z: 63 } },
    { mapPointId: 77, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4528, y: -1787, z: 61 } },
    { mapPointId: 78, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4529, y: -1938, z: 59 } },
    { mapPointId: 79, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4541, y: -1859, z: 65 } },
    { mapPointId: 80, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4577, y: -1890, z: 60 } },
    { mapPointId: 81, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4625, y: -1806, z: 74 } },
    { mapPointId: 82, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4633, y: -1771, z: 118 } },
    { mapPointId: 83, gatheringSpotId: EGatheringSpot.SILVER_VEIN, location: { x: 4646, y: -1743, z: 124 } },

    // ECategory.MINING - COPPER_VEIN (Медь)
    { mapPointId: 84, gatheringSpotId: EGatheringSpot.COPPER_VEIN, location: { x: 495, y: 2159, z: 13 } },
    { mapPointId: 85, gatheringSpotId: EGatheringSpot.COPPER_VEIN, location: { x: 544, y: 2060, z: -20 } },
    { mapPointId: 86, gatheringSpotId: EGatheringSpot.COPPER_VEIN, location: { x: 658, y: 1891, z: 73 } },
    { mapPointId: 87, gatheringSpotId: EGatheringSpot.COPPER_VEIN, location: { x: 1462, y: 1045, z: -117 } },
    { mapPointId: 88, gatheringSpotId: EGatheringSpot.COPPER_VEIN, location: { x: 5273, y: -2619, z: 29 } },
    { mapPointId: 89, gatheringSpotId: EGatheringSpot.COPPER_VEIN, location: { x: 5285, y: -2638, z: 42 } },
    { mapPointId: 90, gatheringSpotId: EGatheringSpot.COPPER_VEIN, location: { x: 5379, y: -2461, z: 21 } },
    { mapPointId: 91, gatheringSpotId: EGatheringSpot.COPPER_VEIN, location: { x: 5380, y: -2388, z: 4 } },
    { mapPointId: 92, gatheringSpotId: EGatheringSpot.COPPER_VEIN, location: { x: 5390, y: -2298, z: 24 } },
    { mapPointId: 93, gatheringSpotId: EGatheringSpot.COPPER_VEIN, location: { x: 5410, y: -2205, z: 31 } },
    { mapPointId: 94, gatheringSpotId: EGatheringSpot.COPPER_VEIN, location: { x: 5432, y: -2531, z: 21 } },
    { mapPointId: 95, gatheringSpotId: EGatheringSpot.COPPER_VEIN, location: { x: 5435, y: -2596, z: 67 } },
    { mapPointId: 96, gatheringSpotId: EGatheringSpot.COPPER_VEIN, location: { x: 5443, y: -2716, z: 1 } },
    { mapPointId: 97, gatheringSpotId: EGatheringSpot.COPPER_VEIN, location: { x: 5449, y: -2587, z: 14 } },
    { mapPointId: 98, gatheringSpotId: EGatheringSpot.COPPER_VEIN, location: { x: 5473, y: -2709, z: 58 } },
    { mapPointId: 99, gatheringSpotId: EGatheringSpot.COPPER_VEIN, location: { x: 5489, y: -2647, z: 48 } },
    { mapPointId: 100, gatheringSpotId: EGatheringSpot.COPPER_VEIN, location: { x: 5493, y: -2339, z: 0 } },
    // ... (продолжение для остальных точек меди)
    
    // ECategory.MINING - GOLD_VEIN (Золото)
    { mapPointId: 150, gatheringSpotId: EGatheringSpot.GOLD_VEIN, location: { x: 1286, y: 321, z: 8 } },
    { mapPointId: 151, gatheringSpotId: EGatheringSpot.GOLD_VEIN, location: { x: 4035, y: 1295, z: 32 } },
    { mapPointId: 152, gatheringSpotId: EGatheringSpot.GOLD_VEIN, location: { x: 4187, y: 1138, z: 5 } },
    // ... (продолжение для остальных точек золота)

    // ECategory.MINING - IRON_VEIN (Железо)
    { mapPointId: 200, gatheringSpotId: EGatheringSpot.IRON_VEIN, location: { x: 822, y: 621, z: -263 } },
    { mapPointId: 201, gatheringSpotId: EGatheringSpot.IRON_VEIN, location: { x: 999, y: 524, z: 0 } },
    // ... (продолжение для остальных точек железа)

    // ECategory.MINING - SPINEL_VEIN (Шпинель)
    { mapPointId: 250, gatheringSpotId: EGatheringSpot.SPINEL_VEIN, location: { x: 593, y: 1914, z: 55 } },
    // ... (продолжение для остальных точек шпинели)

    // ECategory.MINING - BAUXITE_VEIN (Боксит)
    { mapPointId: 300, gatheringSpotId: EGatheringSpot.BAUXITE_VEIN, location: { x: -182, y: -311, z: 2 } },
    // ... (продолжение для остальных точек боксита)

    // ECategory.MINING - LIMONITE_VEIN (Лимонит)
    { mapPointId: 350, gatheringSpotId: EGatheringSpot.LIMONITE_VEIN, location: { x: -2260, y: 403, z: 217 } },
    // ... (продолжение для остальных точек лимонита)

    // ECategory.MINING - AMETRINE_VEIN (Аметрин)
    { mapPointId: 400, gatheringSpotId: EGatheringSpot.AMETRINE_VEIN, location: { x: -1163, y: 939, z: 326 } },
    // ... (продолжение для остальных точек аметрина)

    // ECategory.MINING - JADE_VEIN (Нефрит)
    { mapPointId: 450, gatheringSpotId: EGatheringSpot.JADE_VEIN, location: { x: 2915, y: 169, z: 152 } },
    // ... (продолжение для остальных точек нефрита)

    // ECategory.MINING - RHYOLITE_VEIN (Риолит)
    { mapPointId: 500, gatheringSpotId: EGatheringSpot.RHYOLITE_VEIN, location: { x: -2948, y: -1196, z: 161 } },
    // ... (продолжение для остальных точек риолита)

    // ECategory.MINING - CORUNDUM_VEIN (Корунд)
    { mapPointId: 550, gatheringSpotId: EGatheringSpot.CORUNDUM_VEIN, location: { x: -2248, y: -50, z: 160 } },
    // ... (продолжение для остальных точек корунда)

    // ECategory.HERBALISM - CHAMPIGNONS (Шампиньоны)
    { mapPointId: 600, gatheringSpotId: EGatheringSpot.CHAMPIGNON, location: { x: 5225, y: -1998, z: 29 } },

    // ECategory.HERBALISM - ROSEHIP (Шиповник)
    { mapPointId: 601, gatheringSpotId: EGatheringSpot.ROSEHIP, location: { x: 5107, y: -1437, z: 2 } },
    { mapPointId: 602, gatheringSpotId: EGatheringSpot.ROSEHIP, location: { x: 5227, y: -1632, z: 1 } },
    // ... (продолжение для остальных точек шиповника)

    // ECategory.WOODCRAFTING - BAMBOO (Бамбук)
    { mapPointId: 700, gatheringSpotId: EGatheringSpot.BAMBOO, location: { x: 5796, y: -1133, z: 25 } },

    // ECategory.WOODCRAFTING - PEACH_TREE (Персиковое дерево)
    { mapPointId: 701, gatheringSpotId: EGatheringSpot.PEACH_TREE, location: { x: 5242, y: -1464, z: 0 } },
    { mapPointId: 702, gatheringSpotId: EGatheringSpot.PEACH_TREE, location: { x: 5258, y: -1675, z: 1 } },
    { mapPointId: 703, gatheringSpotId: EGatheringSpot.PEACH_TREE, location: { x: 5294, y: -1944, z: 7 } },
];


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
