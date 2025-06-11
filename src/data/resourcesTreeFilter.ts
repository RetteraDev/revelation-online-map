import { TreeViewBaseItem } from "@mui/x-tree-view"
import { ECategory, EItem, IItem, categories, items } from "./resources";

// Функция для преобразования данных в древовидную структуру
export function buildResourcesTree(items: Record<EItem, IItem>): TreeViewBaseItem[] {
  const itemsByCategory = new Map<ECategory, IItem[]>();

  Object.values(ECategory).forEach(category => {
    itemsByCategory.set(category, []);
  });

  Object.values(items).forEach(item => {
    itemsByCategory.get(item.category)?.push(item);
  });

  return Array.from(itemsByCategory.entries()).map(([category, items]) => ({
    id: category.toString(),
    label: categories[category].name,
    children: items
    .map(item => ({
      id: item.id.toString(),
      label: item.name,
    })),
  }));
}

export const resourcesTreeFilter: TreeViewBaseItem[] = buildResourcesTree(items);
