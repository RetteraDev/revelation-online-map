import { TreeViewBaseItem } from "@mui/x-tree-view"
import { IItem, items } from "./item";
import { categories } from "./category";
import { ECategory, EItem } from "./enums";


// Функция для преобразования данных в древовидную структуру
export function buildResourcesTree(items: Record<string, IItem>): TreeViewBaseItem[] {
  const itemsByCategory = new Map<string, string[]>();

  Object.keys(categories).forEach(categoryId => {
    if (!categories[categoryId].hide) {
        itemsByCategory.set(categoryId, [])
      }
    })

  Object.keys(items).forEach(itemId => {
    if (!items[itemId].hide) {
      itemsByCategory.get(items[itemId].category)?.push(itemId);
    }
  });

  return Array.from(itemsByCategory.entries()).map(([categoryId, itemsInCategory]) => ({
    id: categoryId,
    label: categories[categoryId].name,
    children: itemsInCategory
    .map(item => ({
      id: item,
      label: items[item].name,
      icon: 1
    })),
    icon: 1
  }));
}

export const resourcesTreeFilter: TreeViewBaseItem[] = buildResourcesTree(items);
