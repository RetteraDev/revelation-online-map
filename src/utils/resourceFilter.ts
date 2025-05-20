import { categories, gatheringSpotItems, gatheringSpots, IMapPoint, items, mapPoints } from "../data/resources";

export interface ISearchResult {
  name: string
  id: string
  type: 'category' | 'gatheringSpot' | 'item'
}

// Формирование фильтра
export function searchAll(partialName: string): ISearchResult[] {
  const results: ISearchResult[] = [];
  
  // Поиск по категориям
  Object.entries(categories).forEach(([id, category]) => {
    if (category.categoryName.toLowerCase().includes(partialName.toLowerCase())) {
      results.push({
        name: category.categoryName,
        id: id,
        type: 'category'
      });
    }
  });
  
  // Поиск по точкам сбора
  Object.entries(gatheringSpots).forEach(([id, spot]) => {
    if (spot.gatheringSpotName.toLowerCase().includes(partialName.toLowerCase())) {
      results.push({
        name: spot.gatheringSpotName,
        id: id,
        type: 'gatheringSpot'
      });
    }
  });
  
  // Поиск по предметам
  Object.entries(items).forEach(([id, item]) => {
    if (item.itemName.toLowerCase().includes(partialName.toLowerCase())) {
      results.push({
        name: item.itemName,
        id: id,
        type: 'item'
      });
    }
  });
  
  return results;
}


// Поиск точек на карте по фильтру
export function filterMapPoints(filter: ISearchResult): IMapPoint[] {
  switch (filter.type) {
    case 'category':
      // Для категории находим все точки сбора этой категории, затем все mapPoints с этими точками
      const categoryId = parseInt(filter.id);
      const spotsInCategory = Object.entries(gatheringSpots)
        .filter(([_, spot]) => spot.category === categoryId)
        .map(([id]) => parseInt(id));
      
      return mapPoints.filter(point => 
        spotsInCategory.includes(point.gatheringSpotId)
      );

    case 'gatheringSpot':
      // Для точки сбора просто фильтруем по gatheringSpotId
      const spotId = parseInt(filter.id);
      return mapPoints.filter(point => 
        point.gatheringSpotId === spotId
      );

    case 'item':
      // Для предмета находим все точки сбора, где он встречается, затем все mapPoints с этими точками
      const itemId = parseInt(filter.id);
      const spotsWithItem = gatheringSpotItems
        .filter(gsItem => gsItem.itemId === itemId)
        .map(gsItem => gsItem.gatheringSpotId);
      
      return mapPoints.filter(point => 
        spotsWithItem.includes(point.gatheringSpotId)
      );

    default:
      return [];
  }
}
