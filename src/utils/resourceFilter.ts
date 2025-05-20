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
export function filterMapPoints(searchParams: URLSearchParams): IMapPoint[] {
  // Проверяем, какой ключ есть в searchParams
  if (searchParams.has('category')) {
    const categoryId = parseInt(searchParams.get('category') || '');
    if (isNaN(categoryId)) return [];

      const spotsInCategory = Object.entries(gatheringSpots)
        .filter(([_, spot]) => spot.category === categoryId)
        .map(([id]) => parseInt(id));
      
      return mapPoints.filter(point => 
        spotsInCategory.includes(point.gatheringSpotId)
      );
  }

  if (searchParams.has('gatheringSpot')) {
    const spotId = parseInt(searchParams.get('gatheringSpot') || '');
    if (isNaN(spotId)) return [];

      return mapPoints.filter(point => 
        point.gatheringSpotId === spotId
      );
  }

  if (searchParams.has('item')) {
    const itemId = parseInt(searchParams.get('item') || '');
    if (isNaN(itemId)) return [];

      const spotsWithItem = gatheringSpotItems
        .filter(gsItem => gsItem.itemId === itemId)
        .map(gsItem => gsItem.gatheringSpotId);
      
      return mapPoints.filter(point => 
        spotsWithItem.includes(point.gatheringSpotId)
      );
  }

  return [];
}