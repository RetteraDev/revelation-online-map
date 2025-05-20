export type Location = {
    x: number
    y: number
    z: number
}


export enum ECategory {
    MINING = 1,
    HERBALISM = 2,
    WOODCRAFTING = 3,
    MERCHANT = 4
}

export interface ICategory {
  categoryName: string
  icon?: string;
}



export enum EGatheringSpot {
    // ECategory.MINING
    COPPER_VEIN = 1,
    IRON_VEIN = 2,

    // ECategory.HERBALISM
    // ECategory.WOODCRAFTING
    // ECategory.MERCHANT
}

export interface IGatheringSpot {
  gatheringSpotName: string
  icon?: string
  category: ECategory
}



export enum EItem {
    LIMESTONE = 1,
    IRON_ORE = 2,
    COOPER_ORE = 3,
    FERN_LEAVES = 4,
    WOOD_MAPLE = 5,
}

export interface IItem {
  itemName: string
  icon?: string
  price?: number
}


export const categories: Record<ECategory, ICategory> = {
  [ECategory.MINING]: { categoryName: 'Горное дело', icon: '⛏️' },
  [ECategory.HERBALISM]: { categoryName: 'Травничество', icon: '🌿' },
  [ECategory.WOODCRAFTING]: { categoryName: 'ЗаготовкаДревесины', icon: '🪵' },
  [ECategory.MERCHANT]: { categoryName: 'Ресурсы у торговцев', icon: '🏪' }
};

export const gatheringSpots: Record<EGatheringSpot, IGatheringSpot> = {
  [EGatheringSpot.COPPER_VEIN]: { gatheringSpotName: 'МеднаяЖила', icon: '', category: ECategory.MINING },
  [EGatheringSpot.IRON_VEIN]: { gatheringSpotName: 'ЖелезнаяЖила', icon: '', category: ECategory.MINING },
};

export const items: Record<EItem, IItem> = {
    [EItem.LIMESTONE]: { itemName: 'Известняк', icon: '' },
    [EItem.IRON_ORE]: { itemName: 'Железная руда', icon: '' },
    [EItem.COOPER_ORE]: { itemName: 'Медная руда', icon: '' },
    [EItem.FERN_LEAVES]: { itemName: 'Листья папоротника', icon: '' },
    [EItem.WOOD_MAPLE]: { itemName: 'Древесина клена', icon: '' },
}


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
  { gatheringSpotId: EGatheringSpot.COPPER_VEIN, itemId: EItem.LIMESTONE },
  { gatheringSpotId: EGatheringSpot.COPPER_VEIN, itemId: EItem.COOPER_ORE },

  { gatheringSpotId: EGatheringSpot.IRON_VEIN, itemId: EItem.IRON_ORE },
  { gatheringSpotId: EGatheringSpot.IRON_VEIN, itemId: EItem.LIMESTONE },
];
